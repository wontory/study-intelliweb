const http = require("http");
const fs = require("fs").promises;
const path = require("path");
const querystring = require("querystring");

const users = { 0: "유저1", 1: "유저2", 2: "유저3" };
let count = 3;

const server = http
  .createServer(async (req, res) => {
    if (req.method === "GET") {
      if (req.url === "/") {
        const data = await fs.readFile(path.join(__dirname, "index.html"));
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        return res.end(data);
      } else if (req.url === "/about") {
        const data = await fs.readFile(path.join(__dirname, "about.html"));
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        return res.end(data);
      } else if (req.url === "/users") {
        res.writeHead(200, {
          "Content-Type": "application/json; charset=utf-8",
        });
        return res.end(JSON.stringify(users));
      } else {
        try {
          const data = await fs.readFile(path.join(__dirname, req.url));
          return res.end(data);
        } catch {
          res.writeHead(404);
          return res.end("NOT FOUND");
        }
      }
    } else if (req.method === "POST") {
      if (req.url === "/user") {
        let postdata = "";
        req.on("data", (data) => {
          postdata += data;
        });
        return req.on("end", async () => {
          users[count++] = querystring.parse(postdata).name;
          res.writeHead(302, { Location: "/" });
          return res.end();
        });
      }
    } else if (req.method === "PUT") {
      if (req.url.startsWith("/user/")) {
        const id = req.url.split("/")[2];
        let postdata = "";
        req.on("data", (data) => {
          postdata += data;
        });
        return req.on("end", () => {
          users[id] = querystring.parse(postdata).name;
          res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8",
          });
          return res.end(JSON.stringify(users));
        });
      }
    } else if (req.method === "DELETE") {
      if (req.url.startsWith("/user/")) {
        const id = req.url.split("/")[2];
        delete users[id];
        res.writeHead(200, {
          "Content-Type": "application/json; charset=utf-8",
        });
        return res.end(JSON.stringify(users));
      }
    }
  })
  .listen(8080, () => {
    console.log("Start server (8080)");
  });
