import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    hotelId: {
        type: String,
        required: true
    },
    hotelName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cost: {
        type: [String],
    },
    cost: {
        type: Number,
        required: true
    },
    checkIn: {
        type: String,
        required: true
    },
    checkOut: {
        type: String,
        required: true
    },
    rooms: {
        type: [String]
    },
})

export default mongoose.model('Order', orderSchema);
