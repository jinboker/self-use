const fs = require('fs');
const path = require('path');

/*
 * 遍历文件夹
 */
function mapDir(filePath) {
  fs.readdir(filePath, (err, files) => {
    if (err) {
      console.error(`${filePath} 这个路径上报错`);
      return;
    }

    files.forEach(fileName => {
      if (fileName === 'node_modules') {
        return;
      }

      // 获取当前文件的绝对路径
      const curFilePath = path.join(filePath, fileName);

      fs.stat(curFilePath, (error, stats) => {
        if (error) {
          console.error(`获取 ${curFilePath} 文件 stats 失败`);
          return;
        }

        const reg = /^\._.+$/ig;
        const isFile = stats.isFile();
        const isDir = stats.isDirectory();

        if (isFile && reg.test(fileName)) {
          fs.unlink(curFilePath, _err => {
            if (_err) {
              console.error(`删除 ${curFilePath} 文件失败`);
            } else {
              console.error(`删除 ${fileName} 成功`);
            }
          });
        }

        if (isDir) {
          mapDir(curFilePath);
        }
      });
    });
  });
}

module.exports = function delUnderLineFile() {
  const cwd = process.cwd();

  mapDir(cwd);
};
