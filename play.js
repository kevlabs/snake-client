const net = require('net');
const {connect} = require('./client');
const {setupInput} = require('./input');

const conn = connect();

setupInput(conn);
// const stdin = setupInput();

