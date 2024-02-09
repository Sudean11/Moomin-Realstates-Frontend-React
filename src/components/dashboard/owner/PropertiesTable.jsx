import { useState, useEffect } from "react";
import { fetchService } from "../../../services/client-api/fetchService";

import { property } from "lodash";
import { postService } from "../../../services/client-api/postService";
import Offers from "./Offers";

const PropertiesTable = () => {

    const [tableProperties, settableProperties] = useState([]);
    const [reloadData, setReloadData] = useState(false);

    const fetchtableProperties = async () => {
        let fetchedtableProperties = await postService.getPendingStatus();
        settableProperties(fetchedtableProperties);
        console.log(fetchedtableProperties);
    }
    useEffect(() => {
        fetchtableProperties();

    }, [reloadData])

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

        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="p-4 bg-white">
                <h1 className="text-2xl font-semibold text-gray-900">All Properties</h1>
            </div>
            <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-700 text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                    Property Id
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                    Properties
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                    Location
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                    Owner
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                    Property Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                    Action
                                </th>
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
                                    {property.status != 'PENDING' &&(
                                        <button value={property.id} onClick={(event) => handleProperty(event.target.value)}>Delete </button>)}
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
        </div>




    )
}
export default PropertiesTable;