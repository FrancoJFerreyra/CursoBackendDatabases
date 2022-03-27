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
  addProd = async (id, data) =>{
    const cart = await this.model.findById({ _id: id });
    console.log(cart.products);
    const addProduct = cart.products.push(data);
    try{
      addProduct.save()
      console.log('Producto agregado');
    }
    catch (err){
      console.log(err);
    }
  }
}

export default DBContainer;