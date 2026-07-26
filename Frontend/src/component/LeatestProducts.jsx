import {Link} from "react-router-dom";
import { useState } from 'react'

function LeatestProducts({products}){
const [activeTab, setActiveTab] = useState("new");
    return(
        <>




   <div className="container py-5 text-center">
  <h2 className="mb-3 fw-bold heading-color">Latest Products</h2>


  <ul className="nav justify-content-center mb-5">
    <li className="nav-item">
     <button
      className={`nav-link ${activeTab === "new" ? "active" : ""}`}
      onClick={() => setActiveTab("new")}
    >
      New Arrival
    </button>
    </li>
    <li className="nav-item">
      <button
        className={`nav-link ${activeTab === "best" ? "active" : ""}`}
        onClick={() => setActiveTab("best")}
      >
        Best Seller
      </button>
    </li>
    <li className="nav-item">
      <button className={`nav-link ${activeTab === "featured" ? "active" : ""}`}
        onClick={() => setActiveTab("featured")}>Featured</button>
    </li>
    <li className="nav-item">
      <button className={`nav-link ${activeTab === "special" ? "active" : ""}`}
        onClick={() => setActiveTab("special")}>Special Offer</button>
    </li>
  </ul>

  <div className="row justify-content-center">

    

   
{products.slice(0, 6).map((product)=>(

    <div  key={product._id} className="col-md-4 mb-4">
      <Link  className="text-decoration-none" to= {`/product/${product._id}`}>
      <div className="product-card position-relative">


        <div className="img-wrapper position-relative">
          <img  src={`http://localhost:5000/${product.mainImage}`} alt={product.name} />

          
          <div className="icons-left">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <h6>{product.name}</h6>

        <div>
          <span className="price">{product.price}</span>
          <span className="old-price">$65.00</span>
        </div>
      </div>
      </Link>
    </div>

))}
  

  </div>
</div>


        </>
    )
}



export default LeatestProducts;