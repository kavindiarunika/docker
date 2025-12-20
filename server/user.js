import mongoose from "mongoose";

const userSchema =new mongoose .Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
createAt :{
    type:Date,
    default:Date.now
}
    
})
module.exports =mongoose.model('User',userSchema);