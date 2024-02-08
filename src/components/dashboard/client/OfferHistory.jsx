import React, { useEffect, useState } from 'react'
import { fetchService } from '../../../services/client-api/fetchService';

const OfferHistory = () => {

  const [offerhistory, setofferHistory]= useState([]);

  const fetchOffersHistory = async () => {
    let fetchedOfffersHistory = await fetchService.offersHistory();
    setofferHistory(fetchedOfffersHistory);
    console.log(fetchedOfffersHistory);
  }

  useEffect( ()=>{
    fetchOffersHistory();
  }, []);

  

  return (
    <div>
            <div className='main-title'>
                <h1>Offers History</h1>
            </div>
            <div className="table table-bordered">
                <table className="table table-hover ">
                    <thead className="table-dark ">
                        <tr>
                            <th scope="col">Properties</th>
                            <th scope="col">Email owner</th>
                            <th scope="col">buyer Status</th>
                            <th scope="col">seller Status</th>
                            <th scope="col">property Status</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {offerhistory.map((offer) => (
                            <tr key={offer.id}>
                                <td>{offer.property.name}</td>
                                <td>{offer.user.email}</td>
                                <td>{offer.buyerStatus}</td>
                                <td>{offer.sellerStatus}</td>
                                <td>{offer.property.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          
        </div>
  )
}

export default OfferHistory