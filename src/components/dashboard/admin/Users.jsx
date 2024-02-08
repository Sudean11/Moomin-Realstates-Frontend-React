import { useEffect, useState } from "react";
import { fetchService } from "../../../services/client-api/fetchService";
import { postService } from "../../../services/client-api/postService";


const Users = () => {

    const [userList, setuserList] = useState([]);

    const fetchlistUsers = async () => {
        const fetchedUsers = await fetchService.userList();
        setuserList(fetchedUsers);
        console.log(fetchedUsers);
    }

    useEffect( ()=>{
        fetchlistUsers();
    },[]);
    const handleUserApprove=async(id)=>
    {
        try{
            const approve = await postService.userApprove(id);
        }catch(error)
        {
            return error;}
    }
    debugger;

    const handleApprove = (id) => {
        handleUserApprove(id);
    }

    return (
        <div className="overflow-x-auto">
            <div className='main-title'>
                <h1>Owners to approve</h1>
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
                            <tr key={user.user_id}>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                                <td>{user.address.city}</td>
                                <td><button value={user.user_id} onClick={()=>{handleApprove(user.user_id)}}> Approve
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