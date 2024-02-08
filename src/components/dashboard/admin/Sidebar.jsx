import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck,BsPersonCircle, BsMenuButtonWideFill, BsFillGearFill,BsBoxArrowRight }
 from 'react-icons/bs'
import { Link } from 'react-router-dom'



function Sidebar({openSidebarToggle, OpenSidebar}) {


  return (

    <aside id="sidebar" className="">
        
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <BsPersonCircle className='icon'/> username
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        <hr/>
       
        <>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item' >
                <Link to="/admin-dashboard"><BsGrid1X2Fill className='icon'/> Dashboard</Link>
                    
                
            </li>
            <li className='sidebar-list-item' >
                <Link to="/propertiesTable">
                    <BsFillArchiveFill className='icon'/> Properties
                </Link>
            </li>
           
            <li className='sidebar-list-item'>
                <Link to="/user">
                    <BsListCheck className='icon'/> Manage Owner
                </Link>
            </li>

            <div className="sidebar-logout">
        <Link to="/logout" className="sidebar-link">
          <BsBoxArrowRight className='icon'/> Logout
        </Link>
      </div>
        </ul>
        </>
     




{/* {role === 'customer' && (
        <>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/Linkdmin-dashboard"><BsGrid1X2Fill className='icon'/> Dashboard</Link>
                    
                
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <BsFillArchiveFill className='icon'/> favorite Properties List
                </Link>
            </li>
           
            <li className='sidebar-list-item'>
                <Link to="">
                    <BsPeopleFill className='icon'/> Offers History
                </Link>
            </li>
            

            <div className="sidebar-logout">
        <Link to="/logout" className="sidebar-link">
          <BsBoxArrowRight className='icon'/> Logout
        </Link>
      </div>
        </ul>
        </>
      )} */}
    </aside>
  )
}

export default Sidebar