/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const {COMMANDS} = require('./constants');

const handleUserInput = function(data, conn) {

  const commandKey = data.charCodeAt();
  //send command to server if it is legal
  if (COMMANDS[commandKey]) conn.write(COMMANDS[commandKey]);

  if (data === '\u0003') {
    process.exit();
  }
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (data) => handleUserInput(data, conn));

  return stdin;
};

module.exports = {setupInput};