/**
 * 添加全局最基本的gitingore
 */
const fs = require('fs');
const path = require('path');

module.exports = async function addIgnore () {
  const cwd = process.cwd();
  const gitignorePath = path.join(cwd, '.gitignore');

  if (fs.existsSync(gitignorePath)) {
    console.warn('.gitignore 文件已存在');
  } else {
    const data = fs.readFileSync(path.join(__dirname, '.gitignore'));

    fs.writeFileSync(gitignorePath, data);
  }
};
