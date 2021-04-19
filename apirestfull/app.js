const express=require('express');
const cors=require('cors');

const prueba=require('./router/prueba');
const articulos=require('./router/obtenerArticulos');
const articulo=require('./router/obtenerArticulo');
const insertarArticulos=require('./router/insertaArticulos');
const editarArticulos=require('./router/editarArticulo');
const eliminarArticulos=require('./router/eliminarArticulos');

/* const mysql=require('mysql'); */
const app=express();
app.use(cors());
/* const conexion=mysql.createConnection({
    host:'localhost',
    user:'xxharutoxx',
    password:'dell190',
    database:'articulosdb'
}) */

//app.get('/',function(req,res){
//    res.send('Ruta de INICIO');
//})
/* conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion exitosa');
    }
}) */
app.use(express.json());
app.use('/',prueba);
app.use('/api',articulos);
app.use('/api',articulo);
app.use('/api',insertarArticulos);
app.use('/api',editarArticulos);
app.use('/api',eliminarArticulos);

const puerto=process.env.PUERTO ||3000;

app.listen(puerto,function(){
    console.log("Servidor OK corre en el puerto: " + puerto);
})