import React, { useEffect } from 'react';
import "./singleHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";

const SingleHotel = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/${path}`);


  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const selectedData = data.find(item => item._id === id.toString());
  

  const name = selectedData?.name || '';
  const type = selectedData?.type || '';
  const address = selectedData?.address || '';
  const city = selectedData?.city || '';
  const distance = selectedData?.distance || '';
  const title = selectedData?.title || '';
  const description = selectedData?.description || '';
  const cheapestPrice = selectedData?.cheapestPrice || '';
  const featured = selectedData?.featured || '';
  const images = selectedData?.photos || [];
  const rooms = selectedData?.rooms || [];

  console.log(selectedData);
  console.log(rooms)

  



  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              {images.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Image ${index}`}
                  className="itemImg"
                />
              ))}
              <div className="details">
                <h1 className="itemTitle">{name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{title}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{type}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{city}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{distance}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="roomsList">
          <h2>Suites Available:</h2>
          <ul>
            {rooms.map((room, index) => (
              <li key={index}>
                <p>{room}</p>

                {/* You can render other room details here */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SingleHotel;
