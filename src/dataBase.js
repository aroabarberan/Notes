var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'note'
});

connection.connect(function (err) {
    if (err) console.error('Error:- ' + err.stack);
    connection.query("SELECT * FROM notes", function (err, result) {
        if (err) console.log(err);
        console.log("Data to table note");
        console.log(result);
    });
});
