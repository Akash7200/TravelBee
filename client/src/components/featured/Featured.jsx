import useFetch from "../../hooks/useFetch.js"
import "./featured.css"

const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=berlin");
    console.log(data);

    return (
        <div className="featured">
            <div className="featuredItem">
                <img width="300px" height="250px" src="./images/1.jpg" alt="" className="featuredImg" />

                <div className="featuredTitles">
                    <h1>Dhaka</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img width="300px" height="250px" src="./images/2.jpg" alt="" className="featuredImg" />

                <div className="featuredTitles">
                    <h1>New York</h1>
                    <h2>504 properties</h2>
                </div>
            </div>


            <div className="featuredItem">

                <img width="300px" height="250px" src="./images/3.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Dubai</h1>
                    <h2>468 properties</h2>
                </div>
            </div>

        </div>
    )
}

export default Featured
