// eslint-disable-next-line no-unused-vars
import React  from 'react'
import {Navigate} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function ProtectedRoutes({loginData,children}) {
  if (localStorage.getItem("userToken")||loginData) {
    // eslint-disable-next-line react/prop-types, no-undef
    return children
  }else{
   return <Navigate to={"/login"}/>
  }
  
}


