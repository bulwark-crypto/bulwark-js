/**
 * RPC
 *
 * Provide an interface to the network node.
 * Uses a 3rd party library, Axios, for making
 * the request to the node via HTTP.
 *
 * NOTE: Promise polyfill is required in index.js.
 */
const axios = require('axios');

/**
 * Make a call to the node using RPC via HTTP.
 * @param {String} method The RPC method name.
 * @param {Array} params A list of parameters.
 * @param {Object} config The configuration object that includes connection information.
 */
const call = (method, params, config) => {
  return new Promise((resolve, reject) => {
    // Method params validation.
    if (!method) {
      reject('Please provide a method name.');
    }
    if (!!params && !Array.isArray(params)) {
      reject('Params must be an array of values.');
    }
    if (!config || !config.host || !config.pass || !config.port || !config.user) {
      reject('Please provide a configuration object with: host, pass, port, user.');
    }

    // Setup post data for request.
    const postData = JSON.stringify({ method, params, id: '1' });

    // Make the request to the rpc client via http.
    // Return response to caller.
    axios({
      auth: {
        password: config.pass,
        username: config.user
      },
      baseURL: `http://${ config.host }:${ config.port }`,
      data: postData,
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      url: '/'
    })
    .then(res => resolve(res.data.result || res.data || res))
    .catch(err => reject(err.message || err));
  });
};

module.exports = { call };
