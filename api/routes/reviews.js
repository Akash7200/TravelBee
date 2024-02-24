import express from "express"
import Review from "../models/Review.js";
import { createReview, deleteReview, deleteReviewByHotelId, deleteReviewByUserId, getAllReview, getReviewByHotel, getReviewByUser } from "../controllers/review.js";

const router = express.Router();

router.post("/", createReview);


router.delete("/:id", deleteReview);

router.delete("/deleteByUserId/:userId", deleteReviewByUserId);

router.delete("/deleteByHotelId/:hotelId", deleteReviewByHotelId);

router.get("/findByHotel/:hotelId", getReviewByHotel);

router.get("/findByUser/:userId", getReviewByUser);

router.get("/", getAllReview)



export default router;