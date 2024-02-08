import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarAdminPanel from './SidebarAdminPanel'; 
import HeaderAdminPanel from './HeaderAdminPanel';

const layout = () => {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden '>
            <SidebarAdminPanel />
            <div className='flex-1'>
                <HeaderAdminPanel />
                <div className=" bg-gray-100 p-4 overflow-y-auto">
                    {<Outlet />}
                </div>
            </div>
        </div>
    )
}

export default layout