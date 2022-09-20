import logo from '../assets/The_Smarter_Chef.png';

export function heading() {
    // creating the header tag
    const header = document.createElement('header');

    // creating, adding text and appending the h1 tag
    const h1 = document.createElement('h1');
    h1.innerText = 'The Smarter Shef';
    header.appendChild(h1);

    // image
    const header_logo = new Image()
    header_logo.src = logo

    // creating an unordered list.
    const ul = document.createElement('ul');

    // creating some list items and appending them inside of the ul
    for(let i = 0; i < 3; i++){
        const li = document.createElement('li');
        li.innerText = 'home';
        const anchor = document.createElement('a');
        anchor.setAttribute('href', './index.js');
        li.appendChild(anchor);
        ul.appendChild(li); 
    }
    header.appendChild(ul)
    return header
}
