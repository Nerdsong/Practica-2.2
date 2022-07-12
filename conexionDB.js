const mysql= require("mysql");
require("dotenv").config();

//se prepara la conexión con la DB 
const conexionDB= mysql.createConnection({
    hots: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB
});

conexionDB.connect(function(error){
    if (error){
        throw error; //lanza el error en caso de que algo salga mal
    }
    console.log("conexión completada")
});

conexionDB.query("SELECT * FROM platos", function(error, registros){
    if(error){
        throw error;
    }
    console.log("mostrando registros en la tabla: \n", registros);
})

conexionDB.end(function(error){
    if (error){
        return console.log("error: "+ error.message)
    }
    console.log("conexion fue cerrada");
});
