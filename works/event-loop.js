const fs = require("fs");

const text = fs.readFile("./test-file.txt", () => {
  console.log("reading file");
});
setImmediate(() => {
  console.log("immediate");
});

setTimeout(() => {
  console.log("time out");
}, 0);
console.log("top level");
