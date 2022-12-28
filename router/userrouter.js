const express=require("express");
const router=express.Router();
const user=require("../model/user");
const usercontroller=require("../controller/usercontroller");


router.get("/",usercontroller.getAllUsers);
router.post("/",usercontroller.adduser);
router.get("/:id",usercontroller.getById);
router.patch("/:id",usercontroller.updateuser);
router.delete("/:id",usercontroller.deleteuser);


module.exports=router;