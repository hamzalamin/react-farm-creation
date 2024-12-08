import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

export const createFarm = async (farmData) => {
    try {
        const response = await axios.post(`${BASE_URL}/farms`, farmData);
        
        return response.data; 
    } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
            const errorMessages = error.response.data.errors.map(err => err.defaultMessage);
            throw new Error(errorMessages.join(", "));
        } else {
            throw new Error('An unexpected error occurred.');
        }
    }
}