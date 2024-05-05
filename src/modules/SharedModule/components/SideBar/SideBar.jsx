
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import toggler from '../../../../assets/img/3.png';

export default function SideBar() {
const [isCollapsed,setIsCollapse]=useState(false)

const toggleCollapsed=()=>{
  setIsCollapse(!isCollapsed);
}
  const navigate=useNavigate()
  const Logout=()=>{
    localStorage.removeItem('token');
    navigate('/login');
  };
  return <>
      <div className=' sidebar-container'>
        <Sidebar collapsed={isCollapsed}>
  <Menu >
        <MenuItem className=' pt-5' onClick={toggleCollapsed} icon={<img src={toggler} className='ps-2'/>}  >  </MenuItem>

    <MenuItem icon={<i className="fa-solid fa-house"></i>} component={<Link to="/dashboard" />} className='pt-5' > Home </MenuItem>
    <MenuItem icon={<i className="fa-solid fa-users"></i>} component={<Link to="/dashboard/users" />}> Users </MenuItem>
    <MenuItem icon={<i className="fa-solid fa-table-cells-large"></i>} component={<Link to="/dashboard/recipes" />}> Recipes </MenuItem>
    <MenuItem icon={<i className="fa-solid fa-layer-group"></i>} component={<Link to="/dashboard/categories" />}> Categories </MenuItem>
    <MenuItem icon={<i className="fa-solid fa-lock-open"></i>} component={<Link to="/dashboard/forgotpass" />}> Change Password </MenuItem>
    <MenuItem icon={<i className="fa-solid fa-right-from-bracket"></i>} onClick={Logout} > LogOut </MenuItem>

  </Menu>
</Sidebar>;
</div>
  </>

}
