import useFetch from "../../hooks/useFetch.js"
import "./featured.css"

const Featured = () => {

    const { data, loading, error} = useFetch("http://localhost:8000/api/hotels/countByCity?cities=berlin,madrid,london");
    console.log(data)

    return (
        <div className="featured">
            {loading ? (
                "Loading please wait..."
                ) :  
            <><div className="featuredItem">
                <img width="300px" height="250px" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1" alt="" className="featuredImg" />

                <div className="featuredTitles">
                    <h1>Berlin</h1>
                    <h2>{data[0]} properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img width="300px" height="250px" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1" alt="" className="featuredImg" />

                <div className="featuredTitles">
                    <h1>Madrid</h1>
                    <h2>{data[1]} properties</h2>
                </div>
            </div>


            <div className="featuredItem">

                <img width="300px" height="250px" src="https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h2>{data[2]} properties</h2>
                </div>
            </div></>}
        </div>
    )
}

export default Featured
