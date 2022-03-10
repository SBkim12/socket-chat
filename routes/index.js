var express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Chat" });
});

router.get("/chatroom", (req, res, next) => {
  res.render("chatroom", { id: req.query.name, room: req.query.room });
});

module.exports = router;
