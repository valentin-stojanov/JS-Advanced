// initialization
// - find relevant section
// - detach section from DOM

import { showView } from "./dom.js";


const section =  document.getElementById('home-page');
section.querySelector('#createLink').addEventListener('click', (event) => {
    event.preventDefault();
    showCreate();
});
section.remove();

// display logic

export function showHome(){
    showView(section);
}