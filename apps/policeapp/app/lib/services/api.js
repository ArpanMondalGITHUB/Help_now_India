import axios from 'axios';
import Constants from 'expo-constants';

const baseURL =   Constants.expoConfig?.extra?.API_URL ||
  Constants.manifest2?.extra?.API_URL;

  const policeApiClient = axios.create({
    baseURL:baseURL,  
    headers:{
        'Content-Type': 'application/json',
    },
    
});
export default policeApiClient;