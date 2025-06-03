const emergencyHandler = require('./emergencyHandler')
const { officersStoreHandler } = require('../services/officers_stores');

function socketConnection(io) {
    officersStoreHandler(io);
    io.on("connection",(socket)=>{
        console.log(`connection id:${socket.id}`);
        emergencyHandler(socket, io);
  
    });
};

module.exports = socketConnection;