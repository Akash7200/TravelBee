import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewRoom = () => {
  const [info, setInfo] = useState({});
  const [hotelId, sethotelId] = useState(undefined);


  const {data, loading, error} = useFetch("/hotels")
  console.log(data) 


  const handleChange= (e) =>{
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value}))
  }

  const handleClick= async (e) =>{
    e.preventDefault()
    try{
      const newRoom = {
        ...info, hotelId
      }
      await axios.post(`localhost:8000/api/rooms/65b9e5ceae49d9d727f5fa7f`, newRoom)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new room</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form>
              
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.type} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <div className="formInput">
                  <label>Choose a hotel</label>
                  <select id="hotelId" onChange={e => sethotelId(e.target.value)}>
                     {loading ? "loading..." : data && data.map(hotel => (
                      <option key = {hotel._id} value={hotel._id}>{hotel.name}</option>
                      ))}
                  </select>

                </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
