import mongoose from '../db/Conect.js'
const HotelSchema = mongoose.Schema({
    title : String,
    price :Number,
    city : String
})

const Hotels = mongoose.model("hotel",HotelSchema)

export default Hotels;
