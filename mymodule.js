const fs = require("fs");

const fn = (dirName, extension, callback) => {
  fs.readdir(dirName, {}, (err, files) => {
    if (err) {
      return callback(err);
    }
    const filteredFiles = [];
    files.forEach((file) => {
      if (file.includes(`.${extension}`)) {
        filteredFiles.push(file);
      }
    });
    return callback(null, filteredFiles);
  });
};

module.exports = fn;
