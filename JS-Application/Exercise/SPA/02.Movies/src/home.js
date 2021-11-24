// initialization
// - find relevant section
// - detach section from DOM

import {showView} from "./dom.js";
import {showCreate} from "./create.js";
import {showDetails} from "./details.js";

const section = document.getElementById('home-page');
const catalog = section.querySelector('.card-deck.d-flex.justify-content-center');
section.querySelector('#createLink').addEventListener('click', (event) => {
    event.preventDefault();
    showCreate();
});

catalog.addEventListener('click', (event) => {
    event.preventDefault();

    let target = event.target;
    if (target.tagName == 'BUTTON') {
        target = target.parentElement;
    }
    if (target.tagName == 'A') {
        const id = target.dataset.id;
        showDetails(id);
    }
})

section.remove();

// display logic
export function showHome() {
    showView(section);
    getMovies();
}

async function getMovies() {
    const p = document.createElement('p');
    p.textContent = 'Loading...';
    catalog.replaceChildren(p);

    const res = await fetch('http://localhost:3030/data/movies');
    const data = await res.json();

    catalog.replaceChildren(...data.map(createMovieCard));

    return data;
}

window.getMovies = getMovies;

function createMovieCard(movie) {
    const element = document.createElement('div');
    element.classList.add('card', 'mb-4');

    element.innerHTML = `
    <img className="card-img-top" src="${movie.img}"
         alt="Card image cap" width="400">
        <div className="card-body">
            <h4 className="card-title">${movie.title}</h4>
        </div>
        <div className="card-footer">
            <a data-id="${movie._id}" href="#">
                <button type="button" className="btn btn-info">Details</button>
            </a>
        </div>`;

    return element;
}
