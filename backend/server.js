require('dotenv').config();
const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');
const http = require('http');
const connectDB = require('./config/mongo_db_config');
const user_auth_routes = require('./routes/user_auth_routes');
const police_auth_routes = require('./routes/police_auth_routes');
const socketHandler = require('./sockets');
const adminroutes = require('./routes/admin_routes')
const app = express();
const server = http.createServer(app);

connectDB();

const io = socketIO(server,{
    cors:{
        origin: "*", // In production, specify actual origins
        methods: ["GET", "POST"],
        credentials: true
    }
});

socketHandler(io);

// Middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/police-auth',police_auth_routes);
app.use('/api/admin',adminroutes);
app.use('/api/auth', user_auth_routes)

app.get('/',(req,res)=>{
    res.send('hello world');
});


server.listen(process.env.port,(req,res) =>{
    console.log(`server is running : ${process.env.port}`)
});
