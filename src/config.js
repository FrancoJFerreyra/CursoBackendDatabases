// const mongoose = require("mongoose");
// const url = 'mongodb://127.0.0.1:27017/clase20'

// mongoose.connect(url);

// mongoose.connection.on('open', ()=>{
//     console.log(`Connected in ${url}`);
// })
// mongoose.connection.on('error', err =>{
//     console.log(err);
// })
export default {
    PORT: process.env.PORT || 8080,
    mongoRemote:{
        client: 'mongodb',
        cnxStr: 'mongodb+srv://FrancoDev:FrancoDev@cluster0.dl6ll.mongodb.net/ProyectoF2?retryWrites=true&w=majority'
    }
}