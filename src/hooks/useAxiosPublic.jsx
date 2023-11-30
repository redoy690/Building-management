import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://y-rho-livid.vercel.app'

})

const UseAxiosPublic = () => {
    return axiosPublic
        
};

export default UseAxiosPublic;