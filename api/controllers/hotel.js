import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js"


export const createHotel = async (req, res, next)=>{
    const newHotel = new Hotel(req.body)

    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err);
    }
}

export const updateHotel = async (req, res, next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set : req.body}, {new : true})
        res.status(200).json(updatedHotel)
    }catch(err){
        res.status(500).json(err)
    }
}

export const deleteHotel = async (req, res, next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
}

export const getHotel = async (req, res, next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }catch(err){
        res.status(500).json(err)
    }
}

export const getHotels = async (req, res, next)=>{
    const limit = req.query.limit
    const query = req.query
    delete query.limit
    const {min, max, ...others} = query;
    try{    
        const hotels = await Hotel.find({...others, cheapestPrice:{$gt: min || 1, $lt: max || 1000}}).limit(limit)
        // console.log(query)
        // console.log(hotels)
        res.status(200).json(hotels);
    }catch(err){
        next(err);
    }
}


export const countByCity = async (req, res, next)=>{
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(async (city)=>{
            return Hotel.countDocuments({city : city})
        }))
        res.status(200).json(list)
    }catch(err){
        next(err)
    }
}

export const countByType = async (req, res, next)=>{
    try{
        const hotelCount = await Hotel.countDocuments({type : "hotel"});
        const apartmentCount = await Hotel.countDocuments({type : "apartment"});
        const resortCount = await Hotel.countDocuments({type : "resort"});
        const villaCount = await Hotel.countDocuments({type : "villa"});
        const cabinCount = await Hotel.countDocuments({type : "cabin"});

        res.status(200).json([
            {type : "hotel", count : hotelCount},
            {type : "apartment", count : apartmentCount},
            {type : "resort", count : resortCount},
            {type : "villa", count : villaCount},
            {type : "cabin", count : cabinCount}
        ])
    }catch(err){
        next(err)
    }
}


export const getHotelRooms = async (req, res, next) =>{
    try{

        const hotel = await Hotel.findById(req.params.id)
        const list = await Promise.all(hotel.rooms.map(room=>{
            return Room.findById(room);
        }));
        res.status(200).json(list);
    }catch(err){
        next(err)
    }
}

//get hotel count
export const getHotelCount = async (req, res, next)=>{
    try{
        const hotelCount = await Hotel.countDocuments()
        res.status(200).json(hotelCount)
    }catch(err){
        next(err)
    }
}

//get hotel total revenue
export const getTotalRevenue = async (req, res, next)=>{
    try{
        const hotels = await Hotel.find();
        const totalRevenue = hotels.reduce((prev, curr)=>{
            return prev + curr.cheapestPrice;
        }, 0)
        res.status(200).json(totalRevenue)
    }catch(err){
        next(err)
    }
}