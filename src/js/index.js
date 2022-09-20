// importing files
import {called, heading} from "./header";
import '../styles/style.scss';
import home from "./home";

console.log(heading)

// Grabbing the content div.
const content = document.getElementById('content');
content.appendChild(heading())
content.appendChild(home)

alert('hello')