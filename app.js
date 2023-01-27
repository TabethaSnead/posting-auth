/* Imports */

import { checkAuth, logout, getAllCreatedPosts } from './fetch-utils.js';
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
});

loginButton.addEventListener('click', async () => {
    window.location.href = '../auth-page';
});

createButton.addEventListener('click', async () => {
    if (checkAuth()) window.location.href = '../create-page';
});

/* Display Functions */

async function displayAllPosts(post) {
    addedContent.textContent = '';
    for (let post of posts) {
        const postCards = renderpostCard(post);
        addedContent.append(postCards);
        console.log(postCards);
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayAllPosts();
