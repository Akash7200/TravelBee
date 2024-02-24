import Review from "../models/Review.js"

export const createReview = async (req, res, next)=>{
    const newReview = new Review(req.body)

    try{
        const savedReview = await newReview.save()
        res.status(200).json(savedReview)
    }catch(err){
        next(err);
    }
}


export const deleteReview = async (req, res, next)=>{
    try{
        await Review.findByIdAndDelete(req.params.id)
        res.status(200).json("Review has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
}

export const deleteReviewByUserId = async (req, res, next) => {
    const { userId } = req.params;
  
    try {
      const deleteResult = await Review.deleteMany({ userId });
  
      if (deleteResult.deletedCount === 0) {
        return res.status(404).json({ success: false, message: 'No reviews found for the provided userId.' });
      }
  
      return res.status(200).json({ success: true, message: 'Reviews deleted successfully.' });
    } catch (error) {
      return next(error);
    }
  };
  
  export const deleteReviewByHotelId = async (req, res, next) => {
    const { hotelId } = req.params;
  
    try {
      const deleteResult = await Review.deleteMany({ hotelId });
  
      if (deleteResult.deletedCount === 0) {
        return res.status(404).json({ success: false, message: 'No reviews found for the provided hotelId.' });
      }
  
      return res.status(200).json({ success: true, message: 'Reviews deleted successfully.' });
    } catch (error) {
      return next(error);
    }
  };

export const getReviewByHotel = async (req, res, next)=>{
    try{
        const review = await Review.findById(req.params.id)
        res.status(200).json(review)
    }catch(err){
        res.status(500).json(err)
    }
}

export const getReviewByUser = async (req, res, next)=>{
    try{
        const review = await Review.findById(req.params.id)
        res.status(200).json(review)
    }catch(err){
        res.status(500).json(err)
    }
}

export const getAllReview = async (req, res, next)=>{
    const query = req.query
    try{    
        const reviews = await Review.find(req.query)
        // console.log(query)
        // console.log(hotels)
        res.status(200).json(reviews);
    }catch(err){
        next(err);
    }
}
