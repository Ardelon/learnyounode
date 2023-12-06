const http = require("http");

http
  .get(process.argv[2], (response) => {
    let data = "";
    response.setEncoding("utf8");
    response.on("data", (newData) => {
      data += newData.toString();
    });
    response.on("end", () => {
      console.log(data.length);
      console.log(data);
    });
  })
  .on("error", console.error);
