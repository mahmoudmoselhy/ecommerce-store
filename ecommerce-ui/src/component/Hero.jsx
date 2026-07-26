
import { Link } from "react-router-dom";



function Hero(){
    return(
        <>
    
 <div
      id="heroCarousel"
      className="carousel carousel-dark slide bg-h-light"
      data-bs-ride="carousel"
    >
  
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className="active"
        />
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
        />
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
        />
      </div>

     
      <div className="carousel-inner">

       
        <div className="carousel-item active">
          <div className="container px-5">
            <div className="row align-items-center carousel-height flex-column-reverse flex-md-row">
              
              {/* LEFT TEXT */}
              <div className="col-md-6 text-start">
                <p className="text-danger">Best Furniture For Your Castle</p>
                <h2 className="fw-bold">
                  New Furniture Collection Trends in 2022
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                </p>
                <div className="d-flex justify-content-center justify-content-md-start">
  <Link to="shop" className="btn btn-danger mt-3">
    Shop Now
  </Link>
</div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="col-md-6 position-relative text-center">
                <div className="position-absolute hero-circle w-70 h-70"></div>
                <img
                  src="../src/assets/design/hero-img-1.png"
                  className="img-fluid position-relative"
                  alt="chair"
                />
                
                <div className="discount-badge position-absolute">50% off</div>
              </div>
            </div>
          </div>
        </div>

<div className="carousel-item active">
          <div className="container px-5">
            <div className="row align-items-center carousel-height flex-column-reverse flex-md-row">
              
              <div className="col-md-6 text-start">
                <p className="text-danger">Best Furniture For Your Castle</p>
                <h2 className="fw-bold">
                  New Furniture Collection Trends in 2022
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                </p>
                <div className="d-flex justify-content-center justify-content-md-start">
  <Link to="shop" className="btn btn-danger mt-3">
    Shop Now
  </Link>
</div>
              </div>

             
              <div className="col-md-6 position-relative text-center">
                <div className="position-absolute hero-circle w-70 h-70"></div>
                <img
                  src="../src/assets/design/hero-img-1.png"
                  className="img-fluid position-relative"
                  alt="chair"
                />
                
                <div className="discount-badge position-absolute">50% off</div>
              </div>
            </div>
          </div>
        </div>



        <div className="carousel-item active">
          <div className="container px-5">
            <div className="row align-items-center carousel-height flex-column-reverse flex-md-row">
              
             
              <div className="col-md-6 text-start">
                <p className="text-danger">Best Furniture For Your Castle</p>
                <h2 className="fw-bold">
                  New Furniture Collection Trends in 2022
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                </p>
                <div className="d-flex justify-content-center justify-content-md-start">
  <Link to="shop" className="btn btn-danger mt-3">
    Shop Now
  </Link>
</div>
              </div>

              

              <div className="col-md-6 position-relative text-center">
                <div className="position-absolute hero-circle w-70 h-70"></div>
                <img
                  src="../src/assets/design/hero-img-1.png"
                  className="img-fluid position-relative"
                  alt="chair"
                />
                
                <div className="discount-badge position-absolute">50% off</div>
              </div>
            </div>
          </div>
        </div>


      </div>

    


      <button
        className="carousel-control-prev "
        style={{ width: "10%" }}
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>

      <button
        className="carousel-control-next w-10"
        style={{ width: "10%" }}
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>

        </>
    )
}



export default Hero ;