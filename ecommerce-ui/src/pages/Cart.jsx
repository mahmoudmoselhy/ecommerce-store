
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb"

function Cart(){

    const navigate = useNavigate();
    return(

        <>

        <Breadcrumb/>

    <div className="container my-5">
      <div className="row">

        <div className="col-lg-8">
          <div className="d-flex fw-bold mb-3">
            <div className="flex-grow-1 heading-color">Product</div>
            <div className="me-5 heading-color">Price</div>
            <div className="me-5 heading-color">Quantity</div>
            <div className="heading-color">Total</div>
          </div>


          <div className="d-flex align-items-center border-bottom py-3">
            <img
              src="../src/assets/design/feu-1.png"
              alt=""
              width="80"
            />

            <div className="ms-3 flex-grow-1  heading-color">
              <h6>Ut diam consequat</h6>
              <small className="text-muted">Color: Brown</small><br />
              <small className="text-muted">Size: XL</small>
            </div>

            <div className="me-5">$32.00</div>

            <div className="me-5 d-flex align-items-center">
              <button className="btn btn-light btn-sm">-</button>
              <span className="mx-2">1</span>
              <button className="btn btn-light btn-sm">+</button>
            </div>

            <div>£219.00</div>

            
          </div>

          <div className="d-flex align-items-center border-bottom py-3">
            <img src="../src/assets/design/feu-2.png" alt="" width="80" />

            <div className="ms-3 flex-grow-1 heading-color">
              <h6>Vel faucibus posuere</h6>
              <small className="text-muted">Color: Brown</small><br />
              <small className="text-muted">Size: XL</small>
            </div>

            <div className="me-5">$32.00</div>

            <div className="me-5 d-flex align-items-center">
              <button className="btn btn-light btn-sm">-</button>
              <span className="mx-2">1</span>
              <button className="btn btn-light btn-sm">+</button>
            </div>

            <div>£219.00</div>

            
          </div>


          <div className="d-flex align-items-center border-bottom py-3">
            <img src="../src/assets/design/feu-3.png" alt="" width="80" />

            <div className="ms-3 flex-grow-1 heading-color">
              <h6>Ac vitae vestibulum</h6>
              <small className="text-muted">Color: Brown</small><br />
              <small className="text-muted">Size: XL</small>
            </div>

            <div className="me-5">$32.00</div>

            <div className="me-5 d-flex align-items-center">
              <button className="btn btn-light btn-sm">-</button>
              <span className="mx-2">1</span>
              <button className="btn btn-light btn-sm">+</button>
            </div>

            <div>£219.00</div>

            
          </div>


          <div className="d-flex align-items-center border-bottom py-3">
            <img src="../src/assets/design/feu-4.png" alt="" width="80" />

            <div className="ms-3 flex-grow-1 heading-color">
              <h6>Elit massa diam</h6>
              <small className="text-muted">Color: Brown</small><br />
              <small className="text-muted">Size: XL</small>
            </div>

            <div className="me-5">$32.00</div>

            <div className="me-5 d-flex align-items-center">
              <button className="btn btn-light btn-sm">-</button>
              <span className="mx-2">1</span>
              <button className="btn btn-light btn-sm">+</button>
            </div>

            <div>£219.00</div>

            
          </div>


          <div className="d-flex justify-content-between mt-4">
            <button className="btn search-btn">Update Cart</button>
            <button className="btn search-btn">Clear Cart</button>
          </div>
        </div>


        <div className="col-lg-4">
          <div className="rounded p-4 mb-4 bg-h-light">
            <h5 className=" heading-color">Cart Totals</h5>

            <div className="d-flex justify-content-between mt-3">
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

            <button onClick={() => navigate("checkout")} className="btn btn-success mt-3">
              Proceed To Checkout
            </button>
          </div>


          <div className="rounded p-4 bg-h-light">
            <h5 className=" heading-color">Calculate Shipping</h5>

            <input
              className="form-control mt-3"
              placeholder="Bangladesh"
            />
            <input
              className="form-control mt-2"
              placeholder="Mirpur Dhaka - 1200"
            />
            <input
              className="form-control mt-2"
              placeholder="Postal Code"
            />

            <button className="btn search-btn mt-3">
              Calculate Shipping
            </button>
          </div>
        </div>
      </div>
    </div>


        </>
    )
}


export default Cart