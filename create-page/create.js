import { insertFormData } from '../fetch-utils.js';
import { renderpostCard } from '../render-utils.js';

const createPostsForm = document.getElementById('create-posts-form');
const goHomeButton = document.getElementById('goHomeButton');

let createdPosts = [];

createPostsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createPostsForm);
    const title = data.get('title');
    const content = data.get('content');
    const contact = data.get('contact');
    console.log(title, content, contact);
    await insertFormData(title, content, contact);
});
