var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let keys = [];
  for (let index in req) {
    keys.push(req[index]);
  }
  res.send(keys);
  // res.render('index', { title: 'Express' });
});

module.exports = router;
