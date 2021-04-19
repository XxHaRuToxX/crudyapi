const express=require('express');
const router=express.Router();
const Inicio=require('../../controller/Inicio');
/* const conexion=require('../../models/conexion'); */

/* router.get('/prueba',function(req,res){
    res.send('Hello World');
}) */
/* conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion exitosa');
    }
}) */ 
/* router.get('/articulos',(req,res)=>{
    conexion.query('SELECT * FROM articulos', (error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
}) */
router.get('/prueba',Inicio);


module.exports=router;