var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node test with Express' , body:'Hello Node!!!', message:'Fall in Love with Javascript'});
});

module.exports = router;
