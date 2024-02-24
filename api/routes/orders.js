import express from "express"
import Review from "../models/Review.js";
import { createOrder, deleteOrder, getHotelOrder, getOrder, getOrders, getUserOrder } from "../controllers/order.js";

const router = express.Router();

//create
router.post("/", createOrder);


//delete
router.delete("/:id", deleteOrder);

//get
router.get("/find/:id", getOrder);

//getall
router.get("/", getOrders);

router.get("/:hotelId", getHotelOrder);
router.get("/:userId", getUserOrder);

export default router;