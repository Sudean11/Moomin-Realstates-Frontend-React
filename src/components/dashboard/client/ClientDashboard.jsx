import React from 'react'

const clientDashboard = () => {

  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
  <div className="w-3/4 max-w-xl bg-white p-8 rounded-lg shadow-lg mb-10">
    <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Your Dashboard</h1>
    <p className="text-lg text-gray-700 mb-8 text-center">Explore and manage your account effortlessly.</p>
    <div className="flex justify-center">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Get Started
      </button>
    </div>
  </div>
</div>



  )
}

export default clientDashboard;