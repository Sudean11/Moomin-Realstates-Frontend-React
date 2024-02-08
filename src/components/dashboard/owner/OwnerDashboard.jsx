import { useState } from "react"
import Home from "../Home"
import Sidebar from "../admin/Sidebar"
import Header from "../Header"


const OwnerDashboard =()=> {

    const userRole =localStorage.getItem("role-id")
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }
      
    return (
        <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar role={userRole} openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Home/>
        </div>
    )
}
export default OwnerDashboard;