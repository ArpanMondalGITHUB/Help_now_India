import apiClient from './api'

export const sendOTP = async (phonenumber) => {
    try {
        const response = await apiClient.post('/api/auth/send-otp',{phonenumber});
        return response.data;
    } catch (error) {
        console.error('Send OTP Error from frontend:', error.response?.data || error.message);
        throw error;
    }
};

export const verifyOTP = async (phonenumber,otp) => {
    try {
        const response = await apiClient.post('/api/auth/verify-otp',{phonenumber,otp});
        return response.data;
    } catch (error) {
        console.error('verify OTP Error from frontend:', error.response?.data || error.message);
        throw error;
    }
};

export default {sendOTP,verifyOTP}