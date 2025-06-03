
// FOR NOW THIS UNTRACKED MAKE SURE TRACK THIS PAGE WHEN COMPLETE THE PROJECT //

import axios from 'axios';
import Constants from 'expo-constants';

const baseURL = "http://192.168.172.243:8000";

const apiClient = axios.create({
    baseURL,  
    headers:{
        'Content-Type': 'application/json',
    },
    
});
export default apiClient;
