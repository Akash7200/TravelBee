import express from "express"
import Review from "../models/Review.js";
import { createReview, deleteReview, getAllReview, getReviewByHotel, getReviewByUser } from "../controllers/review.js";

const router = express.Router();

router.post("/", createReview);


router.delete("/:id", deleteReview);

router.get("/find/:id", getReviewByHotel);

router.get("/find/:id", getReviewByUser);

router.get("/", getAllReview)



export default router;