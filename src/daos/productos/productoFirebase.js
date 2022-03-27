import FBContainer from '../../contenedores/contenedorFirebase';
import { getFirestore, collection } from 'firebase/firestore';
const db = getFirestore()
const productsApi = new FBContainer(db)

module.exports = productsApi;