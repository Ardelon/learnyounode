const mymodule = require("./mymodule.js");

const callback = (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((element) => {
      console.log(element);
    });
  }
};

mymodule(process.argv[2], process.argv[3], callback);
