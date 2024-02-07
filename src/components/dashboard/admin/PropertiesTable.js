import { useState } from "react";
import { fetchService } from "../../../services/client-api/fetchService";
import { property } from "lodash";

const PropertiesTable = () => {

    const [tableProperties, settableProperties] = useState([]);

    const fetchtableProperties = async () => {
        let fetchedtableProperties = await fetchService.propertiesTable();
        settableProperties(fetchedtableProperties);
        console.log(fetchedtableProperties);
    }

    return (

        <div>
            <div className='main-title'>
                <h1>All Properties</h1>
            </div>
            <div className="table table-bordered">
                <table className="table table-hover ">
                    <thead class="table-dark ">
                        <tr>
                            <th scope="col">Properties</th>
                            <th scope="col">Location</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {tableProperties.map((property) => (
                            <tr key={property.id}>
                                <td>{property.property}</td>
                                <td>{property.location}</td>
                                <td>{property.owner}</td>
                                <td>{property.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    )
}
export default PropertiesTable;