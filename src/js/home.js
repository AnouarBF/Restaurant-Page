function home(){
    // Creating the article
    const article = document.createElement('article');
    article.setAttribute('id', 'home')
    // creating the header and appending it to the article
    const h1 = document.createElement('h1');
    h1.innerText = 'Welcome to our Restaurant The Smarter Shef';
    article.appendChild(h1);

    return article;
}

export default home