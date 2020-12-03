var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Build Guide' });
});

module.exports = router;
