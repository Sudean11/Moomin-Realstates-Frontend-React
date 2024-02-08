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
        <div>
            <div className='main-title'>
                <h1>Users to approve</h1>
            </div>
            <div className="table table-bordered">
                <table className="table table-hover ">
                    <thead class="table-dark ">
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">Address</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {userList.map((user) => (
                            <tr key={user.id}>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                                <td>{user.address.city}</td>
                                <td><button> Approve
                                    </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
};
export default Users;