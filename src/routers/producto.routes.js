//Configuracion variable de entorno
require("dotenv").config();
import express from "express";
const {Router} = express;
const product = process.env.DB === "mongo" ? require('../daos/productos/productoMongo') :
require('../daos/productos/productoArchivo');
  
  
const prodsRouter = Router();

function idExists(id, returned) {
  if (id) {
    res.send(returned);
  } else {
    res.send(`El producto con id: ${id} no existe!`);
  }
}

prodsRouter.get("/", async (req, res) => {
  res.send(await product.listarAll());
});
prodsRouter.get("/:id", async (req, res) => {
  const productById = await product.getProduct(req.params.id);
  res.send(idExists(productById, productById));
});
prodsRouter.post("/", async (req, res) => {
  console.log('obj recibido',req.body);
  res.send(await product.save(req.body));
});
prodsRouter.put("/:id", async (req, res) => {
  const idParam = req.params.id;
  const productUpdated = await product.update(req.params.id, req.body);
  res.send(idExists(idParam, productUpdated));
});
prodsRouter.delete("/:id", async (req, res) => {
  res.send(product.delete(req.params.id));
});

export default prodsRouter;
