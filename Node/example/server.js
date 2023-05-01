const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const users = { 0: "유저1", 1: "유저2" };
let count = 2;

const server = http
  .createServer(async (req, res) => {
    console.log(req.url);
    console.log(path.basename(req.url));
    console.log(path.extname(req.url));

    let type;
    if (req.url === "/") {
      type = "text/html";
    } else if (path.extname(req.url) === ".html") {
      type = "text/html";
    } else if (path.extname(req.url) === ".png") {
      type = "image/png";
    } else if (path.extname(req.url) === ".jpg") {
      type = "image/jpg";
    }
    console.log(type);

    let filepath;
    if (req.url === "/") {
      filepath = path.join(__dirname, "index.html");
    } else {
      filepath = path.join(__dirname, path.basename(req.url));
    }
    console.log(filepath);

    try {
      const data = await fs.readFile(filepath);
      res.writeHead(200, { "Content-Type": `${type}; charset-utf-8` });
      res.end(data);
    } catch (err) {
      console.log(err);
      res.writeHead(404, { "Content-Type": "text/html; charset-utf-8" });
      res.end("<h1>404 Error</h1>");
    }
  })
  .listen(8080, () => {
    console.log("서버 시작");
  });
