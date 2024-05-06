import Axios from "axios";
import ErrorHandler from "@/services/error-handler.js";

function onTaxiResponse(res, ctx) {
  const response = res.response || res;

  if (!response) {
    ctx.$router.push("/500");
    return Promise.reject("Something Went Wrong!");
  }

  if (response.status >= 200 && response.status < 300) return response.data;
  return Promise.reject(ErrorHandler(response, { ...ctx }));
}

function onFoodResponse(res, ctx) {
  const response = res.response || res;

  if (!response) {
    ctx.$router.push("/500");
    return Promise.reject("Something Went Wrong!");
  }

  if (response.status >= 200 && response.status < 300 && response.data?.status) return response.data;
  return Promise.reject(ErrorHandler(response, { ...ctx }));
}

export default {
  install(app) {
    const ctx = app.config.globalProperties;

    ctx.$taxiApi = Axios.create({
      baseURL: ctx.$config.apiUrl + "/taxi",
      headers: {
        common: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json"
        }
      }
    });

    ctx.$taxiApi.interceptors.response.use(
      (response) => onTaxiResponse(response, ctx),
      (response) => onTaxiResponse(response, ctx)
    );

    ctx.$foodApi = Axios.create({
      baseURL: ctx.$config.apiUrl + "/food",
      headers: {
        common: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json"
        }
      }
    });

    ctx.$foodApi.interceptors.response.use(
      (response) => onFoodResponse(response, ctx),
      (response) => onFoodResponse(response, ctx)
    );
  }
};
