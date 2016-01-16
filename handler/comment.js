/**
 * Author: Liby Lee
 * Version: 0.0.3
 * Date: 01/11/2016
 * File: comment.js
 * 
 * Temporary
 */

var url = require("url");
//var req = require("../server/request");
//var res = require("../server/response");
//var mysql = require("../server/mysql");

module.exports = function (req, res) {
    
    console.log("I come in!!!");
    
    var query = url.parse(req.url, true).query;
    var action = query.action;
    
    switch (action) {
        case "load_comments":
            loadComments(res);
            break;
        case "add_comment":
            addComment(req, res);
            break;
        default:
            res.writeHead(400, {'Content-Type': "text/plain"});
            //res.write(res.genData(401, "Command Not Found"));
            res.end();
            break;
    }
}

function loadComments(response) {
    try {
        
        //Generate comments array
        var comments = new Array(10);
        for (var i = 0; i < comments.length; i++) {
            comments[i] = new Object();
            comments[i].UUID = "A9SD" + (i + 5) + "F0BHF" + i;
            comments[i].name = "user" + i;
            comments[i].time = "2015-10-" + (12 + i);
            comments[i].content = "你是不是猪";
        }
        
        //Generate response content
        var content = new Object();
        content.comments = comments;
        
        //Make response
        response.writeHead(200, {'Content-Type': "text/plain"});
        response.write(JSON.stringify(content));
        response.end();
    }
    catch (ex) {
        
        //Make response
        response.writeHead(400, {'Content-Type': "text/plain"});
        response.write("System Error");
        response.end();
    }
}

function addComment(request, response) {
    req.getPostBody(request, function (data) {
        console.log(require("util").inspect(data));
        response.writeHead(200, {'Content-Type': "text/plain"});
        response.end();
    });
}