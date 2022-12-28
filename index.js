const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors");
const router = require("./router/userrouter");
const app=express();

app.use(express.json());
app.use("/users",router)

mongoose.connect(
    "mongodb+srv://vasumathi:gRnNMfLfPGZOu0K9@cluster0.oepdwev.mongodb.net/?retryWrites=true&w=majority"
) .then(()=>console.log("connected to the database"))
.then(()=>{
    app.listen(5000);
})
