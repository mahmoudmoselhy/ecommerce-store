
import api from "../api/api"

import { useEffect , useState } from "react";
import Breadcrumb from "../component/Breadcrumb";

function Profile(){


    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)
    



useEffect(()=>{

    async function getUser(){
        try{
            const response = await api.get("/api/users/me");
            setUser(response.data.user)
        }
        catch(error){
            setError(error.response?.data?.message || "you must be login to open your profile")
        }
        setLoading(false)
    };

    getUser();
    
},[]);

if (loading) {
    return <p className="text-center mt-5">Loading...</p>;
}
    return(

        <>
        
        {error && <div className="alert alert-danger my-3">{error}</div>}

        <Breadcrumb/>
    <div className="container mt-5">
      <h2>My Account</h2>

      {user ? (
        <div className="card p-4 mt-3 mb-5">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone || "Not set"}</p>
          <p><strong>Age:</strong> {user.age || "Not set"}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Address:</strong> {user.address ? `${user.address.street}, ${user.address.city}, ${user.address.country} - ${user.address.postalCode}` : "Not set"}</p>
        </div>
      ) : (
        <p>No user data</p>
      )}
    </div>
        </>
    )
}



export default Profile;