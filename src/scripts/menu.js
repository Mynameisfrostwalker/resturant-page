import '../styles/main.css'
import { navCreate, main } from './pageload.js'
import { createContactCard } from './contact.js';
import Pizza from '../images/pizza.jpeg'
import Truffles from '../images/truffles.jpeg'
import Caviar from '../images/caviar.jpg'

const changeActive = (
    function() {
        const change = () => {
            if (navCreate.tab.children[0].children[0].classList.contains('active')) {
                navCreate.tab.children[0].children[0].classList.remove('active');
                removePrevCard.home()
            }
            if (navCreate.tab.children[0].children[2].classList.contains('active')) {
                navCreate.tab.children[0].children[2].classList.remove('active');
                removePrevCard.contact()
            }
            navCreate.tab.children[0].children[1].classList.add('active');
        }
        return { change }
    }
)()

const removePrevCard = (
    function() {
        const home = () => {
            main.homeCard.classList.add('exit');
            setTimeout(() => {
                main.homeCard.remove()
                main.homeCard.classList.remove('exit');
            }, 500);
        }
        const contact = () => {
            createContactCard.contactCard.classList.add('exit');
            setTimeout(() => {
                createContactCard.contactCard.remove()
                createContactCard.contactCard.classList.remove('exit');
            }, 500);
        }
        return { home, contact }
    }
)()

const createDivs = (name, src, words, description) => {
    name = document.createElement('div');
    name.setAttribute('id', `${description}Div`);
    name.classList.add('food');
    const myImg = new Image();
    myImg.id = `${description}img`;
    myImg.src = src;
    myImg.alt = `Image of ${description}`;
    const text = document.createElement('p');
    text.setAttribute('id', `${description}text`)
    text.textContent = words;
    text.classList.add('texts')
    name.appendChild(myImg);
    name.appendChild(text);
    return { name }
}

const createMenuCard = (
    function() {
        const menuCard = document.createElement('div');
        menuCard.setAttribute('id', 'menuCard');
        const pizza = undefined;
        const caviar = undefined;
        const truffles = undefined;
        let pizzaDiv = createDivs(pizza, Pizza, 'La pizza délicieusement divine', 'pizza').name;
        let caviarDiv = createDivs(caviar, Caviar, 'Le caviar du haut des cieux', 'caviar').name;
        let trufflesDiv = createDivs(truffles, Truffles, 'La bonté terrestre des reins de la terre', 'truffles').name;
        const create = () => {
            menuCard.appendChild(pizzaDiv);
            menuCard.appendChild(caviarDiv);
            menuCard.appendChild(trufflesDiv);
        }
        return { create, menuCard }
    }
)()

const menu = (
    function() {
        const content = document.querySelector('div#content');
        const create = () => {
            changeActive.change();
            createMenuCard.create();
            setTimeout(() => { content.appendChild(createMenuCard.menuCard) }, 500)
        }
        return { create }
    }
)()

export { menu, createMenuCard }