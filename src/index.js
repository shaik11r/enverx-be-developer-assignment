const express=require('express');
const {connect}=require('./config/dbconfig');
const app=express();
const router=require('./routes/v1/blogRoutes');
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',router);
app.listen(process.env.PORT,async()=>{
    await connect();
    console.log('listening started');
})