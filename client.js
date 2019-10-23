/**
 * Establishes connection with the game server
 */
const net = require('net');
const connect = function() {
  console.log('Connecting ...');
  const conn = net.createConnection({
    host: '172.46.2.204',
    port: 50541
  });

  //send name on connect
  conn.on('connect', () => {
    console.log('connection successfully established');
    conn.write('Name: YYZ');
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  //handle incoming data
  conn.on('data', (data) => console.log(data));

  //return server connection
  return conn;
};

module.exports = {connect};