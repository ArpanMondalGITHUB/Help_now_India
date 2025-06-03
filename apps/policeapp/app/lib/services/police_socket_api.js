import {io} from "socket.io-client";
import Constants from 'expo-constants';

const socketUrl = "http://192.168.172.243:8000";

const socket = io(socketUrl,{
    transports:['websocket'],
    autoConnect:true
});

export default socket;