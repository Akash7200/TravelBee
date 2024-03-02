import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './dashboard.scss'; // Import the CSS file for styling

const Dashboard = () => {
    const user = useContext(AuthContext);

    return (
        <div className="dashboard-container">
            <h1>Admin Dashboard</h1>
            <div className="user-info">
                <img src={user.user.img} alt="Admin" className="admin-image" />
                <p><strong>Admin Name:</strong> {user.user.username}</p>
                <p><strong>Phone:</strong> {user.user.phone}</p>
                <p><strong>Email:</strong> {user.user.email}</p>
                <p><strong>City:</strong> {user.user.city}</p>
                <p><strong>Country:</strong> {user.user.country}</p>
                <p><strong>Created At:</strong> {new Date(user.user.createdAt).toLocaleString()}</p>
            </div>
            {/* Add your dashboard content here */}
        </div>
    );
};

export default Dashboard;
