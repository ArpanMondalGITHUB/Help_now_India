const calculateDistance = require('../utils/haversine');
const { onlineOfficers } = require('../services/officers_stores');
module.exports = (socket, io) => {
  socket.on('send_help', async (userLocation) => {
    console.log('Help request received:', userLocation);

    let nearestOfficer = null;
    let minDistance = Infinity;

    console.log('onlineOfficers:', onlineOfficers, 'type:', typeof onlineOfficers, 'isMap:', onlineOfficers instanceof Map);
    onlineOfficers.forEach((officer,officerId) => {
      const officerLocation = { latitude: officer.latitude, longitude: officer.longitude };
      const dist = calculateDistance(userLocation, officerLocation);
      if (dist < minDistance) {
        minDistance = dist;
        nearestOfficer = { ...officer,officerId, distance: dist };
      }
    });

    if (nearestOfficer) {
      // Send alert to that officer
      io.to(nearestOfficer.socketId).emit('receive_alert', {
        userLocation,
        distance: minDistance
      });
      
      // Send confirmation back to user
      socket.emit('help_request_sent', {
        message: 'Help request sent to nearest officer',
        officerId: nearestOfficer.officerId,
        distance: minDistance
      });
    } else {
      console.log('No officers available');
      socket.emit('no_officers_available', {
        message: 'No officers are currently available'
      });
      return;
    };

    socket.on('disconnect', () => {
      console.log('Socket disconnected:', socket.id);
      removeOfficer(socket.id);
    });
  });
  return;
};
