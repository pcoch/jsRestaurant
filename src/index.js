import createAbout from './about.js';
import createMenu from './menu.js';
import createContact from './contact.js';

const aboutNav = document.getElementById('aboutNav');
aboutNav.addEventListener('click', createAbout);

const menuNav = document.getElementById('menuNav');
menuNav.addEventListener('click', createMenu);

const contactNav = document.getElementById('contactNav');
contactNav.addEventListener('click', createContact);

createAbout();