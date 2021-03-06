import mongoose from "mongoose";
import config from "../config";
(async () => {
  try {
    const db = await mongoose.connect(config.mongoRemote.cnxStr);
    await console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
})();

class DBContainer {
  constructor(modelSchema) {
    this.model = modelSchema;
  }

  listarAll = async () => {
    const products = await this.model.find();
    console.log(products);
  };

  getOne = async (id) => {
    const product = await this.model.findById({ _id: id });
    console.log(product);
  };

  update = async (id, newData) => {
    console.log(newData);
    const updateProd = await this.model.replaceOne(
      { _id: id },
      {
        title: newData.title,
        description: newData.description,
        img: newData.img,
        price: newData.price,
        stock: newData.stock,
      }
    );
    console.log(updateProd);
  };

  save = async (data) => {
      console.log("data recibied", data);
      const product = new this.model(data);
      try {
        await product.save();
        console.log("data saved", product);
      } catch (err) {
        console.log(err);
      }
  };
  delete = async (id) => {
    console.log(id);
    try {
      const deleted = await this.model.deleteOne({_id : id});
      const countDocs = await this.model.countDocuments({_id : id});
      console.log( `El producto con id : ${id}, encontrados = ${countDocs}`);
    } catch (err) {
      console.log(err);
    }
    
  };

  //Cart
  createCart = async (data) => {
    console.log("data recibied", data);
    const product = new this.model(data);
    try {
      await product.save();
      console.log("data saved", product);
    } catch (err) {
      console.log(err);
    }
};
  addProd = async (id, data) =>{
    const cart = await this.model.findById({_id : id});
    cart.products.push(data);
    try{
      cart.save()
      console.log(`Producto agregado: ${data.title}`);
    }
    catch (err){
      console.log(err);
    }
  }
  deleteProd = async (idCart, idProd)=>{
    const cart = await this.model.findById({ _id: idCart });
    console.log(`Cart : ${idCart}, product : ${idProd}, ${cart}`);
    const products = cart.products;
    console.log(products[0]._id);
    const find = products.findIndex(e => e._id === idProd)
    console.log(find);
    products.splice(find, 1)
    try {
      await this.model.updateOne({_id : idCart}, {$set:{products:products}}) 
      console.log(`Producto con id: ${idProd} fue eliminado`);
    } catch (err) {
      console.log(err);
    }

  }
}

export default DBContainer;