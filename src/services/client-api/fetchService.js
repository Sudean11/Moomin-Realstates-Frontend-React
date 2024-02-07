import { URL_FEATURED_PROPERTY,URL_All_PROPERTY,URL_LATEST_PROPERTY } from "../../config/url";
import { apiService } from "../apiService"

const featuredProperties = async () => { 
    try{
        let result = await apiService.get(URL_FEATURED_PROPERTY);
        return result;
    }catch(error){
        return error;
    }
}
const allProperties = async () => { 
    try{
        let result = await apiService.get(URL_All_PROPERTY);
        return result;
    }catch(error){
        return error;
    }
}
const latestProperties = async () => { 
    try{
        let result = await apiService.get(URL_LATEST_PROPERTY);
        return result;
    }catch(error){
        return error;
    }
}

const filteredProperties = async (url) =>{
    try{
        let result = await apiService.get(url);
        return result;
    }catch(error){
        return error;
    }
}



export const fetchService = {
    featuredProperties,allProperties,latestProperties,filteredProperties
}