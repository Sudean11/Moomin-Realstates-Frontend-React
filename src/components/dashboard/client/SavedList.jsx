import React from 'react'
import { fetchService } from "../../../services/client-api/fetchService";
import { useState,useEffect } from "react";

const SavedList = () => {
 
  const [savedlist, setsavedlist] =useState([]);


  const fetchSavedList = async()=> {
    let fetchedsavedList= await fetchService.savedList();
    setsavedlist(fetchedsavedList);
    console.log(fetchedsavedList);
  }

  useEffect(()=>{
    fetchSavedList();
},[]);



  
  return (
    <div>
            <div className='main-title'>
                <h1>Saved List</h1>
            </div>
            <div className="table table-bordered">
                <table className="table table-hover ">
                    <thead className="table-dark ">
                        <tr>
                            <th scope="col">Properties</th>
                            <th scope="col">Location</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Property status</th>

                            
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {savedlist.map((property) => (
                            <tr key={property.id}>
                                <td>{property.name}</td>
                                <td>{property.price}</td>
                                <td>{property.area}</td>
                                <td>{property.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          
        </div>
  )
}

export default SavedList;