/* Imports */

import { checkAuth, logout, getAllCreatedPosts, getUser } from './fetch-utils.js';
import { renderpostCard } from './render-utils.js';

/* Get DOM Elements */
const loginButton = document.getElementById('login-button');
const createButton = document.getElementById('create-button');
const addedContent = document.getElementById('added-content');
/* State */
let posts = [];

/* Events */
window.addEventListener('load', async () => {
    const allPostsData = await getAllCreatedPosts();
    posts = allPostsData;
    displayAllPosts();
    if (await getUser()) {
        loginButton.textContent = 'logout';
    } else {
        loginButton.textContent = 'login';
    }
});

loginButton.addEventListener('click', async () => {
    if (await getUser()) {
        logout();
    }
    if (await checkAuth()) {
        window.location.href = '../create-page';
    }
    window.location.href = '../auth-page';
});

createButton.addEventListener('click', async () => {
    if (await getUser()) window.location.href = '../create-page';
    if (!(await getUser())) window.location.href = '../auth-page';
});

/* Display Functions */

async function displayAllPosts(post) {
    addedContent.textContent = '';
    for (let post of posts) {
        const postCards = renderpostCard(post);
        addedContent.append(postCards);
    }
}

// (don't forget to call any display functions you want to run on page load!)
