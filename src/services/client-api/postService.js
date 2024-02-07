import { URL_LOGIN } from "../../config/url";
import { apiService } from "../apiService";

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

export const postService = {
  login,
};
