import {showHome} from "./home.js";
import {showRegister} from "./register.js";
import {showLogin} from "./login.js";

const views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister
}

document.querySelector('nav').addEventListener('click', (event) => {
    const view = views[event.target.id];
    if (typeof view == 'function') {
        event.preventDefault();
        view();
    }
});

//start application in home view.
showHome();

