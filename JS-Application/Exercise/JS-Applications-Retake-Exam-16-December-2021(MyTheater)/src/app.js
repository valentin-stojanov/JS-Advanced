import { page, render } from './lib.js';
import { catalogPage } from './views/catalog.js';
import { loginPage } from './views/login.js';
import { logout } from './api/api.js';
import { getUserData } from './util.js';
import { registerPage } from './views/register.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';

import * as api from './api/data.js';
window.api = api;

const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext)
page('/', catalogPage);
page('/theaters', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/profile', profilePage);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

function onLogout(ev) {
    logout();
    updateUserNav();
    page.redirect('/')
}

function updateUserNav() {
    const userData = getUserData();
    if (userData) {
        [...document.querySelectorAll('.guest')].forEach(li =>li.style.display = 'none');
        [...document.querySelectorAll('.user')].forEach(li =>li.style.display = 'inline-block')
    } else {
        [...document.querySelectorAll('.guest')].forEach(li =>li.style.display = 'inline-block');
        [...document.querySelectorAll('.user')].forEach(li =>li.style.display = 'none')
    }
}

