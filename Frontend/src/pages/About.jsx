

import Breadcrumb from "../component/Breadcrumb"
import WhatShopexOffer from "../component/WhatShopexOffer";


function About(){

    return(
        <>
        
        <Breadcrumb/>
        <div className="container py-4 ">
        <div className="row align-items-center">

         
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="image-wrapper">
              <img
                src="/src/assets/design/about.png"
                alt="business"
                className="img-fluid rounded"
              />
            </div>
          </div>

         
          <div className="col-md-6">
            <h2 className="mb-3 fw-bold heading-color">
              Know About Our Ecommerce Business, History
            </h2>

            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>

            <button className="btn search-btn px-4 py-2 mt-5">
              Contact us
            </button>
          </div>

        </div>
      </div>

        <WhatShopexOffer/>



        </>
    )
}



export default About