import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const UnlockedRunner = /\b(npx|pnpx|dlx|npm exec)\b/;

const manifests = {
    "package.json": resolve(__dirname, "../../../../package.json"),
    "packages/components/package.json": resolve(__dirname, "../../package.json")
};

Object.entries(manifests).forEach(([name, path]) => {
    const scripts: Record<string, string> = JSON.parse(fs.readFileSync(path, "utf-8")).scripts;

    Object.entries(scripts).forEach(([script, command]) => {
        test(`${name} "${script}" script only runs locked packages`, () => {
            expect(command).not.toMatch(UnlockedRunner);
        });
    });
});
