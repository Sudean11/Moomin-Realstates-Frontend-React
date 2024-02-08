import { useState,useEffect } from "react";
import { fetchService } from "../../../services/client-api/fetchService";

import { property } from "lodash";
import { postService } from "../../../services/client-api/postService";
import Offers from "../owner/Offers";

const PropertiesTable = () => {

    const [tableProperties, settableProperties] = useState([]);
    const [reloadData, setReloadData] = useState(false);

    const fetchtableProperties = async () => {
        let fetchedtableProperties = await postService.getPendingStatus();
        settableProperties(fetchedtableProperties);
        console.log(fetchedtableProperties);
    }
    useEffect(()=>{
        fetchtableProperties();
       
    },[reloadData])

    const handleProperty = async (id) => {
        try {
            const val = await postService.getPostTableAccept(id);
            console.log(val);
            setReloadData(true);
        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    }
    const handlePropertyCancel = async (id) => {
        try {
            const val = await postService.rejectContingencyForOwner(id);
            if (val.data) {
                setReloadData(prevState => !prevState);
            } else {
                alert("There is a pending offer");
            }
        } catch (error) {
            console.error("Error accepting offer:", error);
        }
    };
    

    return (

        <div className="overflow-x-auto">
            <div className='main-title'>
                <h1>All Properties</h1>
            </div>
            <div className="table table-bordered">
                <table className="table table-hover ">
                    <thead class="table-dark ">
                        <tr>
                        <th scope="col">Property Id</th>
                            <th scope="col">Properties</th>
                            <th scope="col">Location</th>
                            <th scope="col">Owner</th>
                            <th scope="col"> Property status</th>
                            <th scope="col">Action</th>
                            
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {tableProperties.map((property) => (
                            <tr key={property.id}>
                                <td>{property.id}</td>
                                <td>{property.name}</td>
                                <td>{property.price}</td>
                                <td>{property.area}</td>
                                <td>{property.status}</td>
                                <td>
                                <button value={property.id} onClick={(event) => handleProperty(event.target.value)}>Delete </button>
                                {property.status === 'CONTINGENT' && (
                                    <div>
                                        <button value={property.id} onClick={() => handlePropertyCancel(property.id)}>CANCEL</button>
                                    </div>
                                )}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          
        </div>
        


    )
}
export default PropertiesTable;