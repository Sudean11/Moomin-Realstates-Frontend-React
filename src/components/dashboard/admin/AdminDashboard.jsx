
import Header from "../Header";
import Sidebar from "./Sidebar";
import Home from "../Home";
import { useState } from "react";
<<<<<<< HEAD
import "./AdminDashboard.css"
import PropertiesTable from "./PropertiesTable";
import Offers from "../owner/Offers";
=======
import "../dashboard.css";
>>>>>>> a918df2209816549974383b7d5e10a1de27af3e4

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