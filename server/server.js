const express = require('express')
const app = express()

const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bd_project"
});


let query = "SELECT * FROM users";
conn.query(query, (err, result) => {
    app.get("/api", (req, res) => {
        res.json({"users": result})
    })
});


let query2 = "SELECT * FROM accounts";
conn.query(query2, (err, result) => {
    app.get("/api/accounts", (req, res) => {
        res.json({"accounts": result})
    })
});




app.listen(5000, () => {console.log("Server 5000")})


//function tb_query(tb_name) {
//    const query = "SELECT * FROM " + tb_name;
//    conn.query(query, (err, result) => {
//        //console.log(result);
//        app.get("/api", (req, res) => {
//
//            res.json({"tb_query": result})
//        })
//    });
//}