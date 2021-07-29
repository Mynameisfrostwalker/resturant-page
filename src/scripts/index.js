import { initialPage, navCreate } from './pageload.js'
import { menu } from './menu'
import { home } from './homepage.js'

initialPage.init()

navCreate.tab.children[0].children[1].addEventListener('click', menu.create);

navCreate.tab.children[0].children[0].addEventListener('click', home.create);