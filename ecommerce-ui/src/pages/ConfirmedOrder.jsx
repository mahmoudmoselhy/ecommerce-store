


import { useNavigate } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb"

function ConfirmedOrder(){

const navigate = useNavigate();
    return(
        
        <>
        <Breadcrumb/>
        
         <div className="container my-5 position-relative ">
      
   
      <div className="position-absolute start-0 top-0 text-center">
        <img src="/src/assets/design/clock.png" alt="" width="80" />
        <div className="vertical-line mt-3"></div>
      </div>

  
      <div className="position-absolute end-0 bottom-0">
        <img src="/src/assets/design/checklist.png" alt="" width="80" />
      </div>

   
      <div className="text-center py-5">
        <img src="/src/assets/design/chack.png" alt="" width="80" className="mb-3" />

        <h2 className="heading-color fw-bold">
          Your Order Is Completed!
        </h2>

        <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "600px" }}>
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>

        <button onClick={() => navigate("/")} className="btn search-btn mt-4 px-4 py-2">
            Continue Shopping
          
        </button>
      </div>
    </div>
        </>
    )
}


export default ConfirmedOrder