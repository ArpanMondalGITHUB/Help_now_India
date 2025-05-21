require('dotenv').config();
const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');
const http = require('http');
const port = process.env.port || 8000;

const app = express();
const server = http.createServer(app);

const io = socketIO(server,{
    cors:{
        origin: "*", // In production, specify actual origins
        methods: ["GET", "POST"],
        credentials: true
    }
});

// Middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
});


server.listen(port,(req,res) =>{
    console.log(`server is running : ${port}`)
});
