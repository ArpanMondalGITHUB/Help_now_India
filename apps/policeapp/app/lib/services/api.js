import axios from 'axios';
import Constants from 'expo-constants';

const baseURL = "http://192.168.172.243:8000";

const policeApiClient = axios.create({
    baseURL,  
    headers:{
        'Content-Type': 'application/json',
    },
    
});
export default policeApiClient;
