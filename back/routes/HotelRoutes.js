import express from 'express';
import { DeletHotels, GetAllHotels, GetAllHotelsById, SaveHotels, UpdateHotels } from '../controllers/HotelController.js';


const routes = express.Router();

routes.get("/",GetAllHotels)
routes.post("/",SaveHotels)
routes.get("/:id",GetAllHotelsById)
routes.put("/:id",UpdateHotels)
routes.delete("/:id",DeletHotels)


export default routes;
