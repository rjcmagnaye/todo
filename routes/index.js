var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const items = [
    {id:1 , description: 'Go To Store'},
    {id:2 , description: 'Go To School'},
    {id:3 , description: 'Wash hair'},
    {id:4 , description: 'Brush Teeth'},
    {id:5 , description: 'Finish Project'},
    {id:6, description: 'Start Project'}
  ];
  res.render('index', { title: 'Todo', items: items });
});

router.post('/', function(req, res, next) {
  console.log(req);
  res.redirect('/');
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Build Guide' });
});

module.exports = router;
