const onlineOfficers = new Map();

function officersStoreHandler(io) {
  io.on('connection', (socket) => {
    console.log(`A police user connected: ${socket.id}`);

    // Listen for officer registration/location update
    socket.on('register_officer', (data) => {
      const { officerId, latitude, longitude } = data;
      if (!officerId) {
        console.error("Received register_officer event without officerId from socket:", socket.id);
        return;
      }
      console.log(`Registering/updating officer: ${officerId} at [${latitude}, ${longitude}] (Socket ID: ${socket.id})`);
      onlineOfficers.set(officerId, {
        latitude,
        longitude,
        socketId: socket.id,
        timestamp: Date.now(),
      });
      console.log('Current online officers:', Array.from(onlineOfficers.entries()));
      socket.emit('registration_success', {
        message: 'Officer registered successfully',
        officerId,
        location: { latitude, longitude }
      });
      
    });
  });
}

module.exports = {
  officersStoreHandler,
  onlineOfficers
};