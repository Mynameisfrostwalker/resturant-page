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

/***/ "./src/scripts/homepage.js":
/*!*********************************!*\
  !*** ./src/scripts/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ "./src/scripts/pageload.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/scripts/menu.js");




const removePrevCard = (
    function() {
        const remove = () => {
            _menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuCard.menuCard.classList.add('exit');
            setTimeout(() => {
                _menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuCard.menuCard.remove()
                _menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuCard.menuCard.classList.remove('exit');
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
            if (_pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[1].classList.contains('active')) {
                _pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[1].classList.remove('active');
            }
            if (_pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[2].classList.contains('active')) {
                _pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[2].classList.remove('active');
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "createMenuCard": () => (/* binding */ createMenuCard)
/* harmony export */ });
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload.js */ "./src/scripts/pageload.js");



const changeActive = (
    function() {
        const change = () => {
            if (_pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[0].classList.contains('active')) {
                _pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[0].classList.remove('active');
            }
            if (_pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[2].classList.contains('active')) {
                _pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[2].classList.remove('active');
            }
            _pageload_js__WEBPACK_IMPORTED_MODULE_1__.navCreate.tab.children[0].children[1].classList.add('active');
        }
        return { change }
    }
)()

const removePrevCard = (
    function() {
        const remove = () => {
            _pageload_js__WEBPACK_IMPORTED_MODULE_1__.main.homeCard.classList.add('exit');
            setTimeout(() => {
                _pageload_js__WEBPACK_IMPORTED_MODULE_1__.main.homeCard.remove()
                _pageload_js__WEBPACK_IMPORTED_MODULE_1__.main.homeCard.classList.remove('exit');
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ "./src/scripts/pageload.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/scripts/menu.js");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage.js */ "./src/scripts/homepage.js");




_pageload_js__WEBPACK_IMPORTED_MODULE_0__.initialPage.init()

_pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[1].addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_1__.menu.create);

_pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[0].addEventListener('click', _homepage_js__WEBPACK_IMPORTED_MODULE_2__.home.create);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9zY3JpcHRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9wYWdlbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDTDs7O0FBRzNDO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkVBQXFDO0FBQ2pEO0FBQ0EsZ0JBQWdCLG9FQUE4QjtBQUM5QyxnQkFBZ0IsOEVBQXdDO0FBQ3hELGFBQWE7QUFDYjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0dBQXdEO0FBQ3hFLGdCQUFnQixnR0FBc0Q7QUFDdEU7QUFDQSxnQkFBZ0Isa0dBQXdEO0FBQ3hFLGdCQUFnQixnR0FBc0Q7QUFDdEU7QUFDQSxZQUFZLDZGQUFtRDtBQUMvRCxZQUFZLHFEQUFXO0FBQ3ZCLGdDQUFnQyx1REFBYTtBQUM3QztBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEMyQjtBQUNvQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtHQUF3RDtBQUN4RSxnQkFBZ0IsZ0dBQXNEO0FBQ3RFO0FBQ0EsZ0JBQWdCLGtHQUF3RDtBQUN4RSxnQkFBZ0IsZ0dBQXNEO0FBQ3RFO0FBQ0EsWUFBWSw2RkFBbUQ7QUFDL0Q7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFFQUEyQjtBQUN2QztBQUNBLGdCQUFnQiw4REFBb0I7QUFDcEMsZ0JBQWdCLHdFQUE4QjtBQUM5QyxhQUFhO0FBQ2I7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTtBQUNBLDhCQUE4QixZQUFZO0FBQzFDO0FBQ0Esd0NBQXdDLFlBQVk7QUFDcEQ7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtDQUErQztBQUM3RTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0UyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7Ozs7Ozs7VUMzRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05zRDtBQUN6QjtBQUNPOztBQUVwQywwREFBZ0I7O0FBRWhCLGdHQUFzRCxVQUFVLDhDQUFXOztBQUUzRSxnR0FBc0QsVUFBVSxxREFBVyxFIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IG1haW4sIG5hdkNyZWF0ZSB9IGZyb20gJy4vcGFnZWxvYWQuanMnO1xuaW1wb3J0IHsgY3JlYXRlTWVudUNhcmQgfSBmcm9tICcuL21lbnUuanMnO1xuXG5cbmNvbnN0IHJlbW92ZVByZXZDYXJkID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCByZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVNZW51Q2FyZC5tZW51Q2FyZC5jbGFzc0xpc3QuYWRkKCdleGl0Jyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVNZW51Q2FyZC5tZW51Q2FyZC5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIGNyZWF0ZU1lbnVDYXJkLm1lbnVDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2V4aXQnKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcmVtb3ZlIH1cbiAgICB9XG4pKClcblxuY29uc3QgaG9tZSA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVByZXZDYXJkLnJlbW92ZSgpO1xuICAgICAgICAgICAgaWYgKG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgbmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBtYWluLmNyZWF0ZSgpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluLmhvbWVDYXJkKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSB9XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IGhvbWUgfSIsImltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJ1xuaW1wb3J0IHsgbmF2Q3JlYXRlLCBtYWluIH0gZnJvbSAnLi9wYWdlbG9hZC5qcydcblxuY29uc3QgY2hhbmdlQWN0aXZlID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgbmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYXZDcmVhdGUudGFiLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBuYXZDcmVhdGUudGFiLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjaGFuZ2UgfVxuICAgIH1cbikoKVxuXG5jb25zdCByZW1vdmVQcmV2Q2FyZCA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgbWFpbi5ob21lQ2FyZC5jbGFzc0xpc3QuYWRkKCdleGl0Jyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluLmhvbWVDYXJkLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgbWFpbi5ob21lQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdleGl0Jyk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHJlbW92ZSB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IGNyZWF0ZURpdnMgPSAobmFtZSwgc3JjLCB3b3JkcywgZGVzY3JpcHRpb24pID0+IHtcbiAgICBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7ZGVzY3JpcHRpb259RGl2YCk7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdmb29kJyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtkZXNjcmlwdGlvbn1pbWdgKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGBJbWFnZSBvZiAke2Rlc2NyaXB0aW9ufWApO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdpbWFnZXMnKVxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7ZGVzY3JpcHRpb259dGV4dGApXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IHdvcmRzO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndGV4dHMnKVxuICAgIG5hbWUuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBuYW1lLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIHJldHVybiB7IG5hbWUgfVxufVxuXG5jb25zdCBjcmVhdGVNZW51Q2FyZCA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUNhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Q2FyZCcpO1xuICAgICAgICBjb25zdCBwaXp6YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgY2F2aWFyID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB0cnVmZmxlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHBpenphRGl2ID0gY3JlYXRlRGl2cyhwaXp6YSwgJy4uL3NyYy9pbWFnZXMvcGl6emEuanBlZycsICdMYSBwaXp6YSBkw6lsaWNpZXVzZW1lbnQgZGl2aW5lJywgJ3BpenphJykubmFtZTtcbiAgICAgICAgbGV0IGNhdmlhckRpdiA9IGNyZWF0ZURpdnMoY2F2aWFyLCAnLi4vc3JjL2ltYWdlcy9jYXZpYXIuanBnJywgJ0xlIGNhdmlhciBkdSBoYXV0IGRlcyBjaWV1eCcsICdjYXZpYXInKS5uYW1lO1xuICAgICAgICBsZXQgdHJ1ZmZsZXNEaXYgPSBjcmVhdGVEaXZzKHRydWZmbGVzLCAnLi4vc3JjL2ltYWdlcy90cnVmZmxlcy5qcGVnJywgJ0xhIGJvbnTDqSB0ZXJyZXN0cmUgZGVzIHJlaW5zIGRlIGxhIHRlcnJlJywgJ3RydWZmbGVzJykubmFtZTtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQocGl6emFEaXYpO1xuICAgICAgICAgICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoY2F2aWFyRGl2KTtcbiAgICAgICAgICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKHRydWZmbGVzRGl2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjcmVhdGUsIG1lbnVDYXJkIH1cbiAgICB9XG4pKClcblxuY29uc3QgbWVudSA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUFjdGl2ZS5jaGFuZ2UoKTtcbiAgICAgICAgICAgIHJlbW92ZVByZXZDYXJkLnJlbW92ZSgpO1xuICAgICAgICAgICAgY3JlYXRlTWVudUNhcmQuY3JlYXRlKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q2FyZC5tZW51Q2FyZCkgfSwgNTAwKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSB9XG4gICAgfVxuKSgpXG5cbmV4cG9ydCB7IG1lbnUsIGNyZWF0ZU1lbnVDYXJkIH0iLCJpbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcydcblxuY29uc3QgbmF2Q3JlYXRlID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFiLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgdGFiVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBjb25zdCB0YWIxbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YWIxbGkuc2V0QXR0cmlidXRlKCdpZCcsICd0YWIxbGknKTtcbiAgICAgICAgdGFiMWxpLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgICAgICBjb25zdCB0YWIybGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YWIybGkuc2V0QXR0cmlidXRlKCdpZCcsICd0YWIybGknKTtcbiAgICAgICAgdGFiMmxpLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgICAgICBjb25zdCB0YWIzbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YWIzbGkuc2V0QXR0cmlidXRlKCdpZCcsICd0YWIzbGknKTtcbiAgICAgICAgdGFiM2xpLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0YWIxbGkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAodGFiMmxpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0YWIybGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFiM2xpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0YWIzbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJVbC5hcHBlbmRDaGlsZCh0YWIxbGkpO1xuICAgICAgICAgICAgdGFiVWwuYXBwZW5kQ2hpbGQodGFiMmxpKTtcbiAgICAgICAgICAgIHRhYlVsLmFwcGVuZENoaWxkKHRhYjNsaSk7XG4gICAgICAgICAgICB0YWIuYXBwZW5kQ2hpbGQodGFiVWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlLCB0YWIgfTtcbiAgICB9XG4pKClcblxuXG5jb25zdCBtYWluID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBob21lQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJob21lQ2FyZFwiKVxuICAgICAgICBjb25zdCBob21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdIb21laGVhZGVyJylcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiTGUgRnJvc3RXYWxrZXInc1wiO1xuICAgICAgICBob21lSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICAgICAgICBjb25zdCBob21lTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lTWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0hvbWVtYWluJyk7XG4gICAgICAgIGNvbnN0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBtYWluVGV4dC50ZXh0Q29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxuICAgICAgICBOdWxsYSBpbXBlcmRpZXQgZW5pbSBlcm9zLCBpZCBkaWduaXNzaW0gZXN0IHBoYXJldHJhIHZlc3RpYnVsdW0uIEluIGNvbnZhbGxpcywgXG4gICAgICAgIGZlbGlzIHV0IGJsYW5kaXQgdGVtcHVzLCBudWxsYSBpcHN1bSByaG9uY3VzIG1hdXJpcywgaW4gZ3JhdmlkYSBtYXVyaXMgYXJjdSBhYyBcbiAgICAgICAgZXN0LiBGdXNjZSBtb2xlc3RpZSBuZXF1ZSBuZWMgdG9ydG9yIGxvYm9ydGlzIHBvcnR0aXRvci4gUGVsbGVudGVzcXVlIGFjIFxuICAgICAgICBmZXJtZW50dW0gbG9yZW0uIFZpdmFtdXMgZXQgYmxhbmRpdCBsaWJlcm8uIFByb2luIGNvbmRpbWVudHVtIGVnZXN0YXMgbWV0dXMgXG4gICAgICAgIG5lYyBjb25kaW1lbnR1bS4gTnVsbGEgZmFjaWxpc2kuIFZpdmFtdXMgZGlhbSBtYXNzYSwgZGlnbmlzc2ltIHNlZCBmaW5pYnVzIGF0LCBcbiAgICAgICAgcGVsbGVudGVzcXVlIGVnZXQgc2VtLmA7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGhvbWVNYWluLmFwcGVuZENoaWxkKG1haW5UZXh0KTtcbiAgICAgICAgICAgIGhvbWVDYXJkLmFwcGVuZENoaWxkKGhvbWVIZWFkZXIpO1xuICAgICAgICAgICAgaG9tZUNhcmQuYXBwZW5kQ2hpbGQoaG9tZU1haW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSwgaG9tZUNhcmQgfVxuICAgIH1cbikoKVxuXG5jb25zdCBpbml0aWFsUGFnZSA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXZDcmVhdGUuY3JlYXRlKCk7XG4gICAgICAgICAgICBtYWluLmNyZWF0ZSgpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZDcmVhdGUudGFiKTtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZGltYWdlJyk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4uaG9tZUNhcmQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGluaXQgfVxuICAgIH1cbikoKVxuXG5leHBvcnQgeyBpbml0aWFsUGFnZSwgbmF2Q3JlYXRlLCBtYWluIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRpYWxQYWdlLCBuYXZDcmVhdGUgfSBmcm9tICcuL3BhZ2Vsb2FkLmpzJ1xuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vbWVudSdcbmltcG9ydCB7IGhvbWUgfSBmcm9tICcuL2hvbWVwYWdlLmpzJ1xuXG5pbml0aWFsUGFnZS5pbml0KClcblxubmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnUuY3JlYXRlKTtcblxubmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWUuY3JlYXRlKTsiXSwic291cmNlUm9vdCI6IiJ9