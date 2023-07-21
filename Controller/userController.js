const User = require('../Model/userModel')
const bcrypt = require('bcrypt');

const Register=async( req, res, next)=>{

    try{
        
    const {username, password, email} = req.body;
    const usernameCheck = await User.findOne({username});
    if(usernameCheck){
        console.log(res.json({msg:"username already present"}));
        // return res.json({msg:"Username already present", status:false});
    }
    
    const emailCheck = await User.findOne({email});
     if(emailCheck){
        console.log("UEmail already present");
        return res.json({msg:"UEmail already present", status:false});
     }
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        username,email,password:hashedPassword
    })
    console.log("Success");
    return res.json({status:true,user });

    }catch(er){
            next(er);
    }
}

const Login=async( req, res, next)=>{

    try{
        
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if(!user){
        console.log("Incorrect Credentials");
        return res.json({msg:"Username already present", status:false});
    }
    const passwordValid = await bcrypt.compare(password,user.password);
    if(passwordValid){
        
    console.log("Incorrect Credentials password");
    return res.json({msg:"Inncorrect password", status:false})
    }
    delete user.password;
    // user.save();
    // if(user)
    // user.save();
    console.log("Success");
    return res.json({status:true,user });

    }catch(er){
        console.log("Error in login backend handling");
        next(er);
    }


        




}


//  module.exports= Login;
module.exports = Register,Login ;