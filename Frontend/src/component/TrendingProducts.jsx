
import {Link} from "react-router-dom"

function TrendingProducts({products}){



    return(

        <>

        <div className="container py-5 text-center">

            <h2 className="mb-3 fw-bold heading-color">Trending Products</h2>

            <div className="row justify-content-center">

    

   



   
{products.slice(0, 3).map((product)=>(

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






export default TrendingProducts