const addIgnore = require('./tools/gitignore');
const addTslint = require('./tools/tslint');
const delUnderLineFile = require('./tools/delUnderLineFile');

const addAction = {
  ignore: addIgnore,
  lint: addTslint,
  tslint: addTslint,

  // 递归删除带'._'开头的文件，这些文件不知道怎么产生的
  underline: delUnderLineFile,
};

module.exports = {
  addAction,
};
