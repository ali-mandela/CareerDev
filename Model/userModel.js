const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        maz:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:0,
    },
    password:{
        type:String,
        required:true, 
        max:40,
        min:8
    },
    isAvatarImagesSet:{
        type:Boolean,
        default:false,

    },
    avatarImage:{
        type:String,
        default:"",
    },
});

module.exports = mongoose.model("Users",userSchema);
