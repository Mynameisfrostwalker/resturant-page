import { initialPage, navCreate } from './pageload.js'
import { menu } from './menu'

initialPage.init()

navCreate.tab.children[0].children[1].addEventListener('click', menu.create)