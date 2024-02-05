import useFetch from "../../hooks/useFetch.js"
import "./featured.css"

const Featured = () => {

    const { data, loading, error} = useFetch("http://localhost:8000/api/hotels/countByCity?cities=berlin,madrid,london");

    return (
        <div className="featured">
            {loading ? (
                "Loading please wait..."
                ) :  
            <><div className="featuredItem">
                <img width="300px" height="250px" src="./images/1.jpg" alt="" className="featuredImg" />

                <div className="featuredTitles">
                    <h1>Berlin</h1>
                    <h2>{data[0]} properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img width="300px" height="250px" src="./images/2.jpg" alt="" className="featuredImg" />

                <div className="featuredTitles">
                    <h1>Madrid</h1>
                    <h2>{data[1]} properties</h2>
                </div>
            </div>


            <div className="featuredItem">

                <img width="300px" height="250px" src="./images/3.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h2>{data[2]} properties</h2>
                </div>
            </div></>}
        </div>
    )
}

export default Featured
