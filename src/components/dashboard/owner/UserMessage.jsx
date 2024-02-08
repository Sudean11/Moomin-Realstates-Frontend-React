import { useEffect, useState } from "react";
import { fetchService } from "../../../services/client-api/fetchService";




const UserMessage =()=> {

    const [message, setmessage] = useState([]);

    const fetchUserMessage = async () => {
        let fetchedUserMessage = await fetchService.usermessage();
        setmessage(fetchedUserMessage);
        console.log(fetchedUserMessage)
    }

    useEffect( ()=> {
        fetchUserMessage();
    }, []);


    return(
        <div>
            <div className='main-title'>
                <h1>Messages : </h1>
            </div>
            <div className="table table-bordered">
                <table className="table table-hover ">
                    <thead className="table-dark ">
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {message.map((user) => (
                            <tr key={user.id}>
                                <td>{user.property.name}</td>
                                <td>{user.user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          
        </div>
    )

}
export default UserMessage;