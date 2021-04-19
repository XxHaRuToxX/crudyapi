const express=require('express');
const router=express.Router();
const conexion=require('../../models/conexion');

router.get('/articulos',(req,res)=>{
    conexion.query('SELECT * FROM articulos', (error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
})

module.exports=router;