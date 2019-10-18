/**
 * remove directories before clean build
 */
const fs = require('fs-extra');
const path = require('path');

const cleanupDirs = [
  path.join(__dirname, '../src/components'),
  path.join(__dirname, '../dist'),
];

cleanupDirs.forEach(folder =>
  fs
    .remove(folder)
    .then(() => {
      console.warn(`Removed dir ${folder}`);
    })
    .catch(err => {
      console.error(err);
    }),
);
