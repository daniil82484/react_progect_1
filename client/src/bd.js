
const mysql = require('mysql');

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bd_project"
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
function list() {
    const query = `SELECT * FROM users`;
    conn.query(query, (err, result) => {
        console.log(err);
        console.log(result);
    });
}
export default list;

