// eslint-disable-next-line import/no-extraneous-dependencies
const editJsonFile = require('edit-json-file');
const path = require('path');
const { VERSION } = require('../version');

const packageJsonPath = path.resolve(__dirname, '../package.json');
const file = editJsonFile(packageJsonPath);

file.set('version', VERSION);

file.save();
