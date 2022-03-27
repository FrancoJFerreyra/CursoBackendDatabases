const productSchema = require('../../../models/schema')
import DBContainer from '../../contenedores/contenedorDB'
const productsApi = new DBContainer(productSchema.model);

module.exports = productsApi;
