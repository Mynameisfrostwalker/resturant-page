/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/caviar.jpg":
/*!*******************************!*\
  !*** ./src/images/caviar.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a5f420a853124563dec.jpg";

/***/ }),

/***/ "./src/images/pizza.jpeg":
/*!*******************************!*\
  !*** ./src/images/pizza.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49b4b88477628f3943ef.jpeg";

/***/ }),

/***/ "./src/images/truffles.jpeg":
/*!**********************************!*\
  !*** ./src/images/truffles.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "027d0c8fad6607758422.jpeg";

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
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ "./src/scripts/pageload.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/scripts/menu.js");



const changeActive = (
    function() {
        const change = () => {
            if (_pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[0].classList.contains('active')) {
                _pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[0].classList.remove('active');
                removePrevCard.home()
            }
            if (_pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[1].classList.contains('active')) {
                _pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[1].classList.remove('active');
                removePrevCard.menu();
            }
            _pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[2].classList.add('active');
        }
        return { change }
    }
)()

const removePrevCard = (
    function() {
        const home = () => {
            _pageload_js__WEBPACK_IMPORTED_MODULE_0__.main.homeCard.classList.add('exit');
            setTimeout(() => {
                _pageload_js__WEBPACK_IMPORTED_MODULE_0__.main.homeCard.remove()
                _pageload_js__WEBPACK_IMPORTED_MODULE_0__.main.homeCard.classList.remove('exit');
            }, 500);
        }
        const menu = () => {
            _menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuCard.menuCard.classList.add('exit');
            setTimeout(() => {
                _menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuCard.menuCard.remove()
                _menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuCard.menuCard.classList.remove('exit');
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
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ "./src/scripts/pageload.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/scripts/contact.js");
/* harmony import */ var _images_pizza_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/pizza.jpeg */ "./src/images/pizza.jpeg");
/* harmony import */ var _images_truffles_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/truffles.jpeg */ "./src/images/truffles.jpeg");
/* harmony import */ var _images_caviar_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/caviar.jpg */ "./src/images/caviar.jpg");






const changeActive = (
    function() {
        const change = () => {
            if (_pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[0].classList.contains('active')) {
                _pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[0].classList.remove('active');
                removePrevCard.home()
            }
            if (_pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[2].classList.contains('active')) {
                _pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[2].classList.remove('active');
                removePrevCard.contact()
            }
            _pageload_js__WEBPACK_IMPORTED_MODULE_0__.navCreate.tab.children[0].children[1].classList.add('active');
        }
        return { change }
    }
)()

const removePrevCard = (
    function() {
        const home = () => {
            _pageload_js__WEBPACK_IMPORTED_MODULE_0__.main.homeCard.classList.add('exit');
            setTimeout(() => {
                _pageload_js__WEBPACK_IMPORTED_MODULE_0__.main.homeCard.remove()
                _pageload_js__WEBPACK_IMPORTED_MODULE_0__.main.homeCard.classList.remove('exit');
            }, 500);
        }
        const contact = () => {
            _contact_js__WEBPACK_IMPORTED_MODULE_1__.createContactCard.contactCard.classList.add('exit');
            setTimeout(() => {
                _contact_js__WEBPACK_IMPORTED_MODULE_1__.createContactCard.contactCard.remove()
                _contact_js__WEBPACK_IMPORTED_MODULE_1__.createContactCard.contactCard.classList.remove('exit');
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
        let pizzaDiv = createDivs(pizza, _images_pizza_jpeg__WEBPACK_IMPORTED_MODULE_2__, 'La pizza délicieusement divine', 'pizza').name;
        let caviarDiv = createDivs(caviar, _images_caviar_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Le caviar du haut des cieux', 'caviar').name;
        let trufflesDiv = createDivs(truffles, _images_truffles_jpeg__WEBPACK_IMPORTED_MODULE_3__, 'La bonté terrestre des reins de la terre', 'truffles').name;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9zY3JpcHRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3NjcmlwdHMvcGFnZWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNKOztBQUUzQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0dBQXdEO0FBQ3hFLGdCQUFnQixnR0FBc0Q7QUFDdEU7QUFDQTtBQUNBLGdCQUFnQixrR0FBd0Q7QUFDeEUsZ0JBQWdCLGdHQUFzRDtBQUN0RTtBQUNBO0FBQ0EsWUFBWSw2RkFBbUQ7QUFDL0Q7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFFQUEyQjtBQUN2QztBQUNBLGdCQUFnQiw4REFBb0I7QUFDcEMsZ0JBQWdCLHdFQUE4QjtBQUM5Qyxh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RTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7VUNmQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJjb250YWN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5hdkNyZWF0ZSwgbWFpbiB9IGZyb20gJy4vcGFnZWxvYWQuanMnXG5pbXBvcnQgeyBjcmVhdGVNZW51Q2FyZCB9IGZyb20gJy4vbWVudS5qcyc7XG5cbmNvbnN0IGNoYW5nZUFjdGl2ZSA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUHJldkNhcmQuaG9tZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgbmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICByZW1vdmVQcmV2Q2FyZC5tZW51KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXZDcmVhdGUudGFiLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzJdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNoYW5nZSB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IHJlbW92ZVByZXZDYXJkID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBob21lID0gKCkgPT4ge1xuICAgICAgICAgICAgbWFpbi5ob21lQ2FyZC5jbGFzc0xpc3QuYWRkKCdleGl0Jyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluLmhvbWVDYXJkLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgbWFpbi5ob21lQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdleGl0Jyk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVNZW51Q2FyZC5tZW51Q2FyZC5jbGFzc0xpc3QuYWRkKCdleGl0Jyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVNZW51Q2FyZC5tZW51Q2FyZC5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIGNyZWF0ZU1lbnVDYXJkLm1lbnVDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2V4aXQnKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgaG9tZSwgbWVudSB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IGNyZWF0ZUNvbnRhY3RDYXJkID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjb250YWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0Q2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RDYXJkJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIEluZm8udGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyBhbmQgdGVsbCB1cyB3aGF0IHlvdSB0aGluayEnO1xuICAgICAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChJbmZvKTtcbiAgICAgICAgY29uc3QgY29udGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIE51bS50ZXh0Q29udGVudCA9IGBOdW1iZXI6XG4gICAgICAgIDEyMyA0NTYgNzg5YDtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IGBBZGRyZXNzOlxuICAgICAgICBIb2xseXdvb2QgQm91bGV2YXJkIDQyLCBMb3MgQW5nZWxlcywgVVNBYDtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29udGFjdHMuYXBwZW5kQ2hpbGQoTnVtKTtcbiAgICAgICAgICAgIGNvbnRhY3RzLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgICAgICAgICAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuICAgICAgICAgICAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSwgY29udGFjdENhcmQgfVxuICAgIH1cbikoKVxuXG5jb25zdCBjb250YWN0ID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlQWN0aXZlLmNoYW5nZSgpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlQ29udGFjdENhcmQuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0Q2FyZC5jb250YWN0Q2FyZClcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjcmVhdGUgfVxuICAgIH1cbikoKVxuXG5leHBvcnQgeyBjb250YWN0LCBjcmVhdGVDb250YWN0Q2FyZCB9IiwiaW1wb3J0IHsgbmF2Q3JlYXRlLCBtYWluIH0gZnJvbSAnLi9wYWdlbG9hZC5qcydcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RDYXJkIH0gZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBQaXp6YSBmcm9tICcuLi9pbWFnZXMvcGl6emEuanBlZydcbmltcG9ydCBUcnVmZmxlcyBmcm9tICcuLi9pbWFnZXMvdHJ1ZmZsZXMuanBlZydcbmltcG9ydCBDYXZpYXIgZnJvbSAnLi4vaW1hZ2VzL2Nhdmlhci5qcGcnXG5cbmNvbnN0IGNoYW5nZUFjdGl2ZSA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUHJldkNhcmQuaG9tZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgbmF2Q3JlYXRlLnRhYi5jaGlsZHJlblswXS5jaGlsZHJlblsyXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICByZW1vdmVQcmV2Q2FyZC5jb250YWN0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdkNyZWF0ZS50YWIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY2hhbmdlIH1cbiAgICB9XG4pKClcblxuY29uc3QgcmVtb3ZlUHJldkNhcmQgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBtYWluLmhvbWVDYXJkLmNsYXNzTGlzdC5hZGQoJ2V4aXQnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW4uaG9tZUNhcmQucmVtb3ZlKClcbiAgICAgICAgICAgICAgICBtYWluLmhvbWVDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2V4aXQnKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGFjdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRhY3RDYXJkLmNvbnRhY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ2V4aXQnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUNvbnRhY3RDYXJkLmNvbnRhY3RDYXJkLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgY3JlYXRlQ29udGFjdENhcmQuY29udGFjdENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZXhpdCcpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBob21lLCBjb250YWN0IH1cbiAgICB9XG4pKClcblxuY29uc3QgY3JlYXRlRGl2cyA9IChuYW1lLCBzcmMsIHdvcmRzLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtkZXNjcmlwdGlvbn1EaXZgKTtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2Zvb2QnKTtcbiAgICBjb25zdCBteUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIG15SW1nLmlkID0gYCR7ZGVzY3JpcHRpb259aW1nYDtcbiAgICBteUltZy5zcmMgPSBzcmM7XG4gICAgbXlJbWcuYWx0ID0gYEltYWdlIG9mICR7ZGVzY3JpcHRpb259YDtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2Rlc2NyaXB0aW9ufXRleHRgKVxuICAgIHRleHQudGV4dENvbnRlbnQgPSB3b3JkcztcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHRzJylcbiAgICBuYW1lLmFwcGVuZENoaWxkKG15SW1nKTtcbiAgICBuYW1lLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIHJldHVybiB7IG5hbWUgfVxufVxuXG5jb25zdCBjcmVhdGVNZW51Q2FyZCA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUNhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Q2FyZCcpO1xuICAgICAgICBjb25zdCBwaXp6YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgY2F2aWFyID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB0cnVmZmxlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHBpenphRGl2ID0gY3JlYXRlRGl2cyhwaXp6YSwgUGl6emEsICdMYSBwaXp6YSBkw6lsaWNpZXVzZW1lbnQgZGl2aW5lJywgJ3BpenphJykubmFtZTtcbiAgICAgICAgbGV0IGNhdmlhckRpdiA9IGNyZWF0ZURpdnMoY2F2aWFyLCBDYXZpYXIsICdMZSBjYXZpYXIgZHUgaGF1dCBkZXMgY2lldXgnLCAnY2F2aWFyJykubmFtZTtcbiAgICAgICAgbGV0IHRydWZmbGVzRGl2ID0gY3JlYXRlRGl2cyh0cnVmZmxlcywgVHJ1ZmZsZXMsICdMYSBib250w6kgdGVycmVzdHJlIGRlcyByZWlucyBkZSBsYSB0ZXJyZScsICd0cnVmZmxlcycpLm5hbWU7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKHBpenphRGl2KTtcbiAgICAgICAgICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKGNhdmlhckRpdik7XG4gICAgICAgICAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZCh0cnVmZmxlc0Rpdik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlLCBtZW51Q2FyZCB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IG1lbnUgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VBY3RpdmUuY2hhbmdlKCk7XG4gICAgICAgICAgICBjcmVhdGVNZW51Q2FyZC5jcmVhdGUoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDYXJkLm1lbnVDYXJkKSB9LCA1MDApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlIH1cbiAgICB9XG4pKClcblxuZXhwb3J0IHsgbWVudSwgY3JlYXRlTWVudUNhcmQgfSIsImNvbnN0IG5hdkNyZWF0ZSA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhYi1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IHRhYlVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgdGFiMWxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdGFiMWxpLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFiMWxpJyk7XG4gICAgICAgIHRhYjFsaS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICAgICAgY29uc3QgdGFiMmxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdGFiMmxpLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFiMmxpJyk7XG4gICAgICAgIHRhYjJsaS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICAgICAgY29uc3QgdGFiM2xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdGFiM2xpLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFiM2xpJyk7XG4gICAgICAgIHRhYjNsaS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGFiMWxpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKHRhYjJsaS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgdGFiMmxpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhYjNsaS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgdGFiM2xpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFiVWwuYXBwZW5kQ2hpbGQodGFiMWxpKTtcbiAgICAgICAgICAgIHRhYlVsLmFwcGVuZENoaWxkKHRhYjJsaSk7XG4gICAgICAgICAgICB0YWJVbC5hcHBlbmRDaGlsZCh0YWIzbGkpO1xuICAgICAgICAgICAgdGFiLmFwcGVuZENoaWxkKHRhYlVsKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSwgdGFiIH07XG4gICAgfVxuKSgpXG5cblxuY29uc3QgbWFpbiA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgaG9tZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZUNhcmQuc2V0QXR0cmlidXRlKCdpZCcsIFwiaG9tZUNhcmRcIilcbiAgICAgICAgY29uc3QgaG9tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lSGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnSG9tZWhlYWRlcicpXG4gICAgICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIkxlIEZyb3N0V2Fsa2VyJ3NcIjtcbiAgICAgICAgaG9tZUhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgICAgICAgY29uc3QgaG9tZU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZU1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdIb21lbWFpbicpO1xuICAgICAgICBjb25zdCBtYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbWFpblRleHQudGV4dENvbnRlbnQgPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cbiAgICAgICAgTnVsbGEgaW1wZXJkaWV0IGVuaW0gZXJvcywgaWQgZGlnbmlzc2ltIGVzdCBwaGFyZXRyYSB2ZXN0aWJ1bHVtLiBJbiBjb252YWxsaXMsIFxuICAgICAgICBmZWxpcyB1dCBibGFuZGl0IHRlbXB1cywgbnVsbGEgaXBzdW0gcmhvbmN1cyBtYXVyaXMsIGluIGdyYXZpZGEgbWF1cmlzIGFyY3UgYWMgXG4gICAgICAgIGVzdC4gRnVzY2UgbW9sZXN0aWUgbmVxdWUgbmVjIHRvcnRvciBsb2JvcnRpcyBwb3J0dGl0b3IuIFBlbGxlbnRlc3F1ZSBhYyBcbiAgICAgICAgZmVybWVudHVtIGxvcmVtLiBWaXZhbXVzIGV0IGJsYW5kaXQgbGliZXJvLiBQcm9pbiBjb25kaW1lbnR1bSBlZ2VzdGFzIG1ldHVzIFxuICAgICAgICBuZWMgY29uZGltZW50dW0uIE51bGxhIGZhY2lsaXNpLiBWaXZhbXVzIGRpYW0gbWFzc2EsIGRpZ25pc3NpbSBzZWQgZmluaWJ1cyBhdCwgXG4gICAgICAgIHBlbGxlbnRlc3F1ZSBlZ2V0IHNlbS5gO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBob21lTWFpbi5hcHBlbmRDaGlsZChtYWluVGV4dCk7XG4gICAgICAgICAgICBob21lQ2FyZC5hcHBlbmRDaGlsZChob21lSGVhZGVyKTtcbiAgICAgICAgICAgIGhvbWVDYXJkLmFwcGVuZENoaWxkKGhvbWVNYWluKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjcmVhdGUsIGhvbWVDYXJkIH1cbiAgICB9XG4pKClcblxuY29uc3QgaW5pdGlhbFBhZ2UgPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuICAgICAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2Q3JlYXRlLmNyZWF0ZSgpO1xuICAgICAgICAgICAgbWFpbi5jcmVhdGUoKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2Q3JlYXRlLnRhYik7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmRpbWFnZScpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluLmhvbWVDYXJkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBpbml0IH1cbiAgICB9XG4pKClcblxuZXhwb3J0IHsgaW5pdGlhbFBhZ2UsIG5hdkNyZWF0ZSwgbWFpbiB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9jb250YWN0LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==