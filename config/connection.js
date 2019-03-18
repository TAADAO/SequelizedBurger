var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "zb06p5ig68yun0rp",
        password: "dfw24h8xvuhv5qb0",
        database: "b09lr7qjdqxfnu42",
        PORT: 8080
    });
};

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId);

});

module.exports = connection;