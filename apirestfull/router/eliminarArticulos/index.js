const express=require('express');
const router=express.Router();
const conexion=require('../../models/conexion');

router.delete('/articulos/:id_articulos',(req,res)=>{
    conexion.query('DELETE FROM articulos WHERE id_articulos = ?',[req.params.id_articulos],(error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    })
})

module.exports=router;