import {Link } from "react-router-dom"

function Breadcrumb(){
    

  const pathnames = location.pathname.split("/").filter((x) => x);

    return(

      
        <>
        
          <div className="bg-h-light">
        <div className="container ">
          <div className="pt-5 pb-4">
<nav  aria-label="breadcrumb pt-3">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/">Home</Link></li>


             
              {pathnames.map((name, index) => {
               
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

                
                const isLast = index === pathnames.length - 1;

                
                const displayName = name.charAt(0).toUpperCase() + name.slice(1);

                return isLast ? (
                  <li
                    key={routeTo}
                    className="breadcrumb-item active"
                    aria-current="page"
                  >
                    {displayName}
                  </li>
                ) : (
                  <li key={routeTo} className="breadcrumb-item">
                    <Link to={routeTo}>{displayName}</Link>
                  </li>
                );
              })}

    {/* <li className="breadcrumb-item active" aria-current="page">Shop</li> */}
  </ol>
</nav>
</div>
        </div>
        </div>
        
        </>
    )
}

export default Breadcrumb;