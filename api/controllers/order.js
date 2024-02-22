import Hotel from "../models/Hotel.js"
import Order from "../models/Order.js"
import Room from "../models/Room.js"


export const createOrder = async (req, res, next)=>{
    const newOrder = new Order(req.body)

    try{
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    }catch(err){
        next(err);
    }
}


export const deleteOrder = async (req, res, next)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Booking has been cancelled...")
    }catch(err){
        res.status(500).json(err)
    }
}

export const getOrder = async (req, res, next)=>{
    try{
        const order = await Order.findById(req.params.id)
        res.status(200).json(order)
    }catch(err){
        res.status(500).json(err)
    }
}

export const getOrders = async (req, res, next)=>{
    const query = req.query
    try{    
        const orders = await Order.find(req.query)
        // console.log(query)
        // console.log(hotels)
        res.status(200).json(orders);
    }catch(err){
        next(err);
    }
}



export const getHotelOrder = async (req, res, next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        const list = await Promise.all(hotel.orders.map(order=>{
            return Order.findById(order);
        }))
    }
    catch(err){
        next(err)
    }
}

export const getUserOrder = async (req, res, next)=>{
    try{
        const list = await Order.find({userId: req.params.id})
        res.status(200).json(list)
    }catch(err){
        next(err)
    }
}

