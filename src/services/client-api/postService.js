import { URL_LOGIN } from "../../config/url";
import { apiService } from "../apiService";
import {} from "../../config/url";
import {
  URL_SEND_OFFER_PRICE,
  URL_TABLE_PENDING,
  URL_TABLE_ACCEPT,
} from "../../config/url";

const login = async (user) => {
  try {
    let result = await apiService.post(URL_LOGIN, user);
    localStorage.setItem("auth", result.data.accessToken);
    const [header, payloadBase64, signature] =
      result.data.accessToken.split(".");
    const decodedPayload = atob(payloadBase64);
    const payload = JSON.parse(decodedPayload);
    localStorage.setItem("email", payload.sub);
    console.log(payload.iat);
    return result;
  } catch (error) {
    return error;
  }
};

const postOfferMade = async (requestBody) => {
  try {
    let result = await apiService.post(URL_SEND_OFFER_PRICE, requestBody);
    return result;
  } catch (error) {
    return error;
  }
};
const getPendingStatus = async () => {
  try {
    let result = await apiService.get(URL_TABLE_PENDING);
    return result;
  } catch (error) {
    return error;
  }
};
const getPostTableAccept = async (id) => {
  try {
    let result = await apiService.post(`/api/v1/property/${id}/delete`);
    return result;
  } catch (error) {
    return error;
  }
};

const createUser = async (user) => {
  try {
    let result = await apiService.post(`/api/v1/users`, user);
    return result;
  } catch (error) {
    return error;
  }
};

export const postService = {
  login,
  postOfferMade,
  getPendingStatus,
  getPostTableAccept,
  createUser
};
