const addIgnore = require('./tools/gitignore');

const addAction = {
  ignore: addIgnore,
  lint: 'lint',
  tslint: 'tslint',
};

module.exports = {
  addAction,
};
