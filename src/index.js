/**
 * Buwlark JS
 *
 * Main entry point for library.
 * Provides sub-modules as properties of an object.
 */
require('es6-promise/auto');
const blockchain = require('./blockchain');
const rpc = require('./rpc');

module.exports = { blockchain, rpc };
