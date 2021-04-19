const express=require('express');
const router=express.Router();
const conexion=require('../../models/conexion');

router.get('/articulos/:id_articulos',(req,res)=>{
    conexion.query('SELECT * FROM articulos WHERE id_articulos = ?',[req.params.id_articulos],(error,fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila);
     /*        res.send(fila[0].descripcion); */
        }
    })
})

module.exports=router;