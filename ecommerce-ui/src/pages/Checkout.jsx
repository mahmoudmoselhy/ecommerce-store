

import Breadcrumb from "../component/Breadcrumb"


import { useNavigate } from "react-router-dom";


function Checkout(){


     const navigate = useNavigate();
    return(
        <>
        <Breadcrumb/>
        

        <div className="container my-5">
      <div className="row">

     
        <div className="col-lg-8 bg-h-light p-4">
          
      
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="heading-color">Contact Information</h5>
            <small className="text-muted">
              Already have an account? Log in
            </small>
          </div>

          <input
            className="form-control mt-3 border-0 border-bottom"
            placeholder="Email or mobile phone number"
          />

          <div className="form-check mt-3">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label text-muted">
              Keep me up to date on news and exclusive offers
            </label>
          </div>

         
          <h5 className="heading-color mt-5">Shipping address</h5>

          <div className="row mt-3">
            <div className="col-md-6">
              <input
                className="form-control border-0 border-bottom"
                placeholder="First name (optional)"
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control border-0 border-bottom"
                placeholder="Last name"
              />
            </div>
          </div>

          <input
            className="form-control mt-3 border-0 border-bottom"
            placeholder="Address"
          />

          <input
            className="form-control mt-3 border-0 border-bottom"
            placeholder="Apartment, suite, etc (optional)"
          />

          <input
            className="form-control mt-3 border-0 border-bottom"
            placeholder="City"
          />

          <div className="row mt-3">
            <div className="col-md-6">
              <input
                className="form-control border-0 border-bottom"
                placeholder="Bangladesh"
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control border-0 border-bottom"
                placeholder="Postal Code"
              />
            </div>
          </div>

          <button className="btn search-btn mt-4 px-4 py-2">
            Continue Shipping
          </button>
        </div>

       
        <div className="col-lg-4">

      
          <div className="mb-4">

           
            <div className="d-flex align-items-center mb-3">
              <img src="../src/assets/design/feu-1.png" width="60" alt="" />
              <div className="ms-3 flex-grow-1">
                <small className="heading-color">Ut diam consequat</small><br />
                <small className="text-muted">Color: Brown</small><br />
                <small className="text-muted">Size: XL</small>
              </div>
              <span>$32.00</span>
            </div>

         
            <div className="d-flex align-items-center mb-3">
              <img src="../src/assets/design/feu-1.png" width="60" alt="" />
              <div className="ms-3 flex-grow-1">
                <small className="heading-color">Ut diam consequat</small><br />
                <small className="text-muted">Color: Brown</small><br />
                <small className="text-muted">Size: XL</small>
              </div>
              <span>$32.00</span>
            </div>

        
            <div className="d-flex align-items-center mb-3">
              <img src="../src/assets/design/feu-1.png" width="60" alt="" />
              <div className="ms-3 flex-grow-1">
                <small className="heading-color">Ut diam consequat</small><br />
                <small className="text-muted">Color: Brown</small><br />
                <small className="text-muted">Size: XL</small>
              </div>
              <span>$32.00</span>
            </div>

    
            <div className="d-flex align-items-center mb-3">
              <img src="../src/assets/design/feu-1.png" width="60" alt="" />
              <div className="ms-3 flex-grow-1">
                <small className="heading-color">Ut diam consequat</small><br />
                <small className="text-muted">Color: Brown</small><br />
                <small className="text-muted">Size: XL</small>
              </div>
              <span>$32.00</span>
            </div>

          </div>

   
          <div className="rounded p-4 bg-h-light">
            <div className="d-flex justify-content-between">
              <span>Subtotals:</span>
              <span>£219.00</span>
            </div>

            <div className="d-flex justify-content-between mt-2">
              <span>Totals:</span>
              <strong>£325.00</strong>
            </div>

            <small className="text-muted mt-2">
              Shipping & taxes calculated at checkout
            </small>

            <button onClick={() => navigate("ordercomplete")} className="btn btn-success mt-3 w-100">
              Proceed To Checkout
            </button>
          </div>

        </div>
      </div>
    </div>
        
        </>
    )
}


export default Checkout