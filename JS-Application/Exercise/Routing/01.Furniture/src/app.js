import {page} from './lib.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

page('/', catalogPage );
page('/details/:id', detailsPage );
page('/create', createPage );
page('/edit/:id', editPage );
page('/login', loginPage );
page('/register', registerPage )
page('/my-furniture', () => console.log('My furniture view'));

page.start();