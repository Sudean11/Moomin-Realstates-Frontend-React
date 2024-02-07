import { URL_FEATURED_PROPERTY } from "../../config/url";
import { apiService } from "../apiService"

const featuredProperties = async () => { 
    try{
        let result = await apiService.get(URL_FEATURED_PROPERTY);
        return result;
    }catch(error){
        return error;
    }
}


export const fetchService = {
    featuredProperties
}