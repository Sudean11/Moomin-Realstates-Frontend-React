import React from 'react'
import {
BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
BsListCheck, BsPersonCircle, BsMenuButtonWideFill, BsFillGearFill, BsBoxArrowRight
}
    from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({ openSidebarToggle, OpenSidebar }, { role }) {
    role = "customer"

    const handleUserClick = (clickedItem) => {
        const keys = ['main', 'currentOffers', 'savedList', 'offerHistory'];
        keys.forEach(key => localStorage.setItem(key, false));
        localStorage.setItem(clickedItem, true);
    }
    return (

        // <aside id="sidebar" className='pt-10'>
        <>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsPersonCircle className='icon' /> username
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>
            {role === 'admin' && (
                <>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            <Link to="/admin-dashboard"><BsGrid1X2Fill className='icon' /> Dashboard</Link>


                        </li>
                        <li className='sidebar-list-item'>
                            <a href="/add-property">
                                <BsFillArchiveFill className='icon' /> Properties
                            </a>
                        </li>

                        <li className='sidebar-list-item'>
                            <a href="">
                                <BsPeopleFill className='icon' /> Customers
                            </a>
                        </li>
                        <li className='sidebar-list-item'>
                            <a href="">
                                <BsListCheck className='icon' /> Manage Owner
                            </a>
                        </li>

                        <div className="sidebar-logout">
                            <a href="/" className="sidebar-link" >
                                <BsBoxArrowRight className='icon' /> Logout
                            </a>
                        </div>
                    </ul>
                </>
            )}

            {role === 'owner' && (
                <>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            <Link to="/admin-dashboard"><BsGrid1X2Fill className='icon' /> Dashboard</Link>

                        </li>
                        <li className='sidebar-list-item'>
                            <a href="/add-property">
                                <BsFillArchiveFill className='icon' /> Properties
                            </a>
                        </li>

                        <li className='sidebar-list-item'>
                            <a href="">
                                <BsPeopleFill className='icon' /> Offers
                            </a>
                        </li>


                        <div className="sidebar-logout">
                            <a href="/logout" className="sidebar-link">
                                <BsBoxArrowRight className='icon' /> Logout
                            </a>
                        </div>
                    </ul>
                </>
            )}


            {role === 'customer' && (
                <>
                    <div className='p-4 text-white'>
                       
                        <ul className='mt-4'>
                            <li className='py-2' >
                                <div className='flex items-center text-white' onClick={() => handleUserClick('currentOffers')} >
                                    <BsGrid1X2Fill className='mr-2' />
                                    Current Offers List
                                </div>
                            </li>
                            <li className='py-2' onClick={() => handleUserClick('savedList')}>
                                <a href="" className='flex items-center text-white'>
                                    <BsFillArchiveFill className='mr-2' />
                                    Saved Offers
                                </a>
                            </li>
                            <li className='py-2' onClick={() => handleUserClick('offerHistory')}>
                                <a href="" className='flex items-center text-white'>
                                    <BsPeopleFill className='mr-2' />
                                    Offers History
                                </a>
                            </li>
                        </ul>
                        <div className='mt-auto'>
                            <a href="/logout" className="flex items-center text-white py-2">
                                <BsBoxArrowRight className='mr-2' />
                                Logout
                            </a>
                        </div>
                    </div>
                </>
            )}
            {/* </aside> */}
        </>
    )
}

export default Sidebar