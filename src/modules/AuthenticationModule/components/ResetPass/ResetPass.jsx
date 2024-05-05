// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../../../../assets/img/Logo.png';
import { useForm} from 'react-hook-form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ResetPass() {
    const navigate=useNavigate();
    let{
        register,
         handleSubmit, 
         formState : {errors},
        }=useForm();
    
        const onSubmit= async (data)=>{
            try{
              let response = await axios.post(`https://upskilling-egypt.com:3006/api/v1/Users/Reset`,
              data);
              console.log(response.data);
              // toast.success(response.data.message);
              navigate("/login")
      
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
            <h3> Reset  Password</h3>
            <p className=' text-muted'>Please Enter Your Otp  or Check Your Inbox</p>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
            <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">
<i className='fa fa-envelope'></i>
  </span>
  <input type="text"
   className="form-control"
    placeholder="Email" 
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

{/* OTP */}
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">
  <i className="fa-solid fa-lock"></i>  </span>
  <input type="text"
   className="form-control" 
   placeholder="OTP"
   {...register("seed",{
    required:"OTP is required",
    pattern:{
    message:"Invaild OTP"
    }
  }

)}
   />
</div>
{errors.seed&&<p className=' alert alert-danger'>{errors.seed.message}</p>}

{/* New Password */}
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">
  <i className="fa-solid fa-lock"></i>  </span>
  <input type="password"
   className="form-control" 
   placeholder=" New Password"
   {...register("password",{
    required:"Password is required",
    pattern:{
        value:/^[A-Z][a-z0-9@#!&*]{4,10}$/i,
    message:"Invaild Password"
    }
  }

)}
   />
</div>
{errors.password&&<p className=' alert alert-danger'>{errors.password.message}</p>}

{/* Confirm New Password*/}
<div className="input-group mb-5">
  <span className="input-group-text" id="basic-addon1">
  <i className="fa-solid fa-lock"></i>  </span>
  <input type="password"
   className="form-control" 
   placeholder="Confirm New Password"
   {...register("confirmPassword",{
    required:"confirmPassword is required",
  validate:(value)=>
  // eslint-disable-next-line no-undef
  value===watch('password')||
  "confirmPassword should match Password"
  }

)}

   />
</div>
{errors.confirmPassword&&<p className=' alert alert-danger'>{errors.confirmPassword.message}</p>}

{/* button */}
<button className=' btn btn-success w-100 mb-5 ' >Reset Password</button>
</form>
          </div>
          </div>
      </div>
    </div>
  </div>
  
  </>
}
