const { promises: fs } = require('fs');
const {  Schema, model } = require('mongoose');
const Product = require ('../../../models/schema');
require ('../../config');

class DBContainer{
    constructor(config){
        this.config = config
    }

    listarAll = async()=>{
        const products = await Product.find();
        console.log(products);
    }

    getProduct = async(id)=>{
        const product = await  Product.find({id : id});
    }
    
    update = async (id, updatedProd)=>{
        const updateProd = await Product.update({id : id}, {title : updatedProd});
        console.log(updateProd);
    }

    save = async (id,title,desc,img,price,stock,timeStamp)=>{
        const product = new Product({
            id: id,
            title: title,
            description: desc,
            img: img,
            price: price,
            stock: stock,
            timeStamp: timeStamp
        })
        const productSaved = await product.save()
        console.log(productSaved);
    }
    delete = async(id)=>{
        const deleted = Product.deleteOne({id: id})
    }
}
module.export = DBContainer
//MONGOOSE
    // async createProduct(id,title,description,img,price,stock){
    //     
    // }