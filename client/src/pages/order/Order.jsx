// Order.jsx
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./order.css";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";

const Order = () => {
    const [userData, setUserData] = useState(null);
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [hotelId, setHotelId] = useState();
    const [roomId, setRoomId] = useState();
    const location = useLocation();
    //const { data, loading, error } = useFetch(`http://localhost:8000/api/hotels/find/${hotelId}`)
    //const { data2 } = useFetch(`http://localhost:8000/api/hotels/room/${roomId}`)
    const { data: hotelData, loading: hotelLoading, error: hotelError } = useFetch(`http://localhost:8000/api/hotels/find/${hotelId}`);
    const { data: roomData, loading: roomLoading, error: roomError } = useFetch(`http://localhost:8000/api/hotels/room/${roomId}`);

    const { user } = useContext(AuthContext);
    

    useEffect(() => {
        if (location.state) {
            const { userData, hotelData, hotelId, roomId } = location.state;
            setUserData(userData);
            setSelectedRooms(roomId || []); // Ensure selectedRooms is initialized as an array
            setHotelId(hotelId);
            setRoomId(roomId);
        }
    }, [location.state]);

    const handleConfirmation = () => {
        // Implement your confirmation logic here
    };

    return (
        <div className="order">
            <div className="order-container">
                <h1>Booking Details</h1>
                <div className="user-details">
                    <h2>User Details:</h2>
                    <p>Name: {user && user.username}</p>
                    <p>Email: {user && user.email}</p>
                </div>
                <div className="hotel-details">
                    <h2>Hotel Details:</h2>
                    <p>Hotel Name: {hotelData.name}</p>
                    <p>Location: {hotelData.city} , {hotelData.address} </p>
                    <p>{hotelData.distance}m from center </p>
                </div>
                <div className="selected-rooms">
                    <h2>Selected Rooms:</h2>
                    {roomId && roomId.length > 0 ? (
                        roomId.map((id, index) => (
                            <p key={index}>Room ID: {roomData.roomNumber}</p>
                        ))
                    ) : (
                        <p>No rooms selected</p>
                    )}
                </div>
                <button className="confirm-button" onClick={handleConfirmation}>Confirm Reservation</button>
            </div>
        </div>
    );
};

export default Order;
