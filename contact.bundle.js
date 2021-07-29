/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/contact.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/NTg0NiIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9zY3JpcHRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3NjcmlwdHMvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNtQjtBQUNKOztBQUUzQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0dBQXdEO0FBQ3hFLGdCQUFnQixnR0FBc0Q7QUFDdEU7QUFDQTtBQUNBLGdCQUFnQixrR0FBd0Q7QUFDeEUsZ0JBQWdCLGdHQUFzRDtBQUN0RTtBQUNBO0FBQ0EsWUFBWSw2RkFBbUQ7QUFDL0Q7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFFQUEyQjtBQUN2QztBQUNBLGdCQUFnQiw4REFBb0I7QUFDcEMsZ0JBQWdCLHdFQUE4QjtBQUM5QyxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksMkVBQXFDO0FBQ2pEO0FBQ0EsZ0JBQWdCLG9FQUE4QjtBQUM5QyxnQkFBZ0IsOEVBQXdDO0FBQ3hELGFBQWE7QUFDYjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RTJCO0FBQ29CO0FBQ0U7QUFDTDtBQUNNO0FBQ0w7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrR0FBd0Q7QUFDeEUsZ0JBQWdCLGdHQUFzRDtBQUN0RTtBQUNBO0FBQ0EsZ0JBQWdCLGtHQUF3RDtBQUN4RSxnQkFBZ0IsZ0dBQXNEO0FBQ3RFO0FBQ0E7QUFDQSxZQUFZLDZGQUFtRDtBQUMvRDtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscUVBQTJCO0FBQ3ZDO0FBQ0EsZ0JBQWdCLDhEQUFvQjtBQUNwQyxnQkFBZ0Isd0VBQThCO0FBQzlDLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRkFBMkM7QUFDdkQ7QUFDQSxnQkFBZ0IsNkVBQW9DO0FBQ3BELGdCQUFnQix1RkFBOEM7QUFDOUQsYUFBYTtBQUNiO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0EsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsdUpBQUs7QUFDOUMsMkNBQTJDLHVKQUFNO0FBQ2pELCtDQUErQywwSkFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtDQUErQztBQUM3RTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUYyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7Ozs7Ozs7VUMzRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImNvbnRhY3QuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0IHsgbmF2Q3JlYXRlLCBtYWluIH0gZnJvbSAnLi9wYWdlbG9hZC5qcydcbmltcG9ydCB7IGNyZWF0ZU1lbnVDYXJkIH0gZnJvbSAnLi9tZW51LmpzJztcblxuY29uc3QgY2hhbmdlQWN0aXZlID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgbmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICByZW1vdmVQcmV2Q2FyZC5ob21lKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYXZDcmVhdGUudGFiLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBuYXZDcmVhdGUudGFiLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHJlbW92ZVByZXZDYXJkLm1lbnUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY2hhbmdlIH1cbiAgICB9XG4pKClcblxuY29uc3QgcmVtb3ZlUHJldkNhcmQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBtYWluLmhvbWVDYXJkLmNsYXNzTGlzdC5hZGQoJ2V4aXQnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW4uaG9tZUNhcmQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBtYWluLmhvbWVDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2V4aXQnKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVudSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVDYXJkLm1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ2V4aXQnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZU1lbnVDYXJkLm1lbnVDYXJkLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgY3JlYXRlTWVudUNhcmQubWVudUNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZXhpdCcpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBob21lLCBtZW51IH1cbiAgICB9XG4pKClcblxuY29uc3QgY3JlYXRlQ29udGFjdENhcmQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3RDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdENhcmQnKTtcbiAgICAgICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgSW5mby50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzIGFuZCB0ZWxsIHVzIHdoYXQgeW91IHRoaW5rISc7XG4gICAgICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKEluZm8pO1xuICAgICAgICBjb25zdCBjb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IE51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgTnVtLnRleHRDb250ZW50ID0gYE51bWJlcjpcbiAgICAgICAgMTIzIDQ1NiA3ODlgO1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gYEFkZHJlc3M6XG4gICAgICAgIEhvbGx5d29vZCBCb3VsZXZhcmQgNDIsIExvcyBBbmdlbGVzLCBVU0FgO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb250YWN0cy5hcHBlbmRDaGlsZChOdW0pO1xuICAgICAgICAgICAgY29udGFjdHMuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgICAgICAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG4gICAgICAgICAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlLCBjb250YWN0Q2FyZCB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IGNvbnRhY3QgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VBY3RpdmUuY2hhbmdlKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVDb250YWN0Q2FyZC5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RDYXJkLmNvbnRhY3RDYXJkKVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSB9XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGNvbnRhY3QsIGNyZWF0ZUNvbnRhY3RDYXJkIH0iLCJpbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcydcbmltcG9ydCB7IG5hdkNyZWF0ZSwgbWFpbiB9IGZyb20gJy4vcGFnZWxvYWQuanMnXG5pbXBvcnQgeyBjcmVhdGVDb250YWN0Q2FyZCB9IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgUGl6emEgZnJvbSAnLi4vc3JjL2ltYWdlcy9waXp6YS5qcGVnJ1xuaW1wb3J0IFRydWZmbGVzIGZyb20gJy4uL3NyYy9pbWFnZXMvdHJ1ZmZsZXMuanBlZydcbmltcG9ydCBDYXZpYXIgZnJvbSAnLi4vc3JjL2ltYWdlcy9jYXZpYXIuanBnJ1xuXG5jb25zdCBjaGFuZ2VBY3RpdmUgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChuYXZDcmVhdGUudGFiLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBuYXZDcmVhdGUudGFiLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHJlbW92ZVByZXZDYXJkLmhvbWUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUHJldkNhcmQuY29udGFjdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXZDcmVhdGUudGFiLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNoYW5nZSB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IHJlbW92ZVByZXZDYXJkID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBob21lID0gKCkgPT4ge1xuICAgICAgICAgICAgbWFpbi5ob21lQ2FyZC5jbGFzc0xpc3QuYWRkKCdleGl0Jyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluLmhvbWVDYXJkLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgbWFpbi5ob21lQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdleGl0Jyk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVDb250YWN0Q2FyZC5jb250YWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdleGl0Jyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVDb250YWN0Q2FyZC5jb250YWN0Q2FyZC5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIGNyZWF0ZUNvbnRhY3RDYXJkLmNvbnRhY3RDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2V4aXQnKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgaG9tZSwgY29udGFjdCB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IGNyZWF0ZURpdnMgPSAobmFtZSwgc3JjLCB3b3JkcywgZGVzY3JpcHRpb24pID0+IHtcbiAgICBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7ZGVzY3JpcHRpb259RGl2YCk7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdmb29kJyk7XG4gICAgY29uc3QgbXlJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBteUltZy5pZCA9IGAke2Rlc2NyaXB0aW9ufWltZ2A7XG4gICAgbXlJbWcuc3JjID0gc3JjO1xuICAgIG15SW1nLmFsdCA9IGBJbWFnZSBvZiAke2Rlc2NyaXB0aW9ufWA7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtkZXNjcmlwdGlvbn10ZXh0YClcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gd29yZHM7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0cycpXG4gICAgbmFtZS5hcHBlbmRDaGlsZChteUltZyk7XG4gICAgbmFtZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICByZXR1cm4geyBuYW1lIH1cbn1cblxuY29uc3QgY3JlYXRlTWVudUNhcmQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudUNhcmQnKTtcbiAgICAgICAgY29uc3QgcGl6emEgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGNhdmlhciA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgdHJ1ZmZsZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBwaXp6YURpdiA9IGNyZWF0ZURpdnMocGl6emEsIFBpenphLCAnTGEgcGl6emEgZMOpbGljaWV1c2VtZW50IGRpdmluZScsICdwaXp6YScpLm5hbWU7XG4gICAgICAgIGxldCBjYXZpYXJEaXYgPSBjcmVhdGVEaXZzKGNhdmlhciwgQ2F2aWFyLCAnTGUgY2F2aWFyIGR1IGhhdXQgZGVzIGNpZXV4JywgJ2NhdmlhcicpLm5hbWU7XG4gICAgICAgIGxldCB0cnVmZmxlc0RpdiA9IGNyZWF0ZURpdnModHJ1ZmZsZXMsIFRydWZmbGVzLCAnTGEgYm9udMOpIHRlcnJlc3RyZSBkZXMgcmVpbnMgZGUgbGEgdGVycmUnLCAndHJ1ZmZsZXMnKS5uYW1lO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChwaXp6YURpdik7XG4gICAgICAgICAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChjYXZpYXJEaXYpO1xuICAgICAgICAgICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQodHJ1ZmZsZXNEaXYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSwgbWVudUNhcmQgfVxuICAgIH1cbikoKVxuXG5jb25zdCBtZW51ID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlQWN0aXZlLmNoYW5nZSgpO1xuICAgICAgICAgICAgY3JlYXRlTWVudUNhcmQuY3JlYXRlKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q2FyZC5tZW51Q2FyZCkgfSwgNTAwKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSB9XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IG1lbnUsIGNyZWF0ZU1lbnVDYXJkIH0iLCJpbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcydcblxuY29uc3QgbmF2Q3JlYXRlID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFiLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgdGFiVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBjb25zdCB0YWIxbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YWIxbGkuc2V0QXR0cmlidXRlKCdpZCcsICd0YWIxbGknKTtcbiAgICAgICAgdGFiMWxpLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgICAgICBjb25zdCB0YWIybGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YWIybGkuc2V0QXR0cmlidXRlKCdpZCcsICd0YWIybGknKTtcbiAgICAgICAgdGFiMmxpLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgICAgICBjb25zdCB0YWIzbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YWIzbGkuc2V0QXR0cmlidXRlKCdpZCcsICd0YWIzbGknKTtcbiAgICAgICAgdGFiM2xpLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0YWIxbGkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAodGFiMmxpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0YWIybGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFiM2xpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0YWIzbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJVbC5hcHBlbmRDaGlsZCh0YWIxbGkpO1xuICAgICAgICAgICAgdGFiVWwuYXBwZW5kQ2hpbGQodGFiMmxpKTtcbiAgICAgICAgICAgIHRhYlVsLmFwcGVuZENoaWxkKHRhYjNsaSk7XG4gICAgICAgICAgICB0YWIuYXBwZW5kQ2hpbGQodGFiVWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlLCB0YWIgfTtcbiAgICB9XG4pKClcblxuXG5jb25zdCBtYWluID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBob21lQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJob21lQ2FyZFwiKVxuICAgICAgICBjb25zdCBob21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdIb21laGVhZGVyJylcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiTGUgRnJvc3RXYWxrZXInc1wiO1xuICAgICAgICBob21lSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICAgICAgICBjb25zdCBob21lTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lTWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0hvbWVtYWluJyk7XG4gICAgICAgIGNvbnN0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBtYWluVGV4dC50ZXh0Q29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxuICAgICAgICBOdWxsYSBpbXBlcmRpZXQgZW5pbSBlcm9zLCBpZCBkaWduaXNzaW0gZXN0IHBoYXJldHJhIHZlc3RpYnVsdW0uIEluIGNvbnZhbGxpcywgXG4gICAgICAgIGZlbGlzIHV0IGJsYW5kaXQgdGVtcHVzLCBudWxsYSBpcHN1bSByaG9uY3VzIG1hdXJpcywgaW4gZ3JhdmlkYSBtYXVyaXMgYXJjdSBhYyBcbiAgICAgICAgZXN0LiBGdXNjZSBtb2xlc3RpZSBuZXF1ZSBuZWMgdG9ydG9yIGxvYm9ydGlzIHBvcnR0aXRvci4gUGVsbGVudGVzcXVlIGFjIFxuICAgICAgICBmZXJtZW50dW0gbG9yZW0uIFZpdmFtdXMgZXQgYmxhbmRpdCBsaWJlcm8uIFByb2luIGNvbmRpbWVudHVtIGVnZXN0YXMgbWV0dXMgXG4gICAgICAgIG5lYyBjb25kaW1lbnR1bS4gTnVsbGEgZmFjaWxpc2kuIFZpdmFtdXMgZGlhbSBtYXNzYSwgZGlnbmlzc2ltIHNlZCBmaW5pYnVzIGF0LCBcbiAgICAgICAgcGVsbGVudGVzcXVlIGVnZXQgc2VtLmA7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGhvbWVNYWluLmFwcGVuZENoaWxkKG1haW5UZXh0KTtcbiAgICAgICAgICAgIGhvbWVDYXJkLmFwcGVuZENoaWxkKGhvbWVIZWFkZXIpO1xuICAgICAgICAgICAgaG9tZUNhcmQuYXBwZW5kQ2hpbGQoaG9tZU1haW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSwgaG9tZUNhcmQgfVxuICAgIH1cbikoKVxuXG5jb25zdCBpbml0aWFsUGFnZSA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXZDcmVhdGUuY3JlYXRlKCk7XG4gICAgICAgICAgICBtYWluLmNyZWF0ZSgpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZDcmVhdGUudGFiKTtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZGltYWdlJyk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4uaG9tZUNhcmQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGluaXQgfVxuICAgIH1cbikoKVxuXG5leHBvcnQgeyBpbml0aWFsUGFnZSwgbmF2Q3JlYXRlLCBtYWluIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvY29udGFjdC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=