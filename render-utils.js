export function renderpostCard(post) {
    const div = document.createElement('div');
    const title = document.createElement('p');
    const content = document.createElement('div');
    const contact = document.createElement('div');

    div.classList.add('createdPosts');
    title.classList.add('titleEl');
    content.classList.add('contentEl');
    contact.classList.add('contactEl');

    title.textContent = post.title;
    content.textContent = post.content;
    contact.textContent = post.contact;

    div.append(title, content, contact);
    return div;
}
