import '../styles/main.css';
import { initialPage, navCreate } from './pageload.js'
import { menu } from './menu'
import { home } from './homepage.js'
import { contact } from './contact.js'

initialPage.init()

navCreate.tab.children[0].children[1].addEventListener('click', menu.create);

navCreate.tab.children[0].children[0].addEventListener('click', home.create);

navCreate.tab.children[0].children[2].addEventListener('click', contact.create);