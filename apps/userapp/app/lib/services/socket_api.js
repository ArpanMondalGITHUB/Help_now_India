import {io} from "socket.io-client";
import Constants from 'expo-constants';

const socketUrl = Constants.expoConfig.extra.API_URL;

const socket = io(socketUrl,{
    transports:['websocket'],
    autoConnect:true
});

export default socket;