require("dotenv").config();
import express from "express";
const {Router} = express;
const product = process.env.DB === "mongo" ? require('../daos/carrito/carritoMongo') :
require('../daos/productos/productoArchivo');

const cartRouter = new Router;

cartRouter.post('/', (req,res)=>{
    res.send(product.save(req.body))
})
cartRouter.delete('/:id', (req,res)=>{
    res.send(product.delete(req.params.id))
})
cartRouter.get('/:id/productos', (req,res)=>{
    res.send(product.getOne(req.params.id))
})
cartRouter.post('/:id/productos', (req,res)=>{
    res.send(product.addProd(req.params.id, req.body))
})
cartRouter.delete('/:id/productos/:id_prod', (req,res)=>{
    
})

export default cartRouter;