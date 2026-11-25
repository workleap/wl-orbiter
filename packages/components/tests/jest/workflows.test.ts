import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const githubDirectory = resolve(__dirname, "../../../../.github");

const UsesReference = /^\s*(?:-\s+)?uses:\s*["']?([^"'\s#]+)/;
const CommitSha = /@[0-9a-f]{40}$/;

const files = fs.readdirSync(githubDirectory, { recursive: true, encoding: "utf-8" })
    .filter(x => /\.ya?ml$/.test(x))
    .map(x => x.replaceAll("\\", "/"));

files.forEach(file => {
    test(`.github/${file} references every external action by a commit SHA`, () => {
        const mutableReferences = fs.readFileSync(resolve(githubDirectory, file), "utf-8")
            .split("\n")
            .map(line => UsesReference.exec(line)?.[1])
            .filter(x => x !== undefined && !x.startsWith("./") && !CommitSha.test(x));

        expect(mutableReferences).toEqual([]);
    });
});
