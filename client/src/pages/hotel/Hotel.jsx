import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useState } from "react"


const Hotel = () => {

  const [slideNumber,setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/233360771.jpg?k=68ee29e21af278f3e1ff71f6ce2f1fb107d10b4c9b598a7a2cb1dd60c1b7da45&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/233361825.jpg?k=788097b638bcbd5addb780e870796bbff6c52edd199cf7f91dd90ef1e935d36b&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/233362421.jpg?k=33c36d1b96e129f5bcce1778998610fe5715d43c3f67df80847c5bb3844992ac&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/233360967.jpg?k=a7291b3836fe2c8d82b5b2ec3032e1af84079da6741a96bc004adda6eacf1705&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/233361477.jpg?k=cd09b55a41e4925dd65ebfafb09fd8ba22ec13b720456cee288129716aed6090&o=&hp=1"
    },

    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/233361928.jpg?k=ec7a2ef80dbcc5588edc3e63bda09295b7e78ee82062101a401c86cb87ed7a4b&o=&hp=1"
    },
  ];


  const handleOpen = (i) =>{
    setSlideNumber(i);
    setOpen(true);
  }


  const handleMove = (direction) =>{
    let newSlideNumber;
    if(direction==="l")
    {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }
    else
    {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  }


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("l")}/>

        </div>}

        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Hotel Alif Avenidas</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>32 North Park, New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $120 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">

            {photos.map((photo,i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>

            ))}

          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of New York</h1>
              <p className="hotelDesc">
              Hotel Alif Avenidas is a 4-star hotel, conveniently located less than 1.2 mi from New York International Airport. At just 328 feet from Campo Grande Metro Station, the hotel has a 24-hour fitness center, 12 conference rooms and high-speed WiFi access throughout.  A shuttle is available from the hotel to the Airport pending on availability.
              </p>

            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of New York, this property has an excellent location score of 9.8!
              </span>
              <h2>
                <b>$985</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>

            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel
