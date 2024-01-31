import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img width="300px" height="250px" src="./images/4.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>6544 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img width="300px" height="250px" src="./images/5.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>674 apartments</h2>
        </div>
      </div>

      <div className="pListItem">
        <img width="300px" height="250px" src="./images/6.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Cottages</h1>
            <h2>544 cottages</h2>
        </div>
      </div>

      <div className="pListItem">
        <img width="300px" height="250px" src="./images/7.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>65 resorts</h2>
        </div>
      </div>

      <div className="pListItem">
        <img width="300px" height="250px" src="./images/8.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Motels</h1>
            <h2>687 motels</h2>
        </div>
      </div>

    </div>
  )
}

export default PropertyList
