import { useEffect, useState } from "react";
import { fetchService } from "../../../services/client-api/fetchService";




const UserMessage =()=> {

    const [message, setmessage] = useState([]);

    const fetchUserMessage = async () => {
        let fetchedUserMessage = await fetchService.usermessage();
        setmessage(fetchedUserMessage);
        console.log(fetchedUserMessage)
    }
debugger;
    useEffect( ()=> {
        fetchUserMessage();
    }, []);


    return(
        <div>
        <div className='main-title mb-4'>
          <h1 className="text-2xl font-bold">Messages:</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-400 w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4">User</th>
                <th className="py-2 px-4">Message</th>
              </tr>
            </thead>
            <tbody>
              {message.map((user) => (
                <tr key={user.id} className="border-t border-gray-400">
                  <td className="py-2 px-4">{user.property.name}</td>
                  <td className="py-2 px-4">{user.user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    )

}
export default UserMessage;