/**
 * 添加tslint
 */
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

module.exports = function addTslint () {
  const child = spawn('npm', ['i', '@umijs/fabric', '-D'], { stdio: 'inherit' });

  // 执行完 npm i 命令
  child.on('close', () => {
    const cwd = process.cwd();

    if (fs.existsSync(path.join(cwd, 'package.json'))) {
      const data = fs.readFileSync(path.join(__dirname, '.eslintrc.js'));

      fs.writeFileSync(path.join(cwd, '.eslintrc.js'), data);
    } else {
      throw Error('请先 npm init 添加 package.json 文件');
    }
  });
};
