import policeApiClient from "./api";

export const Login = async(email,password) => {
    try {
        const response = await policeApiClient.post('/api/police-auth/login',{email,password,});
        return response.data;
    } catch (error) {
        console.error('login from is giving error:', error?.response?.data || error.message || error);
        throw new Error("login from is giving error");
    }
};

export default Login;