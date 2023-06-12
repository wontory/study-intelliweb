const express = require("express");
const router = express.Router();

const users = [];
const ids = [];

router.use((req, res, next) => {
  next();
});

router.get("/req1", (req, res) => {
  console.log("응답1");
  res.send("응답1");
});

router.post("/req2", (req, res, next) => {
  const data = { name: req.body.name, email: req.body.email };
  users.push(data);

  let html = "<ul>";
  for (id in users) {
    html += `<li>이름 : ${users[id].name}, 이메일 : ${users[id].email}</li>`;
  }

  res.send(html + "</ul>");
});

router.post("/req3", (req, res, next) => {
  if (ids.findIndex((id) => id.id === req.body.id) === -1) {
    const data = { id: req.body.id, time: new Date().toISOString() };
    ids.push(data);
  }

  res.send(ids.find((id) => id.id === req.body.id).time);
});

router.get("/req4", (req, res) => {
  res.send(users);
});

module.exports = router;
