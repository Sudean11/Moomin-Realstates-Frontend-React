import React, { useEffect, useState } from 'react'
import { fetchService } from '../../../services/client-api/fetchService';

const OfferHistory = () => {

  const [offerhistory, setofferHistory] = useState([]);

  const fetchOffersHistory = async () => {
    let fetchedOfffersHistory = await fetchService.offersHistory();
    setofferHistory(fetchedOfffersHistory);
    console.log(fetchedOfffersHistory);
  }

  useEffect(() => {
    fetchOffersHistory();
  }, []);



  return (
    <div>
      <div className='main-title mb-4'>
        <h1 className="text-2xl font-bold">Offers History</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Properties</th>
              <th className="py-2 px-4">Email owner</th>
              <th className="py-2 px-4">Buyer Status</th>
              <th className="py-2 px-4">Seller Status</th>
              <th className="py-2 px-4">Property Status</th>
            </tr>
          </thead>
          <tbody>
            {offerhistory.map((offer) => (
              <tr key={offer.id} className="border-t border-gray-400">
                <td className="py-2 px-4">{offer.property.name}</td>
                <td className="py-2 px-4">{offer.user.email}</td>
                
                <td className={`px-4 py-2 ${offer.buyerStatus === 'REJECTED' ? 'text-red-500' : 'text-green-500'}`}>{offer.buyerStatus}</td>
                <td className={`px-4 py-2 ${offer.sellerStatus === 'REJECTED' ? 'text-red-500' : 'text-green-500'}`}>{offer.sellerStatus}</td>
                <td className="py-2 px-4">{offer.property.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default OfferHistory