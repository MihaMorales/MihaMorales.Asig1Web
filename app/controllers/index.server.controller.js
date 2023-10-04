/*File name: index.server.controller.js
Student Name: Miha Morales
Student ID: 301297007
Date: 4/10/2023*/
exports.render = function(req, res) { 
    if (req.session.lastVisit) { 
          console.log(req.session.lastVisit); 
       }
    req.session.lastVisit = new Date();
     
    res.render('index', { 
       title: 'Hello World' 
    }); 
    }; 
    