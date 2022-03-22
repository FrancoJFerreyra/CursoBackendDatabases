import {Schema,model} from 'mongoose'

const productSchema = new Schema({
    id : {type: Number},
    title : {type: String, default: 'Sin nombre asignado'},
    description : {type: String, default: 'Sin descripcion asignada'},
    img : {type: String, default:'Sin imagen asignada'},
    price : {type: Number, default: 0},
    stock : {type: Number, default: 0}
},{
    timestamps : true,
    versionKey : false,
    _id : false,
})

export default productSchema;