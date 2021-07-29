import '../styles/main.css';
import { navCreate, main } from './pageload.js'
import { createMenuCard } from './menu.js';

const changeActive = (
    function() {
        const change = () => {
            if (navCreate.tab.children[0].children[0].classList.contains('active')) {
                navCreate.tab.children[0].children[0].classList.remove('active');
                removePrevCard.home()
            }
            if (navCreate.tab.children[0].children[1].classList.contains('active')) {
                navCreate.tab.children[0].children[1].classList.remove('active');
                removePrevCard.menu();
            }
            navCreate.tab.children[0].children[2].classList.add('active');
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
        const menu = () => {
            createMenuCard.menuCard.classList.add('exit');
            setTimeout(() => {
                createMenuCard.menuCard.remove()
                createMenuCard.menuCard.classList.remove('exit');
            }, 500);
        }
        return { home, menu }
    }
)()

const createContactCard = (
    function() {
        const contactCard = document.createElement('div');
        contactCard.setAttribute('id', 'contactCard');
        const contactInfo = document.createElement('div');
        const Info = document.createElement('p');
        Info.textContent = 'Contact us and tell us what you think!';
        contactInfo.appendChild(Info);
        const contacts = document.createElement('div')
        const Num = document.createElement('p');
        Num.textContent = `Number:
        123 456 789`;
        const address = document.createElement('p');
        address.textContent = `Address:
        Hollywood Boulevard 42, Los Angeles, USA`;
        const create = () => {
            contacts.appendChild(Num);
            contacts.appendChild(address);
            contactCard.appendChild(contactInfo);
            contactCard.appendChild(contacts);
        }
        return { create, contactCard }
    }
)()

const contact = (
    function() {
        const content = document.querySelector('div#content');
        const create = () => {
            changeActive.change();
            setTimeout(() => {
                createContactCard.create();
                content.appendChild(createContactCard.contactCard)
            }, 500)
        }
        return { create }
    }
)()

export { contact, createContactCard }