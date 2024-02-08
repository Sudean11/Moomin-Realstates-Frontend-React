import React from 'react'

const offerList = () => {

  

  return (
    <div className="overflow-x-auto">
      <h2>Offer List</h2>
      <table className="table-auto border-collapse border border-gray-800">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">30</td>
            <td className="border px-4 py-2">john@example.com</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border px-4 py-2">2</td>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">25</td>
            <td className="border px-4 py-2">jane@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default offerList;