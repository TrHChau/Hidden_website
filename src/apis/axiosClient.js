import axios from "axios";
import Cookies from "js-cookie";
const axiosClient = axios.create({
  baseURL: "https://be-project-reactjs.vercel.app/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosClient.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);
axiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originnaRequest = err.config;
    if (err.response.status === 401 && !originnaRequest._retry) {
      originnaRequest._retry = true;
      const refreshToken = Cookies.get("refreshToken");
      if (!refreshToken) return Promise.reject(err);
      try {
        const res = await axiosClient.post("/refesh-token", {
          token: refreshToken,
        });
        console.log(res);
        const newAccessToken = res.data.accessToken;
        Cookies.set("token", newAccessToken);
        originnaRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosClient(originnaRequest);
      } catch (error) {
        Cookies.remove("token");
        Cookies.remove("refreshToken");
        return Promise.reject(error);
      }
    }
  },
);
export default axiosClient;
