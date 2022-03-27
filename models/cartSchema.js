import {Schema,model} from 'mongoose'
const product = require('./schema')

const cartSchema = new Schema({
    products : [product.schema]
},{
    timestamps : true,
    versionKey : false
})

export default model('Cart', cartSchema);