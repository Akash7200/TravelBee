import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";



const Single = () => {



  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/${path}`);

  


  const username = data && data.length > 4 ? data[3].username : '';
  const email = data && data.length > 4 ? data[3].email : '';
  const phone = data && data.length > 4 ? data[3].phone : '';
  const city = data && data.length > 4 ? data[3].city : '';
  const country = data && data.length > 4 ? data[3].country : '';

  console.log(data)



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
              <img
                src="http://res.cloudinary.com/daq9b0bqv/image/upload/v1707768162/upload/lwbwn7rwtpijgff5lcot.png"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {city}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{country}</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
         {/* <div className="bottom">
           <h1 className="title">Last Transactions</h1>
           <List/>
        </div>  */}
      </div>
    </div>
  );
};

export default Single;
