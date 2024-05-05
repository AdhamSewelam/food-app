import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import SideBar from "../SideBar/SideBar"

// eslint-disable-next-line react/prop-types
function MasterLayout({loginData}) {
  return <>
    <div className="d-flex">
      <div>
        <SideBar/>
      </div>

      <div className="w-100">
          <Navbar loginData={loginData} />
          <Header/>
          <Outlet/>
      </div>

    </div>
  </>
}

export default MasterLayout