import cartSchema from '../../../models/cartSchema'
import DBContainer from '../../contenedores/contenedorDB'
const cartApi = new DBContainer(cartSchema);

module.exports = cartApi;