const express=require('express');
const router=express.Router();
const conexion=require('../../models/conexion');

router.post('/articulos',(req,res)=>{
    const data={descripcion:req.body.descripcion,precio:req.body.precio,stock:req.body.stock};
    const sql="INSERT INTO articulos SET ?"
    conexion.query(sql,data,(error,results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

module.exports=router;