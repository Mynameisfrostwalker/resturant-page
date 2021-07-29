import { main, navCreate } from './pageload.js';
import { createMenuCard } from './menu.js';


const removePrevCard = (
    function() {
        const remove = () => {
            createMenuCard.menuCard.classList.add('exit');
            setTimeout(() => {
                createMenuCard.menuCard.remove()
                createMenuCard.menuCard.classList.remove('exit');
            }, 500);
        }
        return { remove }
    }
)()

const home = (
    function() {
        const content = document.querySelector('div#content');
        const create = () => {
            removePrevCard.remove();
            if (navCreate.tab.children[0].children[1].classList.contains('active')) {
                navCreate.tab.children[0].children[1].classList.remove('active');
            }
            if (navCreate.tab.children[0].children[2].classList.contains('active')) {
                navCreate.tab.children[0].children[2].classList.remove('active');
            }
            navCreate.tab.children[0].children[0].classList.add('active');
            main.create();
            content.appendChild(main.homeCard)
        }
        return { create }
    }
)()

export { home }