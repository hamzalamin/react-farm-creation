import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

export const createFarm = async (farmData) => {
    try {
        const response = await axios.post(`${BASE_URL}/farms`, farmData);
        
        return response.data; 
    } catch (error){
        console.error('Error creating farm:', error);
        throw error;
    }
}