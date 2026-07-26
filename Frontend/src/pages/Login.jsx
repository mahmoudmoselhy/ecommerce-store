

import api from "../api/api"

import {useForm} from "react-hook-form"
import {useState} from "react"

import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import Breadcrumb from "../component/Breadcrumb"
function Login(){

    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();


    const [error , setError] = useState(null)

    const navigate = useNavigate()



async function onSubmit(data){
    try{
        const response = await api.post("/api/users/login",data);

        localStorage.setItem("token",response.data.token)
        navigate("/me")

    }
    catch(error){
         setError(error.response?.data?.message || "login failed")
    }
}

    return(
        <>
        <Breadcrumb/>
        <div className="container">
            <div className="row">
            <div className=" col-12 col-md-6 m-auto  mt-5 mb-5 bg-h-light p-5 rounded">
                <div className="text-center"> 

                
                <h1 className="fw-bold heading-color">Login</h1>
                <p>Please login using account detail bellow.</p>
                {error && <div className="alert alert-danger my-3">{error}</div>}
</div>
            <form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" {...register("email",{required:"Email is required", pattern:{value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message:"Invalid Email"},})} className="form-control" id="exampleInputEmail1" placeholder="Enter your Email" aria-describedby="emailHelp" />
    <p className=" text-danger mt-1"> {errors.email?.message}</p>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" {...register("password",{required:"Password is required",minLength:{value:6 , message:"password must up to 6 character"},maxLength:{value:20, message:"password must less then 20 character"}})} className="form-control" id="exampleInputPassword1" placeholder="Enter your Password" />
     <p className=" text-danger mt-1"> {errors.password?.message}</p>
     <div className="mt-2 text-start">
    <Link to="forgot-password">Forgot password?</Link>
  </div>
  </div>

  <button type="submit" className="btn search-btn w-100">Login</button>
  <div className="mt-3 text-center">
    <p>Don't have an account ? <Link to="register">Create account</Link></p>
    
  </div>
 
</form>


        </div></div>
        </div>
        
        </>
    )
}



export default Login;