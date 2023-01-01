const express = require('express')
const app = express()

const mysql = require('mysql');

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bd_project"
});

function list() {
    const query = `SELECT * FROM users`;
    conn.query(query, (err, result) => {
        console.log(result);
    });
}
list();







app.get("/api", (req, res) => {
    res.json({"users": ["1", "2", "3"]})
})

app.listen(5000, () => {console.log("Server 5000")})