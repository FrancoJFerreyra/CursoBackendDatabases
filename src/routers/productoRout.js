//Configuracion variable de entorno
require('dotenv').config();

//Conexion a mongoose
require('./config');

const {Router} = express;
const product = process.env.DB === "mongo" ? require('../daos/productos/productoMongo') : require('../daos/productos/productoArchivo');
const prodsRouter = new Router;

function idExists(id,returned) {
    if (id) {
        res.send(returned)
    }
    else{
        res.send (`El producto con id: ${id} no existe!`)
    }
}

prodsRouter.get('/', async (req,res)=>{
    res.json(await product.listarAll())
})
prodsRouter.get('/:id', async(req,res)=>{
    const productById = await product.getProduct(req.params.id);
    idExists(productById, productById)
})
prodsRouter.post('/', async(req,res)=>{
    res.json(await product.save(req.body))
})
prodsRouter.put('/:id', async(req,res)=>{
    const idParam = req.params.id;
    const productUpdated = await product.update(req.params.id, req.body)
    idExists(idParam,productUpdated);
})
prodsRouter.delete('/:id', async(req,res)=>{
    res.send(product.delete(req.paramas.id))
})

export default prodsRouter;
