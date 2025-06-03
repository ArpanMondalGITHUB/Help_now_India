import * as Location from "expo-location";
import socket from './police_socket_api';
import { useAuth } from '../context/police_auth_context';
import { Alert } from "react-native";

export const usesendLocationToBackend = () => {
    const {user} = useAuth();
    // console.log('user:',user);
    const sendLocationToBackend = async(): Promise<void> => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                alert("Location permission not granted");
                return;
            }
            
            const location = await Location.getCurrentPositionAsync({});

            const payload = {
                officerId: user && user.user ? user.user._id : undefined,
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };
            if (!payload.officerId) {
                console.warn('Officer ID is undefined! Check user object:', user);
            }
            
            socket.emit("register_officer", payload);
            Alert.alert('location send successfully');
            console.log('emited officer data backend to store it:', payload);

        } catch (error) {
            console.error('Help request error:', error);
            throw error;
        }
    };
    return { sendLocationToBackend };
};
export default usesendLocationToBackend;