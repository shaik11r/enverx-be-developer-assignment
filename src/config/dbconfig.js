const mongoose=require('mongoose');

const connect=()=>{
    console.log('mongoose connecting');
    return mongoose.connect('mongodb://localhost:27017/blogs');
}
module.exports={connect}