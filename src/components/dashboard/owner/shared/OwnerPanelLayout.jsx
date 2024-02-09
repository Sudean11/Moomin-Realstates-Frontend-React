import React from 'react'
import SidebarOwnerPanel from './SideBarOwnerPanel'
import HeaderOwnerPanel from './HeaderOwnerPanel'
import { Outlet } from 'react-router'

const OwnerPanelLayout = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden '>
            <SidebarOwnerPanel />
            <div className='flex-1'>
                <HeaderOwnerPanel />
                <div className="overflow-y-auto max-h-screen bg-gray-100 p-4">
                    {<Outlet />}
                </div>
            </div>
        </div>
  )
}

export default OwnerPanelLayout