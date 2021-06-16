import Axios from "axios";

export const ApiInstance = Axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
});
