import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck,BsPersonCircle, BsMenuButtonWideFill, BsFillGearFill,BsBoxArrowRight }
 from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar},{role}) {
  return (

    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <BsPersonCircle className='icon'/> username
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        {role === 'admin' && (
        <>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/admin-dashboard"><BsGrid1X2Fill className='icon'/> Dashboard</Link>
                    
                
            </li>
            <li className='sidebar-list-item'>
                <a href="/add-property">
                    <BsFillArchiveFill className='icon'/> Properties
                </a>
            </li>
           
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Manage Owner
                </a>
            </li>

            <div className="sidebar-logout">
        <a href="/logout" className="sidebar-link">
          <BsBoxArrowRight className='icon'/> Logout
        </a>
      </div>
        </ul>
        </>
      )}

{role === 'owner' && (
        <>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/admin-dashboard"><BsGrid1X2Fill className='icon'/> Dashboard</Link>
                 
            </li>
            <li className='sidebar-list-item'>
                <a href="/add-property">
                    <BsFillArchiveFill className='icon'/> Properties
                </a> 
            </li>
           
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Offers
                </a>
            </li>
          

            <div className="sidebar-logout">
        <a href="/logout" className="sidebar-link">
          <BsBoxArrowRight className='icon'/> Logout
        </a>
      </div>
        </ul>
        </>
      )}


{role === 'customer' && (
        <>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/admin-dashboard"><BsGrid1X2Fill className='icon'/> Dashboard</Link>
                    
                
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> favorite Properties List
                </a>
            </li>
           
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Offers History
                </a>
            </li>
            

            <div className="sidebar-logout">
        <a href="/logout" className="sidebar-link">
          <BsBoxArrowRight className='icon'/> Logout
        </a>
      </div>
        </ul>
        </>
      )}
    </aside>
  )
}

export default Sidebar