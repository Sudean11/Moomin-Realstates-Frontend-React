import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
  from 'react-icons/bs'



function OwnerHome() {

  return (
    <div className="bg-gray-100 p-4 ">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-3/4 max-w-xl bg-white p-8 rounded-lg shadow-lg mb-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Your Dashboard</h1>
          <p className="text-lg text-gray-700 mb-8 text-center">Explore and manage your account effortlessly.</p>
        </div>
      </div>
    </div>

  )
}

export default OwnerHome;