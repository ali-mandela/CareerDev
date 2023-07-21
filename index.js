const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
//
const userRoutes = require('./Routes/userRoutes')

const app= express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use('/api/auth/',userRoutes);



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("connected Database Succesfully");
}).catch((e)=>{
    console.log(` Error Mandela Ali :::: ${e.message}` );
})

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
})

