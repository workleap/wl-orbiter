import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

type Scripts = Record<string, string>;

const UnlockedRunner = /\b(npx|pnpx|dlx|npm exec)\b/;
const InstallHooks = ["preinstall", "install", "postinstall", "prepare"];
const PublishHooks = ["prepublishOnly", "prepack", "postpack", "publish", "postpublish"];

function readScripts(path: string): Scripts {
    return JSON.parse(fs.readFileSync(resolve(__dirname, path), "utf-8")).scripts;
}

function collectReachableScripts(scripts: Scripts, names: string[], reachable: Scripts = {}) {
    names.flatMap(x => [`pre${x}`, x, `post${x}`]).forEach(x => {
        if (Object.keys(scripts).includes(x) && !Object.keys(reachable).includes(x)) {
            reachable[x] = scripts[x];
            collectReachableScripts(scripts, scripts[x].split(/\s+/), reachable);
        }
    });

    return reachable;
}

const releasePaths = {
    "package.json": collectReachableScripts(readScripts("../../../../package.json"), [...InstallHooks, "release"]),
    "packages/components/package.json": collectReachableScripts(readScripts("../../package.json"), [...InstallHooks, ...PublishHooks, "build"])
};

Object.entries(releasePaths).forEach(([name, scripts]) => {
    test(`${name} install and release scripts only run locked packages`, () => {
        const unlocked = Object.entries(scripts).filter(([, command]) => UnlockedRunner.test(command));

        expect(unlocked).toEqual([]);
    });
});
