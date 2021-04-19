const express=require('express');
const router=express.Router();
const conexion=require('../../models/conexion');

router.put('/articulos/:id_articulos',(req,res)=>{
    const id_articulos=req.params.id_articulos;
    const descripcion=req.body.descripcion;
    const precio=req.body.precio;
    const stock=req.body.stock;
    const sql="UPDATE articulos SET descripcion=?, precio=?, stock=? WHERE id_articulos=?"
    conexion.query(sql,[descripcion,precio,stock,id_articulos],(error,results)=>{
        if(error){
            throw error;
        }else{
            /* res.send(fila); */
            res.send(results);
        }
    })
})

module.exports=router;