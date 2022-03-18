const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/clase20'

mongoose.connect(url);

mongoose.connection.on('open', ()=>{
    console.log(`Connected in ${url}`);
})
mongoose.connection.on('error', err =>{
    console.log(err);
})