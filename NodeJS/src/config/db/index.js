const mongoose = require('mongoose');

async function connect(){

    try{
        await mongoose.connect('mongodb+srv://khang2038:01658205896@cluster0.izayhyb.mongodb.net/BWD1',{
                useNewUrlParser:true,
                useUnifiedTopology:true
        });
        console.log('Connected');
    }catch(error){
        console.log('fail');
    }

}

module.exports={connect}