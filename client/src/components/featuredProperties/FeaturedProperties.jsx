import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
     <div className="fpItem">
      <img width="200px" height="150px" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1" alt="" className="fpImg" />
      <span className="fpName">Hotel Sea Cox</span>
      <span className="fpCity">Cox's Bazar</span>
      <span className="fpPrice">starting from 175$</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>

    </div>

    <div className="fpItem">
      <img width="200px" height="150px" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/77446705.jpg?k=b4137b295019af2a0db1af044c725449adda502a6921fbb2b8931016a8a0a713&o=&hp=1" alt="" className="fpImg" />
      <span className="fpName">Leman Locke</span>
      <span className="fpCity">Madrid</span>
      <span className="fpPrice">starting from 120$</span>
      <div className="fpRating">
        <button>8.5</button>
        <span>Fascinating</span>
      </div>

    </div>

    <div className="fpItem">
      <img width="200px" height="150px" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/87375160.jpg?k=8f634517a4bc92439594d070d1a5578cec595a9205a50a714916ad9756307280&o=&hp=1" alt="" className="fpImg" />
      <span className="fpName">Stare Miasto</span>
      <span className="fpCity">London</span>
      <span className="fpPrice">starting from 150$</span>
      <div className="fpRating">
        <button>9.1</button>
        <span>Excellent</span>
      </div>

    </div>

    <div className="fpItem">
      <img width="200px" height="150px" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/420376650.jpg?k=2592942940b96e30b32f87c5e1b0dac4c9986a6054b5073d4277b9352001b5a6&o=&hp=1" alt="" className="fpImg" />
      <span className="fpName">Flora Chiado</span>
      <span className="fpCity">Amsterdam</span>
      <span className="fpPrice">starting from 100$</span>
      <div className="fpRating">
        <button>8.3</button>
        <span>Fascinating</span>
      </div>

    </div>

    </div>



  )
}

export default FeaturedProperties
