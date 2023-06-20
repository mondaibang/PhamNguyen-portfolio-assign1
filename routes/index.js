/* 
  File: index.js
  Student’s Name: Pham PhucTran Nguyen
  StudentID: 301311763
  Date: Jun 19, 2023
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', name: 'Designer', className: 'designer-color'});
});

router.post('/', function(req, res, next) {
  let userName = req.body.pname;
  
  if(userName) {
    res.render('./index', {title: 'Home', name: userName, className:'user-name-color'});
  } else {
    res.render('./index', {title: 'Home', name: 'Designer', className: 'designer-color'});
  }
})

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About me'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', {title: 'Services'});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', {title: 'Projects'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'contact'});
});

router.post('/contact', function(req, res, next) {
  let userName = req.body.pname;
  
  if(userName) {
    res.render('./index', {title: 'Home', name: userName, className: 'user-name-color'});
  } else {
    res.render('./index', {title: 'Home', name: 'Designer', className: 'designer-color'});
  }
})

module.exports = router;
