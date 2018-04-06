var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'note'
});

connection.connect();

app.get('/', function(rep, resp) {
    connection.query("SELECT * FROM note", function(error, rows, fields) {
        if(!!error) {
            console.log('Error in the query');
        } else {
            console.log('Successful query\n');
            console.log(rows);
        }
    });
});

// app.listen(3001);