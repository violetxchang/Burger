//set up mysql connection
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "violetchang",
        password: "Ax34wo79!",
        database: "burgers_db"
    });
}

//Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//export connection for our ORM to use
module.exports = connection;