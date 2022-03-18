const productSchema = new Schema({
    id : {type: number},
    title : {type: String, default: 'Sin nombre asignado'},
    description : {type: String, default: 'Sin descripcion asignada'},
    img : {type: String, default:'Sin imagen asignada'},
    price : {type: Number, default: 0},
    stock : {type: Number, default: 0},
    timeStamp : {type: Number, default: new Date()}
})

module.exports = model('Product',productSchema);