const http = require("http");
const EventEmitter = require("node:events");

const urlGet = (url, parentData, index, eventEmitter) => {
  http
    .get(url, (response) => {
      let data = "";
      response.setEncoding("utf8");
      response.on("data", (newData) => {
        data += newData;
      });
      response.on("end", () => {
        parentData[index] = data;
        eventEmitter.emit("end");
      });
    })
    .on("error", console.error);
};
const fn = (urlList) => {
  const eventEmitter = new EventEmitter();
  let streamCount = urlList.length;
  let endCount = 0;
  const data = new Array(urlList.length);

  urlList.forEach((url, index) => {
    urlGet(url, data, index, eventEmitter);
  });
  eventEmitter.on("end", () => {
    endCount++;
    if (endCount === streamCount) {
      data.forEach((elem) => {
        console.log(elem);
      });
    }
  });
};

fn([process.argv[2], process.argv[3], process.argv[4]]);
