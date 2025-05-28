
function socketConnection(io) {
    io.on("connection",(socket)=>{
        console.log(`connection id:${socket.id}`);
    });
};

export default socketConnection;