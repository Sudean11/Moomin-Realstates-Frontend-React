import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const layout = () => {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden '>
            <Sidebar />
            <div className='flex-1'>
                <Header />
                <div className=" bg-gray-100 p-4 overflow-y-auto">
                    {<Outlet />}
                </div>
            </div>
        </div>
    )
}

export default layout