//Conexion al server de express
const express = require ('express');
import morgan from 'morgan';
import prodsRouter from './routers/producto.routes';
import cartRouter from './routers/carrito.routes';


const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/productos', prodsRouter)
app.use('/api/carrito', cartRouter)

app.use(morgan('dev'))


const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
