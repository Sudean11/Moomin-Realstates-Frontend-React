import { useState } from "react"
import Header from "../Header"
import OwnerSidebar from "./OwnerSidebar"
import OwnerHome from "./OwnerHome"


const OwnerDashboard =()=> {

    const userRole =localStorage.getItem("role-id")
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }
      
    return (
        <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <OwnerSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <OwnerHome/>
        </div>
    )
}
export default OwnerDashboard;