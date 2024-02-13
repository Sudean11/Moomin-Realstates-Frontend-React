import React, { useEffect, useState } from "react";
import { fetchService } from "../../../services/client-api/fetchService";
import { postService } from "../../../services/client-api/postService";
import { useDispatch, useSelector } from "react-redux";
import { toggleMessageUserFormVisibility, uiStore } from "../../../features/uiSlice";
import MessageBox from "../owner/MessageBox";

const CustomerOffers = () => {
    const [listOffers, setListOffers] = useState([]);
    const [reloadData, setReloadData] = useState(true);
    const [offerId, setOfferId] = useState(0);
    const { isMessageUserFormVisible } = useSelector(uiStore);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchOfferProperties();
    }, [reloadData]);

    const fetchOfferProperties = async () => {
        try {
            const offersProperties = await fetchService.offersTableForCustomer();
            setListOffers(offersProperties);
        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    };

    const handleProperty = async (id) => {
        try {
            debugger;
            const val = await postService.acceptOfferForCustomer(id);
            if (val.data) {
                setReloadData(prevState => !prevState);
            } else {
                alert("There is a pending offer");
            }
        } catch (error) {
            console.error("Error accepting offer:", error);
        }
    };
    const handlePropertyReject = async (id) => {
        try {
            const val = await postService.rejectOfferForCustomer(id);
            if (val.data) {
                setReloadData(prevState => !prevState);
            } else {
                alert("There is a pending offer");
            }
        } catch (error) {
            console.error("Error accepting offer:", error);
        }
    };
    const message = (id) => {
        setOfferId(id);
        debugger;
        dispatch(toggleMessageUserFormVisibility());

    }

    return (
        <div className="container mx-auto px-4">
            <div className="bg-gray-100 py-4">
                <div className="main-title text-2xl font-semibold mb-4 text-center">Offers List</div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto bg-white border border-gray-200 rounded-lg shadow">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-6 py-3">Offer Id</th>
                                <th className="px-6 py-3">Properties</th>
                                <th className="px-6 py-3">Message</th>
                                <th className="px-6 py-3">Offered Price</th>
                                <th className="px-6 py-3">Seller Status</th>
                                <th className="px-6 py-3">Buyer Status</th>
                                <th className="px-6 py-3">Property Status</th>
                                <th className="px-6 py-3">Actions</th>
                                <th className="px-6 py-3">Message</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {listOffers.map((offer) => (
                                <tr key={offer.id}>
                                    <td className="px-6 py-4">{offer.id}</td>
                                    <td className="px-6 py-4">{offer.property?.name}</td>
                                    <td className="px-6 py-4">{offer.offerMessage}</td>
                                    <td className="px-6 py-4">{offer.property?.price}</td>
                                    <td className="px-6 py-4">{offer.sellerStatus}</td>
                                    <td className="px-6 py-4">{offer.buyerStatus}</td>
                                    <td className="px-6 py-4">{offer.property.status}</td>
                                    <td className="px-6 py-4">
                                        {offer.sellerStatus === "ACCEPTED" && offer.buyerStatus === null && (
                                            <div>
                                                <button className="mr-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleProperty(offer.id)}>Accept</button>
                                                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handlePropertyReject(offer.id)}>Reject</button>
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => message(offer.id)}>Message</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {isMessageUserFormVisible && <MessageBox offerId={offerId} />}
            </div>
        </div>

    );
};

export default CustomerOffers;
