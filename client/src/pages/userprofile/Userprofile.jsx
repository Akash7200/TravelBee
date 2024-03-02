import React, { useContext, useEffect, useState } from 'react';
import "./userprofile.css";
import { AuthContext } from '../../context/AuthContext';
import useFetch from '../../hooks/useFetch';

const Userprofile = () => {
    const { user } = useContext(AuthContext);
    const [userOrders, setUserOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserOrders = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/api/orders/getUserOrder/${user._id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user orders');
                }
                const data = await response.json();
                setUserOrders(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (user && user._id) {
            fetchUserOrders();
        }
    }, [user]);

    return (
        <div className="profile">
            <h2>User Profile</h2>
            <div className="profileDetails">
                <div className="profileItem">
                    <img
                        src={user.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                        alt="User Avatar"
                        className="profileImage"
                    />
                </div>
                <p><b>Name:</b> {user.username}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Phone:</b> {user.phone}</p>
                <p><b>City:</b> {user.city}</p>
                <p><b>Country:</b> {user.country}</p>
                {/* Display user orders */}
                <h3>User Bookings:</h3>
                
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <ul>
                        {userOrders.map(order => (
                            <li key={order.id}> Name: {order.hotelName}, Address: {order.address}, City: {order.city} Cost: {order.cost}, Check-in: {order.checkIn}, Check-out: {order.checkOut} </li>
                            
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Userprofile;
