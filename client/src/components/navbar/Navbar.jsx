import { useContext } from "react";
import "./navbar.css"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const { user } = useContext(AuthContext);

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext to clear the session
  };



  return (


    <div className="navbar">
    <div className="navContainer">
      <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo"><h2>TravelBee</h2></span>
      </Link>
      <div className="navItems">
        {user && <span className="username">{user.username}</span>}
        {user && <button className="navButton" onClick={handleLogout}>Logout</button>}
        {!user && (
          <>
            <Link to="/register" style={{color:"inherit", textDecoration:"none"}}>
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login" style={{color:"inherit", textDecoration:"none"}}>
              <button className="navButton">Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  </div>

    // <div className="navbar">
    //   <div className="navContainer">
    //     <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
    //       <span className="logo"><h2>TravelBee</h2></span>
    //     </Link>
    //     {user ? user.username : (<div className="navItems">
    //       <button className="navButton">Register</button>
    //       <button className="navButton">Login</button>
    //     </div>)}
    //   </div>
    // </div>
  )
}

export default Navbar