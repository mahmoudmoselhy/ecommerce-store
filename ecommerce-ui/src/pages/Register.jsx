

import {useForm} from "react-hook-form"
import {useState} from "react"
import api from "../api/api"

import Breadcrumb from "../component/Breadcrumb";

import {Link , useNavigate} from "react-router-dom"

function Register(){

const {
    register,
    handleSubmit,
    watch,
    formState:{errors}
} = useForm();

 const password = watch("password");

// function onSubmit(data){
//     console.log("formDate : ",data)
// }



const [error , setError] = useState(null)
const navigate = useNavigate()







async function sendDate(data){

try{
const response = await api.post("api/users/register",data)
localStorage.setItem('token',response.data.token)
navigate("/me")
}
catch(error){
    console.log(error.response.data.message)
    setError(error.response.data.message)
}



}


function handleInput (){
        setError(null)
        console.log(error)
    }


    return(
        <>
        
           <Breadcrumb/>
        <div className="container">
            <div className="row">
            <div className=" col-12 col-md-6 m-auto  mt-5 mb-5 bg-h-light p-5 rounded">
                <div className="text-center"> 

                
                <h1 className="fw-bold heading-color">Register</h1>
                <p>Please fill detail bellow to  Register an account .</p>
</div>

{error && <div className="alert alert-danger my-3">{error}</div>}
            <form onSubmit={handleSubmit(sendDate)}>

<div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="text" className="form-control" {...register("name",{required:"your name is required",minLength:{value:3, message:"name must more then 3 character"}, maxLength:{value:30,message:"name must less then 30 character"}})} onInput={handleInput} id="exampleInputName1" placeholder="Enter your Name" />
    <p className="mt-1 text-danger">{errors.name?.message}</p>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" {...register("email",{required:"Email is required", pattern:{value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message:"Invalid Email"},})} onInput={handleInput} className="form-control" id="exampleInputEmail1" placeholder="Enter your Email" aria-describedby="emailHelp" />
    <p className=" text-danger mt-1"> {errors.email?.message}</p>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
     <input type="password" {...register("password",{required:"Password is required",minLength:{value:6 , message:"password must up to 6 character"},maxLength:{value:20, message:"password must less then 20 character"}})} onInput={handleInput} className="form-control" id="exampleInputPassword1" placeholder="Enter your Password" />
     <p className=" text-danger mt-1"> {errors.password?.message}</p>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
    <input type="password" id="exampleInputConfirmPassword1" placeholder="Enter your Confirm Password" {...register("confirmPassword",{required:"confirmPassword is required",validate:(value)=>value === password || "password and confirmPassword not match"})} onInput={handleInput} className="form-control" />
    <p className=" text-danger mt-1"> {errors.confirmPassword?.message}</p>
  </div>

  <button type="submit" className="btn search-btn w-100">Register</button>
  <div className="mt-3 text-center">
    <p>Your already register ? <Link to="login">Login</Link></p>
    
  </div>
 
</form>


        </div></div>
        </div>
        
        
        
        </>
    )
}



export default Register;