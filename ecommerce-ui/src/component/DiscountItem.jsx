
import { useState } from 'react'

 function DiscountItem() {

  const [activeTab, setActiveTab] = useState("new");

  return (
    <div className="container p-5">
      <h4 className="text-center mb-4 fw-bold heading-color">Discount Item</h4>
  <ul className="nav justify-content-center mb-1">
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
      <div className="row align-items-center">
        <div className="col-md-6">
          <h3 className="text-start mb-4  heading-color">20% Discount Of All Products</h3>

          <h6 className='text-danger'>Eams Sofa Compact</h6>

          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
          </p>

          <ul>
            <li>Material expose like metals</li>
            <li>Clear lines and geometric figures</li>
            <li>Simple neutral colours</li>
          </ul>

          <button className="btn search-btn mt-4">Shop Now</button>
        </div>

        <div className="col-md-6 text-center">
          <img src="../src/assets/design/dis-t.png" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default DiscountItem