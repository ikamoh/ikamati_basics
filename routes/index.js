var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cmd', { title: 'Express' });
});

router.get('/git1', function(req, res, next) {
  res.render('git-basics', { title: 'git' });
});

router.get('/git2', function(req, res, next) {
  res.render('git-basics-2', { title: 'git 2' });
});



module.exports = router;
