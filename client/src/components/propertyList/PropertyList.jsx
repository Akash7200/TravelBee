import useFetch from "../../hooks/useFetch";
import "./propertyList.css"

const PropertyList = () => {

  const { data, loading, error} = useFetch("http://localhost:8000/api/hotels/countByType");

  const images= [
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/379757616.jpg?k=82d1fe93dda214b7f4c77d9d3eb69e3468f5fed19f5c04c8a70ad93a2fdcad64&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/379757616.jpg?k=82d1fe93dda214b7f4c77d9d3eb69e3468f5fed19f5c04c8a70ad93a2fdcad64&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/379757616.jpg?k=82d1fe93dda214b7f4c77d9d3eb69e3468f5fed19f5c04c8a70ad93a2fdcad64&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/379757616.jpg?k=82d1fe93dda214b7f4c77d9d3eb69e3468f5fed19f5c04c8a70ad93a2fdcad64&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/379757616.jpg?k=82d1fe93dda214b7f4c77d9d3eb69e3468f5fed19f5c04c8a70ad93a2fdcad64&o=&hp=1"
  ]

  return (
    <div className="pList">
      {loading ? (
        "Loading please wait..."
        ) :
        (<>
        
        {data && images.map((img,i) => (<div className="pListItem" key = {i}>
        <img width="300px" height="250px" src={img} alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>{data[i]?.type}</h1>
            <h2>{data[i]?.count} {data[i]?.type}</h2>
        </div>
      </div>))}

      </>)}

    </div>
  )
}

export default PropertyList
