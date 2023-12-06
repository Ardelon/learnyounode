const fs = require("fs");

fs.readdir(process.argv[2], {}, (err, files) => {
  if (err) {
    console.log(err);
  }

  files.forEach((file) => {
    if (file.includes(`.${process.argv[3]}`)) {
      console.log(file);
    }
  });
});
