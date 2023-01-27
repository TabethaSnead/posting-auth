import { insertFormData, getUser } from '../fetch-utils.js';

const createPostsForm = document.getElementById('create-posts-form');
const goHomeButton = document.getElementById('goHomeButton');

window.addEventListener('load', async () => {
    if (!(await getUser())) {
        window.location.href = '../auth-page';
    }
});
createPostsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createPostsForm);
    const title = data.get('title');
    const content = data.get('content');
    const contact = data.get('contact');
    await insertFormData(title, content, contact);
    window.location.href = '../';
});

goHomeButton.addEventListener('click', () => {
    window.location.href = '../';
});
