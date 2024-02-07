import { useState } from "react";
import { fetchService } from "../../services/client-api/fetchService";

const Offers =() => {

    const [listOffers, setlistOffers]= useState([]);

    const fetchlistOffers=async()=>{
        let fetchedOffer = await fetchService.listOffers();
        setlistOffers(fetchedOffer);
        console.log(fetchedOffer);
    }

    


}
export default Offers;