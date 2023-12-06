const fs = require("fs");

const ss = fs.readFileSync(process.argv[2]);

const newLineCount = ss.toString().split("\n");
console.log(newLineCount.length - 1);
