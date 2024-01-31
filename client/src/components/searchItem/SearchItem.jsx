import { useNavigate } from "react-router-dom"
import "./searchItem.css"

const SearchItem = () => {

 const navigate = useNavigate()

  const handleHotel = () =>{
    navigate("/hotels/hotellist");
  }


  return (
    <div className="searchItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/65715679.jpg?k=b2be5174258a30b53449ab3d1003fe78ebb9277695ad75affd106da957a37ce6&o=&hp=1" alt="" className="siImg" />
      <div className="siDesc">
       <h1 className="siTitle">Hotel Alif Avenidas</h1>
       <span className="siDistance">500m from center</span>
       <span className="siTaxiOp">Free airport taxi</span>
       <span className="siSubtitle">Studio apartment with air conditioning</span>
       <span className="siFeatures">Double Bed, City view, Non-Smoking</span>
       <span className="siCancelOp">Free Cancellation</span>
       <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today</span>
      </div>
      <div className="siDetails">
       <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
       </div>
       <div className="siDetailTexts">
        <span className="siPrice">120$</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <button className="siCheckButton" onClick={handleHotel}>See availability</button>
       </div>
      </div>
    </div>
  )
}

export default SearchItem
