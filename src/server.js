//Conexion al server de express
const express = require ('express');
const {Router} = express;
import prodsRouter from './routers/productoRout';
import cartRouter from './routers/carritoRout';

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/productos', prodsRouter)
app.use('/api/carrito', cartRouter)


const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
