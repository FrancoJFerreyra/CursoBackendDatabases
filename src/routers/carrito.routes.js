require("dotenv").config();
import express from "express";
const {Router} = express;
const cart = process.env.DB === "mongo" ? require('../daos/carrito/carritoMongo') :
require('../daos/productos/productoArchivo');

const cartRouter = new Router;

cartRouter.post('/', (req,res)=>{
    res.send(cart.createCart(req.body))
})
cartRouter.delete('/:id', (req,res)=>{
    res.send(cart.delete(req.params.id))
})
cartRouter.get('/:id/productos', (req,res)=>{
    res.send(cart.getOne(req.params.id))
})
cartRouter.post('/:id/productos', (req,res)=>{
    res.send(cart.addProd(req.params.id, req.body))
})
cartRouter.delete('/:id/productos/:id_prod', (req,res)=>{
    res.send(cart.deleteProd(req.params.id, req.params.id_prod))
})

export default cartRouter;