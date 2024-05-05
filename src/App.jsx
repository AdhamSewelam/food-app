import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MasterLayout from './modules/SharedModule/components/MasterLayout/MasterLayout';
import NotFound from './modules/SharedModule/components/NotFound/NotFound';
import Dashboard from './modules/UsersModule/components/Dashboard/Dashboard';
import RecipesList from './modules/RecipesModule/components/RecipesList';
import CategoriesList from './modules/CategoriesModule/components/CategoriesList';
import UsersList from './modules/UsersModule/components/UsersList/UsersList';
import AuthLayout from './modules/SharedModule/components/AuthLayout/AuthLayout';
import Login from './modules/AuthenticationModule/components/Login/Login';
import Register from './modules/AuthenticationModule/components/Register/Register';
import ForgetPass from './modules/AuthenticationModule/components/ForgetPass/ForgetPass';
import ResetPass from './modules/AuthenticationModule/components/ResetPass/ResetPass';
import { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { useEffect } from 'react';
import ProtectedRout from './modules/SharedModule/components/ProtectedRout/ProtectedRout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // eslint-disable-next-line no-unused-vars
  let [loginData,setLoginData]=useState(null)
  let savaLoginData=()=>{
    let encodedToken=localStorage.getItem('token');
    let decodedToken= jwtDecode(encodedToken);
    setLoginData(decodedToken);
    console.log(decodedToken);
  }

  useEffect(()=>{
    if (localStorage.getItem('token')) {
      savaLoginData()
    }
  },[])
  let routes = createBrowserRouter([
    {path:'dashboard',element:
    <ProtectedRout loginData={loginData}>
     <MasterLayout loginData={loginData}/>
</ProtectedRout>
     ,
    errorElement:<NotFound/>,
    children:[
      {index:true,element:<Dashboard/>},
      {path:'dashboard',element:<Dashboard/>},
      {path:'recipes',element:<RecipesList/>},
      {path:'categories',element:<CategoriesList/>},
      {path:'users',element:<UsersList/>},
    ],
  },
  { path:'',element: <AuthLayout/>,errorElement:<NotFound/>,
  children:[
    {index:true,element:<Login savaLoginData={savaLoginData}/>},
    {path:'login',element:<Login savaLoginData={savaLoginData}/>},
    {path:'register',element:<Register/>},
    {path:'forgotpass',element:<ForgetPass/>},
    {path:'resetpass',element:<ResetPass/>},
  ],
  },
  ])

  return (
    <>
      <ToastContainer/>
   <RouterProvider router={routes}>
    </RouterProvider>
    </>
  );
}

export default App;

