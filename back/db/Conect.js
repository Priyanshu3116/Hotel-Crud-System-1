import mongoose from "mongoose";
import { DB_URL } from "../config/config.js";

mongoose
.connect(DB_URL)
.then(()=>{
    console.log("Connected")

})
.catch((err)=>{
    console.log("db is not connected",err)

})

export default mongoose;