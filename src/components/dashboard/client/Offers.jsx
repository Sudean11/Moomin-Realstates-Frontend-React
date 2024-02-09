import { useEffect, useState } from "react";
import { fetchService } from "../../../services/client-api/fetchService";
import { postService } from "../../../services/client-api/postService";


const Offers = () => {

    const [listOffers, setlistOffers] = useState([]);
    useEffect(() => { fetchOfferProperties() }, [])

    const fetchOfferProperties = async () => {
        let offersProperties = await fetchService.offersTable();
        setlistOffers(offersProperties);
        console.log(offersProperties);
    }
    const [reloadData, setReloadData] = useState(false);
    debugger;

    const handlePropertyAccept = async (id) => {

        try {
            const val = await postService.acceptUserForOwner(id);
            if (val.data) {
                console.log(val);
                setReloadData(true);
            }
            else {
                alert("There is a pending offer");

            }

        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    }


    const handlePropertyReject = async (id) => {
        try {
            const val = await postService.rejectOfferForOwner(id);
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
        <div className='border-none p-4 shadow-md rounded-md w-full'>
        <div className='main-title'>
            <h1 className='text-xl font-bold mb-4'>All Offers</h1>
        </div>
        <div className="overflow-x-auto overflow-y-auto">
            <table className="table-auto border-collapse w-full">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="px-4 py-2">User</th>
                        <th className="px-4 py-2">Properties</th>
                        <th className="px-4 py-2">Message</th>
                        <th className="px-4 py-2">Offered Price</th>
                        <th className="px-4 py-2">Seller Status</th>
                        <th className="px-4 py-2">Buyer Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {listOffers.map((offer) => (
                        <tr key={offer.id} className="text-center">
                            <td className="px-4 py-2">{offer.user?.email}</td>
                            <td className="px-4 py-2">{offer.property?.name}</td>
                            <td className="px-4 py-2">{offer.offerMessage}</td>
                            <td className="px-4 py-2">{offer.property?.price}</td>
                            <td className="px-4 py-2">{offer.sellerStatus}</td>
                            <td className="px-4 py-2">{offer.buyerStatus}</td>
                            {offer.sellerStatus === null && (
                                <td className="px-4 py-2">
                                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2" value={offer.id} onClick={() => handlePropertyAccept(offer.id)}>Accept</button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" value={offer.id} onClick={() => handlePropertyReject(offer.id)}>Reject</button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    

    )




}
export default Offers;