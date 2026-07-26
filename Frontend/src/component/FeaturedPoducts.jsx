import { Link } from "react-router-dom";


function FeaturedPoducts( {products}){
    return(
        <>
        

 <div className="container py-5 text-center">
      <h2 className="mb-5 fw-bold heading-color ">Featured Products</h2>

      <div className="row">


 {products.slice(0, 4).map((product)=>(
        <div key={product._id} className="col-md-3 mb-4">
  <div className="card product-card border-0 h-100 shadow-sm">

  
    <div className="img-wrapper position-relative overflow-hidden" style={{ height: '300px' }}>
      <img
        src={`http://localhost:5000/${product.mainImage}`} alt={product.name}
        className="img-fluid"
      />


<div className="icons-top-left">
  <i className="fa-solid fa-cart-shopping"></i>
  <i className="fa-regular fa-heart"></i>
  <i className="fa-solid fa-magnifying-glass"></i>
</div>


<div className="btn-center">
  <Link to= {`/product/${product._id}`} className="btn btn-success">View Details</Link>
</div>
    </div>

  
    <div className="card-body text-center">
      <h6 className="text-danger fw-bold">{product.name}</h6>

      <div className="mb-2">
        <span className="dot bg-success"></span>
        <span className="dot bg-danger"></span>
        <span className="dot bg-primary"></span>
      </div>

      <p className="mb-1 text-muted">Code - Y523201</p>
      <p className="fw-bold">{product.price}</p>
    </div>

  </div>
</div>

))}





      </div>
    </div>
        
        </>
    )
}





export default FeaturedPoducts;