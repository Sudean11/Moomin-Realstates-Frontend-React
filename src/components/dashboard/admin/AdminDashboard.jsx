
import Header from "../Header";
import Sidebar from "../Sidebar";
import Home from "../Home";
import { useState } from "react";
import "./AdminDashboard.css"
import { useSelector } from "react-redux";
import { uiStore } from "../../../features/uiSlice";
import PropertiesTable from "./PropertiesTable";

const AdminDashboard =()=> {

  const{ownerDash}= useSelector(uiStore);

  const userRole =localStorage.getItem("role-id")
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar role={userRole} openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    
    if(ownerDash.Dash){
       <Home  />
    }
    else if(ownerDash.property){
      <PropertiesTable/>
    }

    
  </div>
  )
}
export default AdminDashboard;