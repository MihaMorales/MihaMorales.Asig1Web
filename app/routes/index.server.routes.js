/*File name: index.server.router.js
Student Name: Miha Morales
Student ID: 301297007
Date: 4/10/2023*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
res.render('about', { title: 'About' });
});
router.get('/projects', function(req, res, next) {
res.render('projects', { title: 'Projects' });
});
router.get('/contact', function(req, res, next) {
res.render('contact', { title: 'Contact' });
});
router.get('/services', function(req, res, next) {
res.render('services', { title: 'Services' });
});

module.exports = router;
