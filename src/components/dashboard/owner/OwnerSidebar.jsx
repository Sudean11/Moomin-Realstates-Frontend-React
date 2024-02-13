// import React from 'react'
// import {
// BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
// BsListCheck, BsPersonCircle, BsMenuButtonWideFill, BsFillGearFill, BsBoxArrowRight
// }
//     from 'react-icons/bs'
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import { authService } from '../../../services/client-api/authService';



// function OwnerSidebar({ openSidebarToggle, OpenSidebar } ) {

//     const logout = () =>{
//         authService.logout();
//     }

//     return (

//         <aside id="sidebar" className="">

//             <div className='sidebar-title'>
//                 <div className='sidebar-brand'>
//                     <BsPersonCircle className='icon' /> username
//                 </div>
//                 <span className='icon close_icon' onClick={OpenSidebar}>X</span>
//             </div>
//             <hr />

//                 <>
//                     <ul className='sidebar-list'>
//                         <li className='sidebar-list-item'>
//                             <Link to="/owner-dashboard"><BsGrid1X2Fill className='icon' /> Dashboard</Link>

//                         </li>
//                         <li className='sidebar-list-item'>
//                             <Link to="/propertiesTable">
//                                 <BsFillArchiveFill className='icon' /> Properties
//                             </Link>
//                         </li>

//                         <li className='sidebar-list-item'>
//                             <Link to="/offers">
//                                 <BsPeopleFill className='icon' /> Offers
//                             </Link>
//                         </li>
//                         <li className='sidebar-list-item'>
//                             <Link to="/add-property">
//                                 <BsPeopleFill className='icon' /> Add property
//                             </Link>
//                         </li>

//                         <li className='sidebar-list-item'>
//                             <Link to="/message-user">
//                                 <BsPeopleFill className='icon' /> Message
//                             </Link>
//                         </li>


//                         <div className="sidebar-logout">
//                             <Link to="/" className="sidebar-link" onClick={logout}>
//                                 <BsBoxArrowRight className='icon' /> Logout
//                             </Link>
//                         </div>
//                     </ul>
//                 </>
            

//         </aside>
//     )

// }

// export default OwnerSidebar;