const mysql = require('mysql');
const conexion =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud_nodejs_db'
});

conexion.connect((error)=>{
    if(error){
        console.error('el error de conexión es', +error);
        return
    }else{
        console.error('conexión exitosa');
    }
});
module.exports=conexion;