

import { Link } from "react-router-dom";


function Footer(){
    return(
        <>  
        

<footer className="py-5 bg-h-light">
      <div className="container">
        <div className="row">

         
          <div className="col-lg-4 col-md-12 mb-4">
            <form>
              <h5 className="logo">Hekto</h5>


              <div className="d-flex flex-column flex-sm-row gap-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email Address"
                />
                <button className="btn text-nowrap search-btn" type="button">
                  Sign Up
                </button>
              </div>
              <h5 className="mt-4">Contact Info</h5>
              <p className="mb-1">17 Princess Road, London, Greater London NW1 8JR, UK</p>

            </form>
          </div>


          <div className="col-lg-8">
            <div className="row">

              <div className="col-6 col-md-4 mb-3">
                <h5>Catagories</h5>
                <ul className="nav flex-column">
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Laptops & Computers</Link></li>
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Cameras & Photography</Link></li>
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Smart Phones & Tablets</Link></li>
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Video Games & Consoles</Link></li>
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Waterproof Headphones</Link></li>
                </ul>
              </div>

             

              <div className="col-6 col-md-4 mb-3">
                <h5>Customer Care</h5>
                <ul className="nav flex-column">
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">My Account</Link></li>
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Discount</Link></li>
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Returns</Link></li>
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Orders History</Link></li>
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Order Tracking</Link></li>
                </ul>
              </div>

 <div className="col-6 col-md-4 mb-3">
                <h5>Pages</h5>
                <ul className="nav flex-column">
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Blog</Link></li>
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Browse the Shop</Link></li>
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Category</Link></li>
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Pre-Built Pages</Link></li>
                  <li className="mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Visual Composer Elements</Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>©Webecy - All Rights Reserved</p>

          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>

            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <i className="fa-brands fa-facebook"></i>
             </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </footer>


        
        </>
    )
}


export default Footer;