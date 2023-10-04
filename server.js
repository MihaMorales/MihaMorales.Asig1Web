/*File name: server.js
Student Name: Miha Morales
Student ID: 301297007
Date: 4/10/2023*/
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');
