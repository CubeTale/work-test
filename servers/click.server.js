// servers/click.server.js
const net = require('net');
const { handleClick } = require('../services/click.service');

const server = net.createServer((socket) => {
  socket.on('data', async (data) => {
    try {
      const { id, x, y, timestamp } = JSON.parse(data.toString());
      await handleClick(id, x, y, timestamp);
      socket.write('OK');
    } catch (e) {
      socket.write('FAIL');
    }
  });
});

server.listen(4000, () => {
  console.log('Click TCP server running on port 4000');
});
