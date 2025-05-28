
function socketConnection(io) {
    io.on("connection",(socket)=>{
        console.log(`connection id:${socket.id}`);
    });
};



module.exports = socketConnection;