import useFetch from "../../hooks/useFetch";
import "./propertyList.css"

const PropertyList = () => {

  const { data, loading, error} = useFetch("http://localhost:8000/api/hotels/countByType");

  const images= [
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.jpg"
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
