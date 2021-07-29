import '../styles/main.css'
import { navCreate, main } from './pageload.js'

const changeActive = (
    function() {
        const change = () => {
            if (navCreate.tab.children[0].children[0].classList.contains('active')) {
                navCreate.tab.children[0].children[0].classList.remove('active');
            }
            if (navCreate.tab.children[0].children[2].classList.contains('active')) {
                navCreate.tab.children[0].children[2].classList.remove('active');
            }
            navCreate.tab.children[0].children[1].classList.add('active');
        }
        return { change }
    }
)()

const removePrevCard = (
    function() {
        const remove = () => {
            main.homeCard.classList.add('exit');
            setTimeout(() => {
                main.homeCard.remove()
                main.homeCard.classList.remove('exit');
            }, 500);
        }
        return { remove }
    }
)()

const createDivs = (name, src, words, description) => {
    name = document.createElement('div');
    name.setAttribute('id', `${description}Div`);
    name.classList.add('food');
    const img = document.createElement('img');
    img.setAttribute('id', `${description}img`);
    img.setAttribute('src', src);
    img.setAttribute('alt', `Image of ${description}`);
    img.classList.add('images')
    const text = document.createElement('p');
    text.setAttribute('id', `${description}text`)
    text.textContent = words;
    text.classList.add('texts')
    name.appendChild(img);
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
        let pizzaDiv = createDivs(pizza, '../src/images/pizza.jpeg', 'La pizza délicieusement divine', 'pizza').name;
        let caviarDiv = createDivs(caviar, '../src/images/caviar.jpg', 'Le caviar du haut des cieux', 'caviar').name;
        let trufflesDiv = createDivs(truffles, '../src/images/truffles.jpeg', 'La bonté terrestre des reins de la terre', 'truffles').name;
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
            removePrevCard.remove();
            createMenuCard.create();
            setTimeout(() => { content.appendChild(createMenuCard.menuCard) }, 500)
        }
        return { create }
    }
)()

export { menu, createMenuCard }