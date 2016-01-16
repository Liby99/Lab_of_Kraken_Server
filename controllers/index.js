'use strict';

module.exports = function (router) {
    
    //Default page request
    router.get('/', function (req, res) {
        
        res.redirect("/public/index.html");
        
    });
    
    //AJAX get request
    router.get('/handler/*', function (req, res) {
        
        console.log("I'm here!");
        
        var pt = require("path");
        var url = require("url");
        var basename = pt.basename(url.parse(req.url).pathname);
        var handler = require("../handler/" + basename);
        handler(req, res);
        
    });
    
    //AJAX post request
    router.post('/handler/*', function (req, res) {
        console.log("Get a Post request!!");
        
        var pt = require("path");
        var url = require("url");
        var basename = pt.basename(url.parse(req.url).pathname);
        var handler = require("../handler/" + basename);
        handler(req, res);
    });

};
