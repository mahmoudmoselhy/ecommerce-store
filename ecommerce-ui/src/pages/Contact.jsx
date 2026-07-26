

import Breadcrumb from "../component/Breadcrumb"


function Contact(){

    return(
        <>
        <Breadcrumb/>
        

        <div className="container py-5">

      
        <div className="row mb-5">
          
          
          <div className="col-md-6 mb-4">
            <h3 className="fw-bold heading-color mb-3">Information About us</h3>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>

            <div className="d-flex gap-3 mt-3">
              <span className="dot purple"></span>
              <span className="dot pink"></span>
              <span className="dot cyan"></span>
            </div>
          </div>

        
          <div className="col-md-6">
            <h3 className="fw-bold heading-color mb-4">Contact Way</h3>

            <div className="row g-4">

              <div className="col-6 d-flex align-items-start gap-3">
                <span className="icon purple"></span>
                <div>
                  <p className="mb-1">Tel: 877-67-88-99</p>
                  <p className="mb-0 text-muted">E-Mail: shop@store.com</p>
                </div>
              </div>

              <div className="col-6 d-flex align-items-start gap-3">
                <span className="icon pink"></span>
                <div>
                  <p className="mb-1">Support Forum</p>
                  <p className="mb-0 text-muted">For over 24hr</p>
                </div>
              </div>

              <div className="col-6 d-flex align-items-start gap-3">
                <span className="icon orange"></span>
                <div>
                  <p className="mb-1">20 Margaret st, London</p>
                  <p className="mb-0 text-muted">Great britain, 3NM98-LK</p>
                </div>
              </div>

              <div className="col-6 d-flex align-items-start gap-3">
                <span className="icon green"></span>
                <div>
                  <p className="mb-1">Free standard shipping</p>
                  <p className="mb-0 text-muted">on all orders.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

       
        <div className="row align-items-center">

         
          <div className="col-md-6 mb-4">
            <h3 className="fw-bold heading-color mb-3">Get In Touch</h3>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </p>

            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name*"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your E-mail"
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject*"
                  />
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Type Your Message*"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="btn search-btn px-4 py-2">
                    Send Mail
                  </button>
                </div>
              </div>
            </form>
          </div>

        
          <div className="col-md-6 text-center">
            <img
              src="/src/assets/design/contact.png"
              alt="support"
              className="img-fluid"
            />
          </div>

        </div>
      </div>
        
        
        </>
    )
}


export default Contact