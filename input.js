/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const commands = {
  97: 'Move: left',
  100: 'Move: right',
  115: 'Move: down',
  119: 'Move: up'
};

const handleUserInput = function(data, conn) {

  const commandKey = data.charCodeAt();
  //send command to server if it is legal
  if (commands[commandKey]) conn.write(commands[commandKey]);

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