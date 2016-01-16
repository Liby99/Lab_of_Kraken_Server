'use strict';

module.exports = function (router) {

    router.get('/', function (req, res) {
        
        res.redirect("/public/index.html");
        
    });
    
    router.get('/handler/', function (req, res) {
        
        var pt = require("path");
        var url = require("url");
        var basename = pt.basename(url.parse(request.url).pathname);
        var handler = require("/handler/" + basename);
        handler.process(req, res);
        
    });

};
