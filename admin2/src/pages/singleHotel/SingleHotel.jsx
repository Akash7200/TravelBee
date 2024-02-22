import "./singleHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";

const SingleHotel = () => {

  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/${path}`);
  console.log(path, id, data);

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const {user} = useContext(AuthContext)
  const navigate = useNavigate()



  const selectedData = data.find(item => item._id === id.toString()); // Assuming 'id' is of the same type as 'item.id'
  console.log(selectedData);


  
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const handleClick =() =>{
    if(user){
      setOpenModal(true);

    }else{
      navigate("/login")

    }

  }



  const name = data && data.length > 4 ? selectedData.name : '';
  const type = data && data.length > 4 ? selectedData.type : '';
  const address = data && data.length > 4 ? selectedData.address : '';
  const city = data && data.length > 4 ? selectedData.city : '';
  const distance = data && data.length > 4 ? selectedData.distance : '';
  const title = data && data.length > 4 ? selectedData.title : '';
  const description = data && data.length > 4 ? selectedData.description : '';
  const cheapestPrice = data && data.length > 4 ? selectedData.cheapestPrice : '';
  const featured = data && data.length > 4 ? selectedData.featured : '';
  const image = data && data.length > 4 ? selectedData.photos : '';

  console.log(image)
  console.log(name)

  // useEffect(() => {
  //   setList(data);
  // }, [data]);
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
              {image && image.length > 0 && image.map((imageUrl, index) => (
                <img
                  key={index} // Use index as the key
                  src={imageUrl} // Use imageUrl from the map function
                  alt={`Image ${index}`}
                  className= "itemImg"
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
      </div>
    </div>
  );
}

export default SingleHotel;
