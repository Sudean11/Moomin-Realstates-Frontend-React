import { useEffect, useState } from "react";
import { fetchService } from "../../../services/client-api/fetchService";
import { postService } from "../../../services/client-api/postService";



const Users = () => {
    const [reloadData, setReloadData] = useState(false);

    const [userList, setuserList] = useState([]);

    const fetchlistUsers = async () => {
        const fetchedUsers = await fetchService.userList();
        setuserList(fetchedUsers);
        console.log(fetchedUsers);
    }

    useEffect(() => {
        fetchlistUsers();
    }, [reloadData]);
    const handleUserApprove = async (id) => {
        try {
            const approve = await postService.userApprove(id);
            setReloadData(true);
        } catch (error) {
            return error;
        }
    }
    debugger;

    const handleApprove = (id) => {
        handleUserApprove(id);
    }

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="p-4">
                <h1 className="text-2xl font-semibold text-gray-900">Owners to approve</h1>
            </div>
            <div className="bg-white overflow-hidden border border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase border-l border-r border-t border-gray-200">Email</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase border-l border-r border-t border-gray-200">Phone number</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase border-l border-r border-t border-gray-200">Address</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase border-l border-r border-t border-gray-200">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {userList.map((user) => (
                            <tr key={user.user_id}>
                                <td className="px-6 py-4 whitespace-nowrap border-l border-r border-gray-200">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap border-l border-r border-gray-200">{user.contact}</td>
                                {/* <td className="px-6 py-4 whitespace-nowrap border-l border-r border-gray-200">{user.address.city}</td> */}
                                <td className="px-6 py-4 whitespace-nowrap border-l border-r border-gray-200">
                                    <button value={user.user_id} onClick={() => { handleApprove(user.user_id) }} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Approve
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    )
};
export default Users;