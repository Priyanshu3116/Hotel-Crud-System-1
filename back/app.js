import express from "express";
import {PORT } from "./config/config.js";
import AllRoutes from "./routes/AllRoutes.js" 
import cors from 'cors'
import path from 'path'
let  app = express();

/* ------------------- For Live Server -------------*/

const root =path.join(path.resolve()+"/dist")
app.use(express.static(root));
/* ------------------- For Live Server -------------*/

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(AllRoutes);
/* ------------------- For Live Server -------------*/

app.get ("/{*splat}",(req,res)=>{
    res.sendFile("index.html",(root));
    // res.send("Hello World")
})

/* ------------------- For Live Server -------------*/



app.listen(PORT,()=>{
    console.log("server is running" ,PORT)
})