import { useEffect, useState } from "react";


function Filter({ onCategoryChange }){

   const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories || []); 
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);
  

  function handleChange(e) {
    setSelectedCategory(e.target.value);
    onCategoryChange(e.target.value);
  }


    return(
        <>
        
<div className="col-12  mb-4 pt-5">

  <div className="p-3 border rounded">


    <h5 className="fw-bold mb-3 border-bottom pb-2">Product Category</h5>



      <div className="form-check mb-2">
        <label className="form-check-label">
          <input className="form-check-input"
            type="radio"
            name="category"
            value=""
            checked={selectedCategory === ""}
            onChange={handleChange}
          />
          All Categories
        </label>
      </div>

      {categories.map((cat) => (
        <div key={cat._id}>
          <label className="form-check-label">
            <input className="form-check-input"
              type="radio"
              name="category"
              value={cat._id}
              checked={selectedCategory === cat._id}
              onChange={handleChange}
            />
            {cat.name}
          </label>
        </div>
      ))}



    {/* <div className="form-check mb-2">
      <input className="form-check-input" type="checkbox" id="brand1" />
      <label className="form-check-label" htmlFor="brand1">
        Coaster Furniture
      </label>
    </div>
    <div className="form-check mb-2">
      <input className="form-check-input" type="checkbox" id="brand2" />
      <label className="form-check-label" htmlFor="brand2">
        Fusion Dot High Fashion
      </label>
    </div>
    <div className="form-check mb-2">
      <input className="form-check-input" type="checkbox" id="brand3" />
      <label className="form-check-label" htmlFor="brand3">
        Unique Furniture Restor
      </label>
    </div> */}

   
    <h5 className="fw-bold mt-4 mb-3 border-bottom pb-2">Brands</h5>
    <div className="form-check mb-2">
      <input className="form-check-input" type="checkbox" id="discount1" />
      <label className="form-check-label" htmlFor="discount1">
        20% Cashback
      </label>
    </div>
    <div className="form-check mb-2">
      <input className="form-check-input" type="checkbox" id="discount2" />
      <label className="form-check-label" htmlFor="discount2">
        5% Cashback Offer
      </label>
    </div>


    <h5 className="fw-bold mt-4 mb-3 border-bottom pb-2">Rating Item</h5>
    <div className="d-flex align-items-center mb-2">
      <div className="me-2 text-warning">
        ★★★★☆
      </div>
      <span>(2341)</span>
    </div>
    <div className="d-flex align-items-center mb-2">
      <div className="me-2 text-warning">
        ★★★☆☆
      </div>
      <span>(1726)</span>
    </div>

  </div>
</div>

        </>
    )
}




export default Filter ;