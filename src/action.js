const addIgnore = require('./tools/gitignore');
const addTslint = require('./tools/tslint');

const addAction = {
  ignore: addIgnore,
  lint: addTslint,
  tslint: addTslint,
};

module.exports = {
  addAction,
};
