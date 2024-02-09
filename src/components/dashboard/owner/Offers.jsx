import { useEffect, useState } from "react";
import { fetchService } from "../../../services/client-api/fetchService";
import { postService } from "../../../services/client-api/postService";


const Offers = () => {

    const [listOffers, setlistOffers] = useState([]);
    const [reloadData, setReloadData] = useState(false);

    useEffect(() => { fetchOfferProperties() }, [reloadData])

    const fetchOfferProperties = async () => {
        let offersProperties = await fetchService.offersTable();
        setlistOffers(offersProperties);
        console.log(offersProperties);
    }
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
        <div className="container mx-auto px-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="main-title text-2xl font-semibold mb-4">
                    <h1>All Offers</h1>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border border-gray-200 divide-y divide-gray-200">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-6 py-3">User</th>
                                <th className="px-6 py-3">Properties</th>
                                <th className="px-6 py-3">Message</th>
                                <th className="px-6 py-3">Offered Price</th>
                                <th className="px-6 py-3">Seller Status</th>
                                <th className="px-6 py-3">Buyer Status</th>
                                <th className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {listOffers.map((offer) => (
                                <tr key={offer.id}>
                                    <td className="px-6 py-4">{offer.user?.email}</td>
                                    <td className="px-6 py-4">{offer.property?.name}</td>
                                    <td className="px-6 py-4">{offer.offerMessage}</td>
                                    <td className="px-6 py-4">{offer.property?.price}</td>
                                    <td className={`px-6 py-4 ${offer.sellerStatus === 'REJECTED' ? 'text-red-500' : 'text-green-500'}`}>{offer.sellerStatus}</td>
                                    <td className={`px-6 py-4 ${ offer.buyerStatus === 'REJECTED' ? 'text-red-500' : 'text-green-500'}`}>{offer.buyerStatus}</td>

                                    <td className="px-6 py-4">
                                        {offer.sellerStatus === null && (
                                            <div>
                                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline" onClick={() => handlePropertyAccept(offer.id)}>Accept</button>
                                                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handlePropertyReject(offer.id)}>Reject</button>
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
export default Offers;