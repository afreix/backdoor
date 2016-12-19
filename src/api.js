// Imports
import React from 'react';

const SPOTIFY_API = 'https://api.spotify.com';
const NODE_SERVER_URL = 'http://192.168.1.15:3000';

var status = function(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

var json = function(response) {
  return response.json()
}

let fetchHelper = function(url, method = 'GET') {
  return fetch(url, {
      method: method
    })
    .then(status)  
    .then(json)  
    .then((data) => {  
      console.log('Request succeeded with JSON response', data);  
      return data;
    }).catch((error) => {  
      console.log('Request failed', error);
      return {
        success: 'false',
        message: error.message,
      }  
    });
}

// Export function
export function login(username, password) {
  let url = `${NODE_SERVER_URL}/login`; //?u=${username}&p=${password}`;

  console.log("Login url: " + url);

  return fetchHelper(url);
}












