import * as Location from 'expo-location';
import socket from './socket_api';
import { useAuth } from '../context/auth_context';

export const useHelpRequest = () => {
  const { user } = useAuth();

  const sendHelpRequestAndGetCurrentPosition = async (): Promise<void> => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      console.log('asking permisssion');
      if (status !== 'granted') {
        throw new Error('Permission to access location was denied.from service code');
      }

      const location = await Location.getCurrentPositionAsync({});

      if (!user?._id) {
        throw new Error('User ID is missing');
      }

      if (!socket.connected) {
        console.log('socket not connected')
        throw new Error('Socket not connected');
      }

      const payload = {
        phonenumber:user.phonenumber,
        userid: user._id,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      socket.emit('send_help', payload);
    } catch (error) {
      console.error('Help request error:', error);
      throw error;
    }
  };

  return { sendHelpRequestAndGetCurrentPosition };
};

export default useHelpRequest;