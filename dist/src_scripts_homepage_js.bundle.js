(self["webpackChunkresturant_page"] = self["webpackChunkresturant_page"] || []).push([["src_scripts_homepage_js"],{

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact),
/* harmony export */   "createContactCard": () => (/* binding */ createContactCard)
/* harmony export */ });
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload.js */ "./src/scripts/pageload.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/scripts/menu.js");




const changeActive = (
    function() {
        const change = () => {
            if (_pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[0].classList.contains('active')) {
                _pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[0].classList.remove('active');
                removePrevCard.home()
            }
            if (_pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[1].classList.contains('active')) {
                _pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[1].classList.remove('active');
                removePrevCard.menu();
            }
            _pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[2].classList.add('active');
        }
        return { change }
    }
)()

const removePrevCard = (
    function() {
        const home = () => {
            _pageload_js__WEBPACK_IMPORTED_MODULE_1__.main.homeCard.classList.add('exit');
            setTimeout(() => {
                _pageload_js__WEBPACK_IMPORTED_MODULE_1__.main.homeCard.remove()
                _pageload_js__WEBPACK_IMPORTED_MODULE_1__.main.homeCard.classList.remove('exit');
            }, 500);
        }
        const menu = () => {
            _menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuCard.menuCard.classList.add('exit');
            setTimeout(() => {
                _menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuCard.menuCard.remove()
                _menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuCard.menuCard.classList.remove('exit');
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



/***/ }),

/***/ "./src/scripts/homepage.js":
/*!*********************************!*\
  !*** ./src/scripts/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ "./src/scripts/pageload.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/scripts/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/scripts/contact.js");





const removePrevCard = (
    function() {
        const menu = () => {
            _menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuCard.menuCard.classList.add('exit');
            setTimeout(() => {
                _menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuCard.menuCard.remove()
                _menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuCard.menuCard.classList.remove('exit');
            }, 500);
        }
        const contact = () => {
            _contact_js__WEBPACK_IMPORTED_MODULE_2__.createContactCard.contactCard.classList.add('exit');
            setTimeout(() => {
                _contact_js__WEBPACK_IMPORTED_MODULE_2__.createContactCard.contactCard.remove()
                _contact_js__WEBPACK_IMPORTED_MODULE_2__.createContactCard.contactCard.classList.remove('exit');
            }, 500);
        }
        return { menu, contact }
    }
)()

const home = (
    function() {
        const content = document.querySelector('div#content');
        const create = () => {
            if (_pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[1].classList.contains('active')) {
                _pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[1].classList.remove('active');
                removePrevCard.menu();
            }
            if (_pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[2].classList.contains('active')) {
                _pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[2].classList.remove('active');
                removePrevCard.contact();
            }
            _pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[0].classList.add('active');
            _pageload_js__WEBPACK_IMPORTED_MODULE_0__.main.create();
            content.appendChild(_pageload_js__WEBPACK_IMPORTED_MODULE_0__.main.homeCard)
        }
        return { create }
    }
)()



/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "createMenuCard": () => (/* binding */ createMenuCard)
/* harmony export */ });
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload.js */ "./src/scripts/pageload.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/scripts/contact.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/images/pizza.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/images/truffles.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/images/caviar.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());







const changeActive = (
    function() {
        const change = () => {
            if (_pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[0].classList.contains('active')) {
                _pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[0].classList.remove('active');
                removePrevCard.home()
            }
            if (_pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[2].classList.contains('active')) {
                _pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[2].classList.remove('active');
                removePrevCard.contact()
            }
            _pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[1].classList.add('active');
        }
        return { change }
    }
)()

const removePrevCard = (
    function() {
        const home = () => {
            _pageload_js__WEBPACK_IMPORTED_MODULE_1__.main.homeCard.classList.add('exit');
            setTimeout(() => {
                _pageload_js__WEBPACK_IMPORTED_MODULE_1__.main.homeCard.remove()
                _pageload_js__WEBPACK_IMPORTED_MODULE_1__.main.homeCard.classList.remove('exit');
            }, 500);
        }
        const contact = () => {
            _contact_js__WEBPACK_IMPORTED_MODULE_2__.createContactCard.contactCard.classList.add('exit');
            setTimeout(() => {
                _contact_js__WEBPACK_IMPORTED_MODULE_2__.createContactCard.contactCard.remove()
                _contact_js__WEBPACK_IMPORTED_MODULE_2__.createContactCard.contactCard.classList.remove('exit');
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
        let pizzaDiv = createDivs(pizza, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/images/pizza.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), 'La pizza délicieusement divine', 'pizza').name;
        let caviarDiv = createDivs(caviar, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/images/caviar.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), 'Le caviar du haut des cieux', 'caviar').name;
        let trufflesDiv = createDivs(truffles, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/images/truffles.jpeg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), 'La bonté terrestre des reins de la terre', 'truffles').name;
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



/***/ }),

/***/ "./src/scripts/pageload.js":
/*!*********************************!*\
  !*** ./src/scripts/pageload.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialPage": () => (/* binding */ initialPage),
/* harmony export */   "navCreate": () => (/* binding */ navCreate),
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");


const navCreate = (
    function() {
        const tab = document.createElement('div');
        tab.setAttribute('id', 'tab-content');
        const tabUl = document.createElement('ul');
        const tab1li = document.createElement('li');
        tab1li.setAttribute('id', 'tab1li');
        tab1li.textContent = 'Home';
        const tab2li = document.createElement('li');
        tab2li.setAttribute('id', 'tab2li');
        tab2li.textContent = 'Menu';
        const tab3li = document.createElement('li');
        tab3li.setAttribute('id', 'tab3li');
        tab3li.textContent = 'Contact';
        const create = () => {
            tab1li.classList.add('active');
            if (tab2li.classList.contains('active')) {
                tab2li.classList.remove('active');
            }
            if (tab3li.classList.contains('active')) {
                tab3li.classList.remove('active');
            }
            tabUl.appendChild(tab1li);
            tabUl.appendChild(tab2li);
            tabUl.appendChild(tab3li);
            tab.appendChild(tabUl)
        }
        return { create, tab };
    }
)()


const main = (
    function() {
        const homeCard = document.createElement('div');
        homeCard.setAttribute('id', "homeCard")
        const homeHeader = document.createElement('div');
        homeHeader.setAttribute('id', 'Homeheader')
        const headerText = document.createElement('p');
        headerText.textContent = "Le FrostWalker's";
        homeHeader.appendChild(headerText);
        const homeMain = document.createElement('div');
        homeMain.setAttribute('id', 'Homemain');
        const mainText = document.createElement('p');
        mainText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla imperdiet enim eros, id dignissim est pharetra vestibulum. In convallis, 
        felis ut blandit tempus, nulla ipsum rhoncus mauris, in gravida mauris arcu ac 
        est. Fusce molestie neque nec tortor lobortis porttitor. Pellentesque ac 
        fermentum lorem. Vivamus et blandit libero. Proin condimentum egestas metus 
        nec condimentum. Nulla facilisi. Vivamus diam massa, dignissim sed finibus at, 
        pellentesque eget sem.`;
        const create = () => {
            homeMain.appendChild(mainText);
            homeCard.appendChild(homeHeader);
            homeCard.appendChild(homeMain);
        }
        return { create, homeCard }
    }
)()

const initialPage = (
    function() {
        const body = document.querySelector('body');
        const content = document.querySelector('div#content');
        const init = () => {
            navCreate.create();
            main.create();
            content.appendChild(navCreate.tab);
            body.classList.add('backgroundimage');
            content.appendChild(main.homeCard);
        }
        return { init }
    }
)()



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/NTg0NiIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9zY3JpcHRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9zY3JpcHRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9wYWdlbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ21CO0FBQ0o7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrR0FBd0Q7QUFDeEUsZ0JBQWdCLGdHQUFzRDtBQUN0RTtBQUNBO0FBQ0EsZ0JBQWdCLGtHQUF3RDtBQUN4RSxnQkFBZ0IsZ0dBQXNEO0FBQ3RFO0FBQ0E7QUFDQSxZQUFZLDZGQUFtRDtBQUMvRDtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscUVBQTJCO0FBQ3ZDO0FBQ0EsZ0JBQWdCLDhEQUFvQjtBQUNwQyxnQkFBZ0Isd0VBQThCO0FBQzlDLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSwyRUFBcUM7QUFDakQ7QUFDQSxnQkFBZ0Isb0VBQThCO0FBQzlDLGdCQUFnQiw4RUFBd0M7QUFDeEQsYUFBYTtBQUNiO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFZ0Q7QUFDTDtBQUNNOzs7QUFHakQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyRUFBcUM7QUFDakQ7QUFDQSxnQkFBZ0Isb0VBQThCO0FBQzlDLGdCQUFnQiw4RUFBd0M7QUFDeEQsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9GQUEyQztBQUN2RDtBQUNBLGdCQUFnQiw2RUFBb0M7QUFDcEQsZ0JBQWdCLHVGQUE4QztBQUM5RCxhQUFhO0FBQ2I7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrR0FBd0Q7QUFDeEUsZ0JBQWdCLGdHQUFzRDtBQUN0RTtBQUNBO0FBQ0EsZ0JBQWdCLGtHQUF3RDtBQUN4RSxnQkFBZ0IsZ0dBQXNEO0FBQ3RFO0FBQ0E7QUFDQSxZQUFZLDZGQUFtRDtBQUMvRCxZQUFZLHFEQUFXO0FBQ3ZCLGdDQUFnQyx1REFBYTtBQUM3QztBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQzJCO0FBQ29CO0FBQ0U7QUFDTDtBQUNNO0FBQ0w7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrR0FBd0Q7QUFDeEUsZ0JBQWdCLGdHQUFzRDtBQUN0RTtBQUNBO0FBQ0EsZ0JBQWdCLGtHQUF3RDtBQUN4RSxnQkFBZ0IsZ0dBQXNEO0FBQ3RFO0FBQ0E7QUFDQSxZQUFZLDZGQUFtRDtBQUMvRDtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscUVBQTJCO0FBQ3ZDO0FBQ0EsZ0JBQWdCLDhEQUFvQjtBQUNwQyxnQkFBZ0Isd0VBQThCO0FBQzlDLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRkFBMkM7QUFDdkQ7QUFDQSxnQkFBZ0IsNkVBQW9DO0FBQ3BELGdCQUFnQix1RkFBOEM7QUFDOUQsYUFBYTtBQUNiO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0EsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsdUpBQUs7QUFDOUMsMkNBQTJDLHVKQUFNO0FBQ2pELCtDQUErQywwSkFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtDQUErQztBQUM3RTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EiLCJmaWxlIjoic3JjX3NjcmlwdHNfaG9tZXBhZ2VfanMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0IHsgbmF2Q3JlYXRlLCBtYWluIH0gZnJvbSAnLi9wYWdlbG9hZC5qcydcbmltcG9ydCB7IGNyZWF0ZU1lbnVDYXJkIH0gZnJvbSAnLi9tZW51LmpzJztcblxuY29uc3QgY2hhbmdlQWN0aXZlID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgbmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICByZW1vdmVQcmV2Q2FyZC5ob21lKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYXZDcmVhdGUudGFiLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBuYXZDcmVhdGUudGFiLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHJlbW92ZVByZXZDYXJkLm1lbnUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY2hhbmdlIH1cbiAgICB9XG4pKClcblxuY29uc3QgcmVtb3ZlUHJldkNhcmQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBtYWluLmhvbWVDYXJkLmNsYXNzTGlzdC5hZGQoJ2V4aXQnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW4uaG9tZUNhcmQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBtYWluLmhvbWVDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2V4aXQnKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVudSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVDYXJkLm1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ2V4aXQnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZU1lbnVDYXJkLm1lbnVDYXJkLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgY3JlYXRlTWVudUNhcmQubWVudUNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZXhpdCcpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBob21lLCBtZW51IH1cbiAgICB9XG4pKClcblxuY29uc3QgY3JlYXRlQ29udGFjdENhcmQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3RDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdENhcmQnKTtcbiAgICAgICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgSW5mby50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzIGFuZCB0ZWxsIHVzIHdoYXQgeW91IHRoaW5rISc7XG4gICAgICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKEluZm8pO1xuICAgICAgICBjb25zdCBjb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IE51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgTnVtLnRleHRDb250ZW50ID0gYE51bWJlcjpcbiAgICAgICAgMTIzIDQ1NiA3ODlgO1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gYEFkZHJlc3M6XG4gICAgICAgIEhvbGx5d29vZCBCb3VsZXZhcmQgNDIsIExvcyBBbmdlbGVzLCBVU0FgO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb250YWN0cy5hcHBlbmRDaGlsZChOdW0pO1xuICAgICAgICAgICAgY29udGFjdHMuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgICAgICAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG4gICAgICAgICAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlLCBjb250YWN0Q2FyZCB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IGNvbnRhY3QgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VBY3RpdmUuY2hhbmdlKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVDb250YWN0Q2FyZC5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RDYXJkLmNvbnRhY3RDYXJkKVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSB9XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGNvbnRhY3QsIGNyZWF0ZUNvbnRhY3RDYXJkIH0iLCJpbXBvcnQgeyBtYWluLCBuYXZDcmVhdGUgfSBmcm9tICcuL3BhZ2Vsb2FkLmpzJztcbmltcG9ydCB7IGNyZWF0ZU1lbnVDYXJkIH0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RDYXJkIH0gZnJvbSAnLi9jb250YWN0LmpzJztcblxuXG5jb25zdCByZW1vdmVQcmV2Q2FyZCA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgbWVudSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVDYXJkLm1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ2V4aXQnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZU1lbnVDYXJkLm1lbnVDYXJkLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgY3JlYXRlTWVudUNhcmQubWVudUNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZXhpdCcpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250YWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY3JlYXRlQ29udGFjdENhcmQuY29udGFjdENhcmQuY2xhc3NMaXN0LmFkZCgnZXhpdCcpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlQ29udGFjdENhcmQuY29udGFjdENhcmQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBjcmVhdGVDb250YWN0Q2FyZC5jb250YWN0Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdleGl0Jyk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG1lbnUsIGNvbnRhY3QgfVxuICAgIH1cbikoKVxuXG5jb25zdCBob21lID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUHJldkNhcmQubWVudSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUHJldkNhcmQuY29udGFjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIG1haW4uY3JlYXRlKCk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4uaG9tZUNhcmQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlIH1cbiAgICB9XG4pKClcblxuZXhwb3J0IHsgaG9tZSB9IiwiaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnXG5pbXBvcnQgeyBuYXZDcmVhdGUsIG1haW4gfSBmcm9tICcuL3BhZ2Vsb2FkLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdENhcmQgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0IFBpenphIGZyb20gJy4uL3NyYy9pbWFnZXMvcGl6emEuanBlZydcbmltcG9ydCBUcnVmZmxlcyBmcm9tICcuLi9zcmMvaW1hZ2VzL3RydWZmbGVzLmpwZWcnXG5pbXBvcnQgQ2F2aWFyIGZyb20gJy4uL3NyYy9pbWFnZXMvY2F2aWFyLmpwZydcblxuY29uc3QgY2hhbmdlQWN0aXZlID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgbmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICByZW1vdmVQcmV2Q2FyZC5ob21lKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYXZDcmVhdGUudGFiLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBuYXZDcmVhdGUudGFiLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHJlbW92ZVByZXZDYXJkLmNvbnRhY3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjaGFuZ2UgfVxuICAgIH1cbikoKVxuXG5jb25zdCByZW1vdmVQcmV2Q2FyZCA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgICAgICAgICAgIG1haW4uaG9tZUNhcmQuY2xhc3NMaXN0LmFkZCgnZXhpdCcpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFpbi5ob21lQ2FyZC5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIG1haW4uaG9tZUNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZXhpdCcpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250YWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY3JlYXRlQ29udGFjdENhcmQuY29udGFjdENhcmQuY2xhc3NMaXN0LmFkZCgnZXhpdCcpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlQ29udGFjdENhcmQuY29udGFjdENhcmQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBjcmVhdGVDb250YWN0Q2FyZC5jb250YWN0Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdleGl0Jyk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGhvbWUsIGNvbnRhY3QgfVxuICAgIH1cbikoKVxuXG5jb25zdCBjcmVhdGVEaXZzID0gKG5hbWUsIHNyYywgd29yZHMsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdpZCcsIGAke2Rlc2NyaXB0aW9ufURpdmApO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnZm9vZCcpO1xuICAgIGNvbnN0IG15SW1nID0gbmV3IEltYWdlKCk7XG4gICAgbXlJbWcuaWQgPSBgJHtkZXNjcmlwdGlvbn1pbWdgO1xuICAgIG15SW1nLnNyYyA9IHNyYztcbiAgICBteUltZy5hbHQgPSBgSW1hZ2Ugb2YgJHtkZXNjcmlwdGlvbn1gO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7ZGVzY3JpcHRpb259dGV4dGApXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IHdvcmRzO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndGV4dHMnKVxuICAgIG5hbWUuYXBwZW5kQ2hpbGQobXlJbWcpO1xuICAgIG5hbWUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcmV0dXJuIHsgbmFtZSB9XG59XG5cbmNvbnN0IGNyZWF0ZU1lbnVDYXJkID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51Q2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVDYXJkJyk7XG4gICAgICAgIGNvbnN0IHBpenphID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBjYXZpYXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHRydWZmbGVzID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgcGl6emFEaXYgPSBjcmVhdGVEaXZzKHBpenphLCBQaXp6YSwgJ0xhIHBpenphIGTDqWxpY2lldXNlbWVudCBkaXZpbmUnLCAncGl6emEnKS5uYW1lO1xuICAgICAgICBsZXQgY2F2aWFyRGl2ID0gY3JlYXRlRGl2cyhjYXZpYXIsIENhdmlhciwgJ0xlIGNhdmlhciBkdSBoYXV0IGRlcyBjaWV1eCcsICdjYXZpYXInKS5uYW1lO1xuICAgICAgICBsZXQgdHJ1ZmZsZXNEaXYgPSBjcmVhdGVEaXZzKHRydWZmbGVzLCBUcnVmZmxlcywgJ0xhIGJvbnTDqSB0ZXJyZXN0cmUgZGVzIHJlaW5zIGRlIGxhIHRlcnJlJywgJ3RydWZmbGVzJykubmFtZTtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQocGl6emFEaXYpO1xuICAgICAgICAgICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoY2F2aWFyRGl2KTtcbiAgICAgICAgICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKHRydWZmbGVzRGl2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjcmVhdGUsIG1lbnVDYXJkIH1cbiAgICB9XG4pKClcblxuY29uc3QgbWVudSA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUFjdGl2ZS5jaGFuZ2UoKTtcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVDYXJkLmNyZWF0ZSgpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQubWVudUNhcmQpIH0sIDUwMClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjcmVhdGUgfVxuICAgIH1cbikoKVxuXG5leHBvcnQgeyBtZW51LCBjcmVhdGVNZW51Q2FyZCB9IiwiaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnXG5cbmNvbnN0IG5hdkNyZWF0ZSA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhYi1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IHRhYlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgdGFiMWxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdGFiMWxpLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFiMWxpJyk7XG4gICAgICAgIHRhYjFsaS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICAgICAgY29uc3QgdGFiMmxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdGFiMmxpLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFiMmxpJyk7XG4gICAgICAgIHRhYjJsaS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICAgICAgY29uc3QgdGFiM2xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdGFiM2xpLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFiM2xpJyk7XG4gICAgICAgIHRhYjNsaS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGFiMWxpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKHRhYjJsaS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgdGFiMmxpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhYjNsaS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgdGFiM2xpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFiVWwuYXBwZW5kQ2hpbGQodGFiMWxpKTtcbiAgICAgICAgICAgIHRhYlVsLmFwcGVuZENoaWxkKHRhYjJsaSk7XG4gICAgICAgICAgICB0YWJVbC5hcHBlbmRDaGlsZCh0YWIzbGkpO1xuICAgICAgICAgICAgdGFiLmFwcGVuZENoaWxkKHRhYlVsKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSwgdGFiIH07XG4gICAgfVxuKSgpXG5cblxuY29uc3QgbWFpbiA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgaG9tZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZUNhcmQuc2V0QXR0cmlidXRlKCdpZCcsIFwiaG9tZUNhcmRcIilcbiAgICAgICAgY29uc3QgaG9tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lSGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnSG9tZWhlYWRlcicpXG4gICAgICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIkxlIEZyb3N0V2Fsa2VyJ3NcIjtcbiAgICAgICAgaG9tZUhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgICAgICAgY29uc3QgaG9tZU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZU1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdIb21lbWFpbicpO1xuICAgICAgICBjb25zdCBtYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbWFpblRleHQudGV4dENvbnRlbnQgPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cbiAgICAgICAgTnVsbGEgaW1wZXJkaWV0IGVuaW0gZXJvcywgaWQgZGlnbmlzc2ltIGVzdCBwaGFyZXRyYSB2ZXN0aWJ1bHVtLiBJbiBjb252YWxsaXMsIFxuICAgICAgICBmZWxpcyB1dCBibGFuZGl0IHRlbXB1cywgbnVsbGEgaXBzdW0gcmhvbmN1cyBtYXVyaXMsIGluIGdyYXZpZGEgbWF1cmlzIGFyY3UgYWMgXG4gICAgICAgIGVzdC4gRnVzY2UgbW9sZXN0aWUgbmVxdWUgbmVjIHRvcnRvciBsb2JvcnRpcyBwb3J0dGl0b3IuIFBlbGxlbnRlc3F1ZSBhYyBcbiAgICAgICAgZmVybWVudHVtIGxvcmVtLiBWaXZhbXVzIGV0IGJsYW5kaXQgbGliZXJvLiBQcm9pbiBjb25kaW1lbnR1bSBlZ2VzdGFzIG1ldHVzIFxuICAgICAgICBuZWMgY29uZGltZW50dW0uIE51bGxhIGZhY2lsaXNpLiBWaXZhbXVzIGRpYW0gbWFzc2EsIGRpZ25pc3NpbSBzZWQgZmluaWJ1cyBhdCwgXG4gICAgICAgIHBlbGxlbnRlc3F1ZSBlZ2V0IHNlbS5gO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBob21lTWFpbi5hcHBlbmRDaGlsZChtYWluVGV4dCk7XG4gICAgICAgICAgICBob21lQ2FyZC5hcHBlbmRDaGlsZChob21lSGVhZGVyKTtcbiAgICAgICAgICAgIGhvbWVDYXJkLmFwcGVuZENoaWxkKGhvbWVNYWluKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjcmVhdGUsIGhvbWVDYXJkIH1cbiAgICB9XG4pKClcblxuY29uc3QgaW5pdGlhbFBhZ2UgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuICAgICAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2Q3JlYXRlLmNyZWF0ZSgpO1xuICAgICAgICAgICAgbWFpbi5jcmVhdGUoKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2Q3JlYXRlLnRhYik7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmRpbWFnZScpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluLmhvbWVDYXJkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBpbml0IH1cbiAgICB9XG4pKClcblxuZXhwb3J0IHsgaW5pdGlhbFBhZ2UsIG5hdkNyZWF0ZSwgbWFpbiB9Il0sInNvdXJjZVJvb3QiOiIifQ==