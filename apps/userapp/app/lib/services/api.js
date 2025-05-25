
// FOR NOW THIS UNTRACKED MAKE SURE TRACK THIS PAGE WHEN COMPLETE THE PROJECT //

import axios from 'axios';
import Constants from 'expo-constants';

const baseURL = Constants.expoConfig.extra.API_URL;

const apiClient = axios.create({
    baseURL,  
    headers:{
        'Content-Type': 'application/json',
    },
    
});
export default apiClient;
