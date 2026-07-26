

function Sidebar(){

    return(
        <>
        
        <div>

      
      <div className="mb-4">
        <h6 className="fw-bold">Search</h6>
        <input
          type="text"
          className="form-control"
          placeholder="Search here..."
        />
      </div>

     
      <div className="mb-4">
        <h6 className="fw-bold">Categories</h6>
        <ul className="list-unstyled">
          <li className="mb-2">Hobbies (10)</li>
          <li className="mb-2">Women (21)</li>
          <li className="mb-2">Men (15)</li>
          <li className="mb-2">Accessories (8)</li>
        </ul>
      </div>

   
      <div className="mb-4">
        <h6 className="fw-bold">Recent Post</h6>

        <div className="d-flex mb-3">
          <img  src="/src/assets/design/bl-1.jpg" className="me-2 rounded sidebar-img " alt="" />
          <div>
            <small>It is a long established fact</small>
          </div>
        </div>

        <div className="d-flex mb-3">
          <img src="/src/assets/design/bl-2.jpg" className="me-2 rounded sidebar-img " alt=""/>
          <div>
            <small>Another blog post title</small>
          </div>
        </div>

      </div>

      
      <div className="mb-4">
        <h6 className="fw-bold">Sale Product</h6>

        <div className="d-flex mb-3">
          <img  src="/src/assets/design/bl-3.jpg" className="me-2 sidebar-img " alt=""/>
          <div>
            <small>Product Name</small>
          </div>
        </div>

        <div className="d-flex mb-3">
          <img  src="/src/assets/design/bl-1.jpg" className="me-2 sidebar-img " alt=""/>
          <div>
            <small>Another Product</small>
          </div>
        </div>
      </div>

    
      <div>
        <h6 className="fw-bold">Tags</h6>
        <span className="badge bg-light text-dark me-2">General</span>
        <span className="badge bg-light text-dark me-2">Design</span>
        <span className="badge bg-light text-dark">Blog</span>
      </div>

    </div>
        
        </>
    )
}

export default Sidebar