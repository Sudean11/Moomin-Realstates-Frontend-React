import { useEffect, useState } from "react";
import { fetchService } from "../../../services/client-api/fetchService";

const Offers = () => {

    const [listOffers, setlistOffers] = useState([]);
    useEffect(() => { fetchlistOffers() }, [])

    const fetchlistOffers = async () => {
        let fetchedOffer = await fetchService.listOffers();
        setlistOffers(fetchedOffer);
        console.log(fetchedOffer);
    }

    return (
        <div>
            <div className='main-title'>
                <h1 >All Offers</h1>
            </div>
            <div  className="table table-bordered">
                <table className="table table-hover ">
                    <thead class="table-dark "> 
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">Properties</th>
                            <th scope="col">Message</th>
                            <th scope="col">Offered Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {listOffers.map((offer) => (
                            <tr key={offer.id}>
                                <td>{offer.user?.email}</td>
                                <td>{offer.property?.name}</td>
                                <td>{offer.messages?.[0]?.message}</td>
                                <td>{offer.property?.price}</td>
                                <td>{offer.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )




}
export default Offers;