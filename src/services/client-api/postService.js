import {  } from "../../config/url";
import { URL_SEND_OFFER_PRICE } from "../../config/url";
import { apiService } from "../apiService"

const postOfferMade = async (requestBody) => {
    try{
        let result = await apiService.post(URL_SEND_OFFER_PRICE,requestBody);
        return result;
    }catch(error){
        return error;
    }
}



export const fpostService = {
    postOfferMade
}