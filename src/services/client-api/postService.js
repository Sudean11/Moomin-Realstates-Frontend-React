import { URL_LOGIN } from "../../config/url";
import { apiService } from "../apiService";

const login = async (user) => { 
    try{
        let result = await apiService.post(URL_LOGIN, user);
        localStorage.setItem('myData', result.data.accessToken);
        return result;
    }catch(error){
        return error;
    }
}

export const postService = {
    login
}