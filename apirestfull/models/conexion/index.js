const mysql=require('mysql');
const conexion=mysql.createConnection({
    host:'localhost',
    user:'xxharutoxx',
    password:'dell190',
    database:'articulosdb'
})

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion exitosa');
    }
})
module.exports=conexion;