import React from 'react'
import { fetchService } from "../../../services/client-api/fetchService";
import { useState, useEffect } from "react";

const SavedList = () => {

    const [savedlist, setsavedlist] = useState([]);


    const fetchSavedList = async () => {
        let fetchedsavedList = await fetchService.savedList();
        setsavedlist(fetchedsavedList);
        console.log(fetchedsavedList);
    }

    useEffect(() => {
        fetchSavedList();
    }, []);

    return (
        <div>
            <div className='main-title mb-4'>
                <h1 className="text-2xl font-bold">Saved List</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-400 w-full">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-2 px-4">Properties</th>
                            <th className="py-2 px-4">Location</th>
                            <th className="py-2 px-4">Owner</th>
                            <th className="py-2 px-4">Property Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {savedlist.map((property) => (
                            <tr key={property.id} className="border-t border-gray-400">
                                <td className="py-2 px-4">{property.id}</td>
                                <td className="py-2 px-4">{property.price}</td>
                                <td className="py-2 px-4">{property.area}</td>
                                <td className="py-2 px-4">{property.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default SavedList;