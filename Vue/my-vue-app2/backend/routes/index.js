var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET home page. */
router.get("/api", function (req, res, next) {
  const obj = { msg: "Nodejs response" };
  res.json(obj);
});

module.exports = router;
