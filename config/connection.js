var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "trebor",
        database: "b09lr7qjdqxfnu42",
        PORT: 8080
    });
};

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId);

});

module.exports = connection;