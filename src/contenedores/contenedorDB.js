import mongoose from 'mongoose';
import config from '../config'

(async ()=>{
    try{
        const db = await mongoose.connect(config.mongoRemote.cnxStr);
        console.log('DB connected');
    }
    catch (err){
        console.log(err);
    }
})()

class DBContainer{
    constructor(collection , productSchema){
        this.col = mongoose.model(collection, productSchema)
    }

    listarAll = async()=>{
        const products = await this.col.find();
        console.log(products);
    }

    getProduct = async(id)=>{
        const product = await  this.col.find({id : id});
    }
    
    update = async (id, updatedProd)=>{
        const updateProd = await this.col.update({id : id}, {title : updatedProd});
        console.log(updateProd);
    }

    save = async (data)=>{
        try{
            console.log('data recibied', data);
            const product = new this.col(data);
            console.log(this.col);
            const productSaved = await product.save()
            console.log('data saved',productSaved);
        }
        catch (err) {
            console.log(err);
        }
        
    }
    delete = async(id)=>{
        const deleted = this.col.deleteOne({_id : id})
        console.log(`El producto ${deleted} fue eiminado.`);
    }
}
export default DBContainer
//MONGOOSE
    // async createProduct(id,title,description,img,price,stock){
    //     
    // }