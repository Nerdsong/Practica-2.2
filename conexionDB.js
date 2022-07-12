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

/*obtener información de los registros de la tabla */
conexionDB.query("SELECT * FROM platos", function(error, registros){
    if(error){
        throw error;
    }
    console.log("mostrando registros en la tabla: \n", registros);
})
/*insertar un nuevo "plato" registro a la tabla
conexionDB.query("INSERT INTO platos (nombre, precio, con_oferta) VALUES ('Ensalada Cesar', 800, FALSE)", function(error, resultado){
    if(error){
        throw error;
    }
    console.log("mostrando registros en la tabla: \n", resultado);
}) */

/*Actualiza un nuevo registro de la tabla

conexionDB.query("UPDATE platos SET con_oferta = FALSE WHERE con_oferta = TRUE", function(error, resultado){
    if(error){
        throw error;
    }
    console.log("Actualizamos la tabla: \n", resultado);
}) */


/*Elimina un registro de la tabla*/

    conexionDB.query("DELETE FROM platos WHERE id_plato= 2", function(error, resultado){
        if(error){
            throw error;
        }
        console.log("Se eliminó un registro \n", resultado)});
    
    conexionDB.query("DELETE FROM platos WHERE id_plato= 1", function(error, resultado){
        if(error){
            throw error;
        }
        console.log("Se eliminó un registro \n", resultado)});


conexionDB.end(function(error){
    if (error){
        return console.log("error: "+ error.message)
    }
    console.log("conexion fue cerrada");
});
