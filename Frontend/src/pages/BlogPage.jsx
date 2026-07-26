
import Sidebar from "../component/Sidebar"
import BlogPost from "../component/BlogPost"
import Breadcrumb from "../component/Breadcrumb"

function BlogPage(){

    return(

        <>
        
        <Breadcrumb/>
        <div className="container py-5">
      <div className="row">

        
        <div className="col-md-8">




          <BlogPost />
          <BlogPost />
          <BlogPost />

         



          <div className="text-center mt-4">
            <button className="btn search-btn me-2">1</button>
            <button className="btn btn-outline-secondary me-2">2</button>
            <button className="btn btn-outline-secondary">3</button>
          </div>
        </div>

      
        <div className="col-md-4">
          <Sidebar />
        </div>

      </div>
    </div>


        </>
    )
}


export default BlogPage