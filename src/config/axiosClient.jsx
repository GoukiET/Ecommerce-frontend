import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://ecommerce-backend-z1xd.onrender.com"
});

export default axiosClient;