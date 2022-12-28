const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const userSchema=new Schema({
     firstname:{
        type:String,
        required:true,
     },
     lastname:{
        type:String,
        required:true,
     },

     password:{
        type:String,
        required:true
     },
     confirmpassword:{
        type:String,
        required:true
     },
});

module.exports=mongoose.model('user',userSchema);