const fs = require("fs");

let num = 0;
fs.readFile(process.argv[2], {}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const ss = data.toString().split("\n");
    console.log(ss.length - 1);
  }
});
