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

    const handleProperty = async (id) => {
        
        try {
            const val = await postService.acceptUserForOwner(id);
            if(val.data)
            {
                console.log(val);
                setReloadData(true);
            }
            else
            {
                alert("There is a pending offer");

            }
            
        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    }
    return (
        <div>
            <div className='main-title'>
                <h1 >latest for sale</h1>
            </div>
            <div  className="table table-bordered">
                <table className="table table-hover ">
                    <thead class="table-dark "> 
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">Properties</th>
                            <th scope="col">Message</th>
                            <th scope="col">Offered Price</th>
                            <th scope="col">SellerStatus</th>
                            <th scope="col">BuyerStatus</th>
                            <th scope="col">Property Name</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {listOffers.map((offer) => (
                            <tr key={offer.id}>
                                <td>{offer.user?.email}</td>
                                <td>{offer.property?.name}</td>
                                <td>{offer.property?.price}</td>
                                <td>{offer.sellerStatus}</td>
                                <td>{offer.buyerStatus}</td>
                                <td>{offer.property.name}</td>
                                <td><button value={offer.id} onClick={(event) => handleProperty(event.target.value)}>Accept</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )




}
export default Offers;