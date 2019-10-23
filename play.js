const net = require('net');
const {connect} = require('./client');
const {setupInput} = require('./input');

connect();
// const conn = connect();

setupInput();
// const stdin = setupInput();

