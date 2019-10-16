#!/usr/bin/env node

// This script will look at the engines key in package.json and
// fail if the installed applications do not satisfy the listed versions.
//
// Usage: node ./check-env.js [./package.json]
//
// Example engines attribute in package.json:
// "engines": { "node": "^10", "npm": "^6", "yarn": "^1"},

// you will need to run npm install or yarn to get this
const { satisfies } = require('semver');

// load a mechanism for interacting with shell commands
const { execSync } = require('child_process');

// allow the location of package.json to be passed in
const [,, ...[packageJson]] = process.argv;

// extract the engines definitions from package.json
const { engines } = require(packageJson || '../package');

// succeed if we didn't specify engines
if (!engines) { process.exit(0); }

// read the application names from the keys defined in engines
const apps = Object.keys(engines);

// tell execSync to only pass along stdout
const stdio = ['ignore', 'pipe', 'ignore'];

// leave only periods and numbers in our version checking
const nonVerChars = /[^\d\.]/g;

// provide a single copy of the replacement for non numbers
const blank = '';

// exit the shell with a message and a failure code
const fail = msg => { console.error(msg); process.exit(1); };

// ask the child process to return the version for a given engine
const getVer = app => {
  let version;
  try { version = `${execSync(`${app} -v`, {stdio})}`.replace(nonVerChars, blank); }
  catch(e) {};
  if (!version) { fail(`You must install ${app} to use this project!`); }
  if (!satisfies(version, engines[app])) {
    fail(`Required ${app} version ${engines[app]} but found ${version}!`);
  }
};

// check each app listed in engines
apps.forEach(app => getVer(app));
