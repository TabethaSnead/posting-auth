const SUPABASE_URL = 'https://gufldzbeyvbceuxgfcxw.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1ZmxkemJleXZiY2V1eGdmY3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0OTI0OTYsImV4cCI6MTk5MDA2ODQ5Nn0.o6XJ-ggfqCoOTd35YoUJsnVjyrDXXT0G74YeNkDKbKw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    const res = (await client.auth.session()) && (await client.auth.session().user);
    console.log('res', res);
    return res;
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({
        email: email,
        password: password,
    });
    return response;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({
        email: email,
        password: password,
    });
    return response;
}

export async function checkAuth() {
    const user = await getUser();
    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    const user = await getUser();
    if (user) location.replace('../create-page');
}

export async function logout() {
    const response = await client.auth.signOut();

    return response.error;
}

export async function getAllCreatedPosts() {
    const { data, error } = await client.from('posts').select('*');
    return data;
}

export async function insertFormData(titleStr, contentStr, contactStr) {
    // const postObj = [{ title: titleStr, content: contentStr, contact: contactStr }];
    // {title: 'whatever', content: 'text', contact: 'moretext'}
    await client
        .from('posts')
        .insert({ title: titleStr, content: contentStr, contact: contactStr });
}
