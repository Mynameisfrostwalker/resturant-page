import { main, navCreate } from './pageload.js';
import { createMenuCard } from './menu.js';
import { createContactCard } from './contact.js';


const removePrevCard = (
    function() {
        const menu = () => {
            createMenuCard.menuCard.classList.add('exit');
            setTimeout(() => {
                createMenuCard.menuCard.remove()
                createMenuCard.menuCard.classList.remove('exit');
            }, 500);
        }
        const contact = () => {
            createContactCard.contactCard.classList.add('exit');
            setTimeout(() => {
                createContactCard.contactCard.remove()
                createContactCard.contactCard.classList.remove('exit');
            }, 500);
        }
        return { menu, contact }
    }
)()

const home = (
    function() {
        const content = document.querySelector('div#content');
        const create = () => {
            if (navCreate.tab.children[0].children[1].classList.contains('active')) {
                navCreate.tab.children[0].children[1].classList.remove('active');
                removePrevCard.menu();
            }
            if (navCreate.tab.children[0].children[2].classList.contains('active')) {
                navCreate.tab.children[0].children[2].classList.remove('active');
                removePrevCard.contact();
            }
            setTimeout(() => {
                navCreate.tab.children[0].children[0].classList.add('active');
                main.create();
                content.appendChild(main.homeCard)
            }, 500);
        }
        return { create }
    }
)()

export { home }