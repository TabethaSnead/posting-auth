/* Imports */

import { checkAuth, logout } from './fetch-utils.js';

/* Get DOM Elements */
const loginButton = document.getElementById('login-button');
const createButton = document.getElementById('create-button');
/* State */

/* Events */
loginButton.addEventListener('click', async () => {
    window.location.href = '../auth-page';
});

createButton.addEventListener('click', async () => {
    if (checkAuth()) window.location.href = '../create-page';
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
