
import Header from "../Header";
import Sidebar from "../Sidebar";
import Home from "../Home";
import { useState } from "react";
import "./AdminDashboard.css"

const AdminDashboard =()=> {

  const userRole =localStorage.getItem("role-id")
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar role={userRole} openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <Home  />
  </div>
  )
}
export default AdminDashboard;