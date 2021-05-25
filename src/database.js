const e = require("express");
const mysql = require("mysql");
const { database } = require("./keys"); // importar solo el objeto database
const {promisify} = require('util')//convertir callback a promesas

const pool = mysql.createPool(database); //createConnection utilizando hilos

pool.getConnection((err, connection)=>{
    if(err){
        if(err.code === "PROTOCOL_CONNECTION_LOST"){
            console.log("DATABASE CONNECTION WAS CLOSED");
        }

        if(err.code === "ER_CON_COUNT_ERROR"){
            console.log("DATABASE HAS NOT MANY CONNECTIONS");
        }

        if (err.code === "ENCONNREFUSED"){
            console.log("DATABASE CONNECTION WAS REFUSED");
        }

        if(connection) connection.release();
        console.log("DB is conected");
        return;

    
    }
}); 

pool.query  = promisify(pool.query); //permite llamarlo con promesas

module.exports = pool;