
import Breadcrumb from "../component/Breadcrumb"
import api from "../api/api"
import Filter from "../component/Filter"
import { Link } from "react-router-dom";

import {useState , useEffect} from "react"




function Shop(){

    // const [view , setview]= useState("grid")

const [selectedCategory, setSelectedCategory] = useState("");
    const [products , setProducts] = useState([])
    const[loading , setLoading] = useState(true)


    useEffect(()=>{

      async function getProducts(){

        try{
          
          const response = await api.get("/api/products");
          console.log(response.data);

          setProducts(response.data.products|| [])
        }

        catch(error){
          console.log(error)
        }
        setLoading(false)

      
      }

      getProducts();



    },[])


    if (loading) {
        return <p className="text-center mt-5">Loading...</p>;
    }


    return(
        <>

        <Breadcrumb/>


<div className="container py-4">

  <div className="row align-items-center">

    {/* Left side */}
    <div className="col-md-6">
      <h4 className="fw-bold heading-color">
        Ecommerce Accessories & Fashion item
      </h4>
      <small className="text-muted">
        About 9,620 results (0.62 seconds)
      </small>
    </div>

    
    <div className="col-md-6">
      <div className="d-flex justify-content-end align-items-center gap-3">

      
        <div>
          <label className="me-2">Per Page:</label>
          <input type="number" className="form-control d-inline-block" style={{ width: "70px" }} />
        </div>

        
        <div>
          <label className="me-2">Sort By:</label>
          <select className="form-select d-inline-block" style={{ width: "120px" }}>
            <option>Best Match</option>
            <option>Low Price</option>
            <option>High Price</option>
          </select>
        </div>

       
        <div className="d-flex align-items-center gap-2">
          <span>View:</span>
          <i className="fa-solid fa-table-cells"></i>
          <i className="fa-solid fa-list"></i>
        </div>

        
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          style={{ width: "150px" }}
        />

      </div>
    </div>

  </div>




<div className="row">

<div className="col-3">
  <Filter onCategoryChange={setSelectedCategory} />
</div>


<div className="col-9">




 <div className="row pt-5">





    {products.map((product)=>(
    <div key={product._id} className="col-md-3 mb-4">
      
      <div className="card product-card position-relative shadow-sm border-0 ">


<Link to= {`/product/${product._id}`}>
        <div className="img-wrapper position-relative">
          <img src={`http://localhost:5000/${product.mainImage}`} alt={product.name} />

          
          <div className="icons-left">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        </Link>
<div className="pt-1 pb-4 text-center">
  <Link className="text-decoration-none" to= {`/product/${product._id}`}>
        <h6 className="text-danger fw-bold">{product.name}</h6>
        </Link>
        <div className="mb-2">
        <span className="dot bg-success"></span>
        <span className="dot bg-danger"></span>
        <span className="dot bg-primary"></span>
      </div>
        <div>
          <span className="price">{product.price}</span>
          <span className="old-price">$65.00</span>
        </div>
        </div>

      </div>
      
    </div>


))}










{/* 

<div className="col-md-3 mb-4">
      <div className="card product-card position-relative shadow-sm border-0 ">



        <div className="img-wrapper position-relative">
          <img src="../src/assets/design/lat-2.png" alt="" />

          
          <div className="icons-left">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
<div className="pt-1 pb-4 text-center">
        <h6 className="text-danger fw-bold">Comfort Handy Craft</h6>
        <div className="mb-2">
        <span className="dot bg-success"></span>
        <span className="dot bg-danger"></span>
        <span className="dot bg-primary"></span>
      </div>
        <div>
          <span className="price">$42.00</span>
          <span className="old-price">$65.00</span>
        </div>
        </div>

      </div>
    </div>


<div className="col-md-3 mb-4">
      <div className="card product-card position-relative shadow-sm border-0 ">



        <div className="img-wrapper position-relative">
          <img src="../src/assets/design/lat-2.png" alt="" />

          
          <div className="icons-left">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
<div className="pt-1 pb-4 text-center">
        <h6 className="text-danger fw-bold">Comfort Handy Craft</h6>
        <div className="mb-2">
        <span className="dot bg-success"></span>
        <span className="dot bg-danger"></span>
        <span className="dot bg-primary"></span>
      </div>
        <div>
          <span className="price">$42.00</span>
          <span className="old-price">$65.00</span>
        </div>
        </div>

      </div>
    </div>



    <div className="col-md-3 mb-4">
      <div className="card product-card position-relative shadow-sm border-0 ">



        <div className="img-wrapper position-relative">
          <img src="../src/assets/design/lat-2.png" alt="" />

          
          <div className="icons-left">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
<div className="pt-1 pb-4 text-center">
        <h6 className="text-danger fw-bold">Comfort Handy Craft</h6>
        <div className="mb-2">
        <span className="dot bg-success"></span>
        <span className="dot bg-danger"></span>
        <span className="dot bg-primary"></span>
      </div>
        <div>
          <span className="price">$42.00</span>
          <span className="old-price">$65.00</span>
        </div>
        </div>

      </div>
    </div>


<div className="col-md-3 mb-4">
      <div className="card product-card position-relative shadow-sm border-0 ">



        <div className="img-wrapper position-relative">
          <img src="../src/assets/design/lat-2.png" alt="" />

          
          <div className="icons-left">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
<div className="pt-1 pb-4 text-center">
        <h6 className="text-danger fw-bold">Comfort Handy Craft</h6>
        <div className="mb-2">
        <span className="dot bg-success"></span>
        <span className="dot bg-danger"></span>
        <span className="dot bg-primary"></span>
      </div>
        <div>
          <span className="price">$42.00</span>
          <span className="old-price">$65.00</span>
        </div>
        </div>

      </div>
    </div>


<div className="col-md-3 mb-4">
      <div className="card product-card position-relative shadow-sm border-0 ">



        <div className="img-wrapper position-relative">
          <img src="../src/assets/design/lat-2.png" alt="" />

          
          <div className="icons-left">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
<div className="pt-1 pb-4 text-center">
        <h6 className="text-danger fw-bold">Comfort Handy Craft</h6>
        <div className="mb-2">
        <span className="dot bg-success"></span>
        <span className="dot bg-danger"></span>
        <span className="dot bg-primary"></span>
      </div>
        <div>
          <span className="price">$42.00</span>
          <span className="old-price">$65.00</span>
        </div>
        </div>

      </div>
    </div>
 */}




      </div>
</div>

</div>

   </div> 
        </>
    )
}


export default Shop ;