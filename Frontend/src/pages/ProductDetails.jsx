
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../api/api"
import { useEffect, useState } from "react";
import Breadcrumb from "../component/Breadcrumb";

function ProductDetails(){
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => { 
          setProduct(data.product)
      }
       )
      .catch(err => console.log(err));
  }, [id]);

 useEffect(() => {
  if (product && product.category) {
    fetch(`http://localhost:5000/api/categories/${product.category}`)
      .then(res => res.json())
      .then(data => {
        setCategoryName(data.category.name)})
      .catch(err => console.error(err));
  }
}, [product]);

  if (!product) return <h2>Loading...</h2>;
  console.log(product.name)
    return(
      
        <>

        <Breadcrumb/>


        <div className="container py-5">
      <div className="row align-items-stretch">
        

        <div className="col-md-2 d-flex">
          <div className="d-flex flex-column flex-row gap-3 w-100">
            <img src="../src/assets/design/lat-1.png" className="img-fluid rounded bg-h-light" />
            <img src="../src/assets/design/lat-2.png" className="img-fluid rounded bg-h-light" />
            <img src="../src/assets/design/lat-3.png" className="img-fluid rounded bg-h-light" />
          </div>
        </div>

        <div className="col-md-5 d-flex">
          <img
           src={`http://localhost:5000/${product.mainImage}`} alt={product.name}
            className="img-fluid rounded bg-h-light align-items-center justify-content-center"
          />
        </div>

      
        <div className="col-md-5 d-flex">
            <div className="w-100 d-flex flex-column justify-content-center">
          <h2 className="fw-bold">{product.name}</h2>
          

       
          <div className="mb-2 text-warning">
            ★★★★★ <span className="text-dark">(22)</span>
          </div>

     
          <div className="mb-3">
            <span className="fs-4 fw-bold">{product.price}</span>
            <span className="text-danger text-decoration-line-through ms-2">
              $32.00
            </span>
          </div>

        
          <h6 className="fw-bold">Color</h6>

          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
            porttitor purus, et volutpat sit.
          </p>

         <div className="d-flex">
          <button className="btn btn-primary px-4 me-2">
            Add To Cart
          </button>
          <button className="btn btn-outline-secondary">
            ♥
          </button>
</div>
    
          <div className="mt-4">
            <p><strong>Categories:  {categoryName}</strong></p>
            <p><strong>Tags:</strong></p>
          </div>

   
          <div className="d-flex ">
            <strong>Share:</strong>{" "}
             <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>

            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <i className="fa-brands fa-facebook"></i>
             </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
            </li>
          </ul>
          </div>
        </div>
        </div>

      </div>
    </div>




{/* description tabs */}


<div className="bg-h-light">
 <div className="container py-5">

    
      <ul className="nav nav-tabs border-0 mb-4">
        <li className="nav-item">
          <button className="nav-link active custom-tab fs-4 fw-medium">
            Description
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link custom-tab fs-4 fw-medium">
            Additional Info
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link custom-tab fs-4 fw-medium">
            Reviews
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link custom-tab fs-4 fw-medium">
            Video
          </button>
        </li>
      </ul>

      <div>
        <h5 className="fw-bold mb-3">Varius tempor.</h5>

        <p className="text-muted">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet.
          Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet.
        </p>

        <h6 className="fw-bold mt-4">More details</h6>

        <ul className="list-unstyled mt-3">
          <li className="mb-2">→ Aliquam dis vulputate vulputate integer sagittis.</li>
          <li className="mb-2 text-primary">→ Aliquam dis vulputate vulputate integer sagittis.</li>
          <li className="mb-2">→ Aliquam dis vulputate vulputate integer sagittis.</li>
          <li className="mb-2">→ Aliquam dis vulputate vulputate integer sagittis.</li>
        </ul>
      </div>

    </div>

</div>





{/* related product */}

   <div className="container py-5 text-start">
  <h2 className="mb-3 fw-bold heading-color pb-3">Related Products</h2>



  <div className="row justify-content-center">

    

   


    <div className="col-md-3 mb-4">
      <div className="product-card position-relative">


        <div className="img-wrapper position-relative">
          <img src="../src/assets/design/lat-1.png" alt="" />

          
          <div className="icons-left">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <h6>Comfort Handy Craft</h6>

        <div>
          <span className="price">$42.00</span>
          <span className="old-price">$65.00</span>
        </div>
      </div>
    </div>


  
    <div className="col-md-3 mb-4">
      <div className="product-card position-relative">



        <div className="img-wrapper position-relative">
          <img src="../src/assets/design/lat-2.png" alt="" />

          
          <div className="icons-left">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <h6>Comfort Handy Craft</h6>

        <div>
          <span className="price">$42.00</span>
          <span className="old-price">$65.00</span>
        </div>
      </div>
    </div>





      
    <div className="col-md-3 mb-4">
      <div className="product-card position-relative">



        <div className="img-wrapper position-relative">
          <img src="../src/assets/design/lat-3.png" alt="" />

          
          <div className="icons-left">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <h6>Comfort Handy Craft</h6>

        <div>
          <span className="price">$42.00</span>
          <span className="old-price">$65.00</span>
        </div>
      </div>
    </div>





      
    <div className="col-md-3 mb-4">
      <div className="product-card position-relative">



        <div className="img-wrapper position-relative">
          <img src="../src/assets/design/lat-4.png" alt="" />

          
          <div className="icons-left">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <h6>Comfort Handy Craft</h6>

        <div>
          <span className="price">$42.00</span>
          <span className="old-price">$65.00</span>
        </div>
      </div>
    </div>
    </div>






  </div>

        
        </>
    )
}


export default ProductDetails ;