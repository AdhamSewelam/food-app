// eslint-disable-next-line no-unused-vars
import React from 'react'
import notfound from '../../../../assets/img/not-found-bg.png'
import { NavLink} from 'react-router-dom';
import logo from '../../../../assets/img/Logo.png'

export default function NotFound() {
 
  return <>
 
      <div className="container-fluid">
  <div className="row ">
 
    <div className="col-md-1"></div>
    <div className="col-md-3 ">
  <img src={logo} className='mt-5 mb-5'  alt="" />
<h1 className="NotHeading NotFound1">Oops</h1>
<p className="NotPrag NotFound1">Page  not found </p>
<p className="NotPrag1 NotFound1">This Page doesn’t exist or was removed!<br/>
            We suggest you  back to home. </p>
            <NavLink to="/dashboard">
            <button className=' btn btn-success text-white p-3' ><i className="fa-solid fa-arrow-left pe-2"></i>Back To Home</button>
   </NavLink>
    </div>
    <div className="col-md-8">
      <img className='w-100 vh-100' src={notfound} alt='' />
    </div>
  </div>
  
</div>

  </>
   
  
}



