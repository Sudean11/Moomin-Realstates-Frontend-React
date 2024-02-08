import React, { useEffect, useState } from "react";
import { fetchService } from "../../../services/client-api/fetchService";
import { postService } from "../../../services/client-api/postService";

const CustomerOffers = () => {
    const [listOffers, setListOffers] = useState([]);
    const [reloadData, setReloadData] = useState(true);

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

    return (
        <div>
            <div className="main-title">
                <h1>Latest for sale</h1>
            </div>
            <div className="table table-bordered">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Properties</th>
                            <th scope="col">Message</th>
                            <th scope="col">Offered Price</th>
                            <th scope="col">Seller Status</th>
                            <th scope="col">Buyer Status</th>
                            <th scope="col">Property Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {listOffers.map((offer) => (
                            <tr key={offer.id}>
                                <td>{offer.property?.name}</td>
                                <td>{offer.offer_message}</td>
                                <td>{offer.property?.price}</td>
                                <td>{offer.sellerStatus}</td>
                                <td>{offer.buyerStatus}</td>
                                <td>{offer.property.status}</td>
                                <td>
                                    {offer.sellerStatus === "ACCEPTED" && offer.buyerStatus === null && (
                                        <div>
                                        <button value={offer.id} onClick={() => handleProperty(offer.id)}>Accept</button>
                                        <br/>
                                        <button value={offer.id} onClick={() => handlePropertyReject(offer.id)}>Reject</button></div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerOffers;
