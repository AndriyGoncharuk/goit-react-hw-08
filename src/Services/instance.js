import axios from "axios";

// export const instance = axios.create({
//   baseURL: "https://connections-api.goit.global/",
// });

// export const setAuthHeaders = (token) => {
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const clearAuthHeader = () => {
//   instance.defaults.headers.common.Authorization = "";
// };

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};
