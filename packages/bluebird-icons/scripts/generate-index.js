const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components');
const outputFilePath = path.join(__dirname, '../src/index.js');

/**
 * TODO: future we could run svgr to generate the components into `./src/components`.
 * Today this is handled by `yarn -> @svgr/cli`
 */

/**
 * Generate a new lib index.js based on components in `lib/components`
 */
fs.readdir(dir, (err, componentsFileNames) => {
  if (!err) {
    // gather file contents from components directory
    const fileContents = componentsFileNames.reduce((a, componentFileName) => {
      return (a += `export ${
        componentFileName.split('.')[0]
      } from './components/${componentFileName}';\n`);
    }, '');

    console.log('fileContents', fileContents);

    // write file
    fs.writeFile(outputFilePath, fileContents, err => {
      if (err) throw err;
      console.log(`${outputFilePath} has been generated`);
    });
  } else {
    console.err(`There were no components to import from ${dir}.`);
  }
});
