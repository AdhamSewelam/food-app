// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../../../../assets/img/Logo.png';
import { useForm} from 'react-hook-form';
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


// eslint-disable-next-line react/prop-types
export default function Login({savaLoginData}) {
  const navigate=useNavigate();
  let{
    register,
     handleSubmit, 
     formState : {errors},
    }=useForm();

    const onSubmit= async (data)=>{
      try{
        let response = await axios.post(`https://upskilling-egypt.com:3006/api/v1/Users/Login`,
        data);
        localStorage.setItem('token',response.data.token);
        toast.success(response.data.message);
        savaLoginData()
        navigate("/dashboard")

      }catch(error){
toast.error(error.response.data.message);
      }

    }
  return <>
  <div className="auth-container  ">
    <div className="container-fluid vh-100 bg-overlay">
      <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-md-6 bg-white ">
            {/* Logo img */}
          <div className='text-center p-4 rounded rounded-5  '>
          <img src={logo} alt="" className='w-50' />
          </div>
          <div className="form-content container px-5">
            <h3>Log Innnnnnnn</h3>
            <p className=' text-muted'>Welcome Back! Please enter your details</p>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>

              {/* Email */}
            <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">
<i className='fa fa-envelope'></i>
  </span>
  <input type="text"
   className="form-control"
    placeholder="Enter your E-mail" 
    {...register("email",{
      required:"Email is required",
      pattern:{
        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i,
      message:"Invaild Email"
      }
    }
 
  )}
    />
</div>
{errors.email&&<p className=' alert alert-danger'>{errors.email.message}</p>}

{/* Password */}
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">
  <i className="fa-solid fa-lock"></i>  </span>
  <input type="password"
   className="form-control" 
   placeholder="Password"
   {...register("password",{
    required:"Password is required",
    pattern:{
    message:"Invaild Password"
    }
  }

)}
   />
</div>
{errors.password&&<p className=' alert alert-danger'>{errors.password.message}</p>}

{/* Linkes */}
<div className="Linkes d-flex justify-content-between my-3">
  <a >Register Now?</a>
  <NavLink className=' text-success' to='/forgotpass'>Forgot Password?</NavLink>
</div>

{/* button */}
<button className=' btn btn-success w-100 mb-5 ' >Login</button>
</form>
          </div>
          </div>
      </div>
    </div>
  </div>
  </>
}

