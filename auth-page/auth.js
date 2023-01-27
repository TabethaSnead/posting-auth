import { signInUser, signUpUser, redirectIfLoggedIn } from '../fetch-utils.js';

const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    await signUpUser(data.get('email'), data.get('password'));
    redirectIfLoggedIn();
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    await signInUser(data.get('email'), data.get('password'));
    redirectIfLoggedIn();
});
