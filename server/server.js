const express = require('express')
const app = express()

const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bd_project"
});


const query = `SELECT * FROM users`;
conn.query(query, (err, result) => {
    //console.log(result);

app.get("/api", (req, res) => {
    res.json({"users": result})
})
});
app.listen(5000, () => {console.log("Server 5000")})