

function BlogPost(){


    return(
        <>
        
        <div className="mb-5">

     
      <img
        src="/src/assets/design/blog.jpg"
        className="img-fluid rounded mb-3"
        alt="blog"
      />

   
      <div className="d-flex gap-3 text-muted small mb-2">
        <span>Admin</span>
        <span>Aug 2023</span>
      </div>

  
      <h5 className="fw-bold">
        Mauris at orci non vulputate diam tincidunt nec.
      </h5>

     
      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis
        quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae
        ultrices in augue.
      </p>

      
      <button className="btn search-btn">Read More</button>
    </div>


        </>
    )
}

export default BlogPost