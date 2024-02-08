import {
  URL_FEATURED_PROPERTY,
  URL_GET_OFFERS_FOR_CUSTOMER,
  URL_All_PROPERTY,
  URL_LATEST_PROPERTY,
  URL_GET_OFFERS,
  URL_LIST_OFFERS,
  URL_TABLE_PROPERTIES,
  URL_USER_LIST,
  URL_OFFERS_HISTORY,
  URL_USER_MESSAGE,
  URL_SAVED_LIST
} from "../../config/url";
import { apiService } from "../apiService";
import { authService } from "./authService";

const featuredProperties = async () => {
  try {
    let result = await apiService.get(URL_FEATURED_PROPERTY);
    return result;
  } catch (error) {
    return error;
  }
};
const allProperties = async () => {
  try {
    let result = await apiService.get(URL_All_PROPERTY);
    return result;
  } catch (error) {
    return error;
  }
};
const latestProperties = async () => {
  try {
    let result = await apiService.get(URL_LATEST_PROPERTY);
    return result;
  } catch (error) {
    return error;
  }
};

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
    
    try{
        const email= await authService.getEmailFromLocalStorage();
        let result = await apiService.get(`api/v1/offer?email=${email}`);
        return result;
    }catch(error){
        return error;
    }
}
const offersTableForCustomer = async() => {
   
try{
    const email= await authService.getEmailFromLocalStorage();
    let result = await apiService.get(`/api/v1/offer?email=${email}&customer=true`);
    return result;
}catch(error){
    return error;
}
}
const getPropertyDetailsById = async(id) => {
    try{
        let result = await apiService.get(`/api/v1/property/${id}`);
        return result;
    }catch(error){
        return error;
    }
}


const userList = async() => {
    try{
        let result = await apiService.get(URL_USER_LIST);
        return result;
    }catch(error){
        return error;
    }
}



const listOffers = async () => {
  try {
    let result = await apiService.get(URL_LIST_OFFERS);
    return result;
  } catch (error) {
    return error;
  }
};

const offersHistory = async () => {
    try {
   const email= await authService.getEmailFromLocalStorage();
        let result = await apiService.get(`/api/v1/offer/history?email=${email}`);
        return result;
    } catch (error) {
        return error;
    }
};

const usermessage = async () => {
  try {
    const email= await authService.getEmailFromLocalStorage();
    let result = await apiService.get(`/api/v1/message?email=${email}`);
    return result;
  }catch (error) {
    return error;
  }
};

const savedList = async () => {
  try {
    let result = await apiService.get(URL_SAVED_LIST);
    return result;
  }catch (error) {
    return error;
  }
};



export const fetchService = {
  featuredProperties,
  allProperties,
  latestProperties,
  listOffers,
  filteredProperties,
  propertiesTable,offersTable,offersTableForCustomer,getPropertyDetailsById,
  offersHistory,usermessage,userList,savedList
};

