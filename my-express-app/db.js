const mysql = require("mysql")

const connectionPool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'debug_movie'
});
connectionPool.getConnection(function(err){
    if(err) {
        throw err
    }
 });

 module.exports = {
    connectionPool
 }