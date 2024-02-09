import { useState } from "react";
import { fetchService } from "../../../services/client-api/fetchService";


const Users = () => {

    const [userList, setuserList] = useState([]);

    const fetchlistUsers = async () => {
        const fetchedUsers = await fetchService.userList();
        setuserList(fetchedUsers);
        console.log(fetchedUsers);
    }


    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <div className="p-4">
            <h1 className="text-2xl font-semibold text-gray-900">Users to approve</h1>
        </div>
        <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Phone number
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {userList.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.contact}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.address.city}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button className="text-indigo-600 hover:text-indigo-900 bg-indigo-100 px-3 py-1 rounded">
                                        Approve
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    )
};
export default Users;