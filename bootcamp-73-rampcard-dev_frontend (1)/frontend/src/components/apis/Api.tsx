import axios from "axios";

export const fetchAllRampCardRows = async () : Promise<any> =>{
    try{
        const response = await axios.get("http://192.168.1.25:8080/rampCards");
        return response.data;
    }
    catch(error){
        throw error;
    }
}

export const fetchAllDraftRows = async () : Promise<any> =>{
    try{
        const response = await axios.get("http://192.168.1.25:8080/drafts");
        return response.data;
    }
    catch(error){
        throw error;
    }
}
