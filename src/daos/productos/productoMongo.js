import config from '../../config';
import {model} from 'mongoose'
//Obtiene el contenedor con las funciones
const productSchema = require('../../../models/schema')
import DBContainer from '../../contenedores/contenedorDB'
const productsApi = new DBContainer('Product', productSchema);

module.exports = productsApi;
