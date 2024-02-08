import { URL_GET_OFFERS_FOR_CUSTOMER,URL_FEATURED_PROPERTY,URL_All_PROPERTY,URL_LATEST_PROPERTY, URL_LIST_OFFERS, URL_TABLE_PROPERTIES,URL_GET_OFFERS } from "../../config/url";
import { apiService } from "../apiService"
import { authService } from "./authService";

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

const propertiesTable = async() => {
    try{
        let result = await apiService.get(URL_TABLE_PROPERTIES);
        return result;
    }catch(error){
        return error;
    }
}
const offersTable = async() => {
    const email=authService.getEmailFromLocalStorage();
    try{
        let result = await apiService.get(`api/v1/offer?email=${email}`);
        return result;
    }catch(error){
        return error;
    }
}
const offersTableForCustomer = async() => {
    const email=authService.getEmailFromLocalStorage();
try{
    let result = await apiService.get(`/api/v1/offer?email=${email}&customer=true`);
    return result;
}catch(error){
    return error;
}
}
const getPropertyDetailsById = async(id) => {
    try{
        let result = await apiService.get(`/api/v1/property/:id`);
        return result;
    }catch(error){
        return error;
    }
}



export const fetchService = {
    featuredProperties,allProperties,latestProperties,filteredProperties, propertiesTable,offersTable,offersTableForCustomer,getPropertyDetailsById
}