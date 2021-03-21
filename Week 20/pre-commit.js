#!/usr/bin/env node
let process = require("process");
let child_process = require("child_process");
const {ESlint, ESLint} = require("eslint");

function exec(name) {
  return new Promise(function(resolve) {
    child_process.exec(name, resolve);
  });
}

(async function main() {
  // 1. Create an instance with the `fix` option
  const eslint = new ESLint({fix: false});

  // 2. Lint files. This doesn't modify target files.
  await exec("git stash push -k");
  
  const results = await eslint.lintFiles(["**/git-demo/index.js"]);

  await exec("git stash pop");

  // 3. Modify the files with the fixed code.
  // await ESLint.outputFixes(results);

  // 4. Format the results.
  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);

  // 5. Output it.
  console.log(resultText);
  
  for (let result of results) {
    if (result.errorCount) {
      process.exitCode = 1;
    }
  }

})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});