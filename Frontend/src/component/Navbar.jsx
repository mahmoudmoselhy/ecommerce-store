
import { Link } from "react-router-dom";
import { useState } from 'react'

import { DataContext } from "../context/context"
import { useContext } from "react"
function Navbar(){

   const { token, setToken, userData, setUserData } = useContext(DataContext)
    function handleLogout(){
        localStorage.removeItem('token')
        localStorage.removeItem('userData')
        setToken(null)
        setUserData({})

    }

  const [activeTab, setActiveTab] = useState("home");

    return(
        <>
<div className="bg-purple text-white py-2">
      <div className="container flex-column flex-md-row d-flex justify-content-between">

      
        <div>
          <span className="me-3 d-block d-md-inline"><i className="fa-regular fa-envelope"></i> mahmoudmoselhy@gmail.com</span>
          <span className="d-block d-md-inline"><i className="fa-solid fa-phone"></i> +20 123 456 7890</span>
        </div>



        
        <div>
          <span className="me-3 d-block d-md-inline">English</span>
          <span className="me-3 d-block d-md-inline">USD</span>
          {/* <span className="me-3 d-block d-md-inline"><Link className="text-decoration-none text-white" to="me"><i className="fa-regular fa-user"></i>my account</Link></span> */}
          <span className="me-3 d-block d-md-inline"><i className="fa-regular fa-heart"></i>Wishlist</span>
          <span className="me-3 d-block d-md-inline"><Link className="text-decoration-none text-white" to="cart"><i className="fa-solid fa-cart-shopping"></i>Cart</Link></span>
        </div>

      </div>
    </div>

    
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand logo" to="/">Hekto</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${activeTab === "home" ? "active fw-bold" : ""}`}
        onClick={() => setActiveTab("home")} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${activeTab === "shop" ? "active fw-bold" : ""}`}
        onClick={() => setActiveTab("shop")} to="shop">Shop</Link>
        </li>


<li className="nav-item">
          <Link className={`nav-link ${activeTab === "blog" ? "active fw-bold" : ""}`}
        onClick={() => setActiveTab("blog")} to="blogs">Blog</Link>
        </li>


        <li className="nav-item">
          <Link className={`nav-link ${activeTab === "about" ? "active fw-bold" : ""}`}
        onClick={() => setActiveTab("about")} to="about">About</Link>
        </li>

        <li className="nav-item">
            <Link className={`nav-link ${activeTab === "contact" ? "active fw-bold" : ""}`}
          onClick={() => setActiveTab("contact")} to="contact">Contact</Link>
        </li>


        {/* <li className="nav-item dropdown">
          <a className="nav-link " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown <i className="fa-solid fa-angle-down"></i>
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li className="dropdown-divider"></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li className="dropdown-divider"></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li> */}



      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn search-btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
     { token ? <>

     <div className="text-end">
      <Link to="/login">
          <button onClick={handleLogout} type="button" className="btn btn-warning ms-2">logout</button>
          </Link>

          <Link to="/me">
          <button type="button" className="btn btn-outline ms-2"><i className="fa-regular fa-user"></i>my account</button>
          </Link>

     </div>
     
        </>:
 <div className="text-end">
        <Link to="/login">
          <button type="button" className="btn btn-outline me-2">Login</button>
          </Link>
          <Link to="/register">
          <button type="button" className="btn btn-warning">Sign-up</button>
          </Link>
        </div>

        }




    </div>
  </div>
</nav>

        </>
        
    );
}


export default Navbar;