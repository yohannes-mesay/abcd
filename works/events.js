const fs = require("fs");
const server = require("http").createServer();
server.on("request", (req, res) => {
  const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end("finished");
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("not found");
  //   });
  readable.pipe(res);
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
