import Hotels from "../model/Hotel.js";

let SaveHotels = async(req,res)=>{
    let result = await Hotels.create(req.body)
    res.send({success:true ,result})
}
let GetAllHotels=async(req,res)=>{
    let result = await Hotels.find()
    res.send({success:true,result})
}
let GetAllHotelsById = async(req,res)=>{
    let id = req.params.id;
    let result =await Hotels.find({_id :id})
    res.send({success:true,result : result[0]})
}
let UpdateHotels = async(req,res)=>{
    let id = req.params.id;
    let result = await Hotels.updateMany({_id : id},req.body)
    res.send({success:true,result})
}
let DeletHotels =async(req,res)=>{
    let id = req.params.id;
    let result = await Hotels.deleteMany({_id :id })
    res.send({success:true,result})
}



export {SaveHotels,GetAllHotels,GetAllHotelsById,UpdateHotels,DeletHotels}
