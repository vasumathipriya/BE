const user = require("../model/user");
const User=require("../model/user")

const getAllUsers=async(req,res)=>{
    let users;
    try{
        users=await User.find();
    }catch(err){
        console.log(err);
    }

    if(!users){
        return res.status(404).json({message:"no user found"});

    }
    return res.status(200).json({users});
};
const getById=async(req,res)=>{
    const id=req.params.id;
    let use;
    try{
        use=await User.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!use){
        return res.status(404).json({message:"no userid found"});

    }
    return res.status(200).json({use});
};
const adduser=async(req,res)=>{
    const { firstname,lastname,password,confirmpassword}=req.body;
    let use;
    try{
       use=new user({
        firstname,lastname,password,confirmpassword 
       });await use.save();
    }catch(err){
        console.log(err);
    }
    if(!use){
        return res.status(500).json({message:"no user added"});

    }
    return res.status(201).json({use});
};
const updateuser=async(req,res)=>{
    const id=req.params.id;
    const { firstname,lastname,password,confirmpassword}=req.body;
    let use;
    try{
       use=await use.findByIdAndUpdate(id,{
        firstname,lastname,password,confirmpassword 
       });use=await use.save();
    }catch(err){
        console.log(err);
    }
    if(!use){
        return res.status(404).json({message:"no user update"});

    }
    return res.status(201).json({use});
};
const deleteuser=async(req,res)=>{
    const id=req.params.id;
    
    let use;
    try{
       use=await use.findByIdAndRemove(id)
       
    }catch(err){
        console.log(err);
    }
    if(!use){
        return res.status(404).json({message:"no user deleted"});

    }
    return res.status(201).json({message:"user id successfully deleted"});
};

exports.getAllUsers=getAllUsers;
exports.adduser=adduser;
exports.getById=getById;
exports.updateuser=updateuser;
exports.deleteuser=deleteuser;



