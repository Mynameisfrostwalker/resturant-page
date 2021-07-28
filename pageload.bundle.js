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
/*!*********************************!*\
  !*** ./src/scripts/pageload.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
            tab1li.style.color = 'red';
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPage);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/NTg0NiIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3NjcmlwdHMvcGFnZWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTjJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBLGlFQUFlLFciLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcydcblxuY29uc3QgbmF2Q3JlYXRlID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFiLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgdGFiVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBjb25zdCB0YWIxbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YWIxbGkuc2V0QXR0cmlidXRlKCdpZCcsICd0YWIxbGknKTtcbiAgICAgICAgdGFiMWxpLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgICAgICBjb25zdCB0YWIybGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YWIybGkuc2V0QXR0cmlidXRlKCdpZCcsICd0YWIybGknKTtcbiAgICAgICAgdGFiMmxpLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgICAgICBjb25zdCB0YWIzbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YWIzbGkuc2V0QXR0cmlidXRlKCdpZCcsICd0YWIzbGknKTtcbiAgICAgICAgdGFiM2xpLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0YWIxbGkuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIHRhYlVsLmFwcGVuZENoaWxkKHRhYjFsaSk7XG4gICAgICAgICAgICB0YWJVbC5hcHBlbmRDaGlsZCh0YWIybGkpO1xuICAgICAgICAgICAgdGFiVWwuYXBwZW5kQ2hpbGQodGFiM2xpKTtcbiAgICAgICAgICAgIHRhYi5hcHBlbmRDaGlsZCh0YWJVbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjcmVhdGUsIHRhYiB9O1xuICAgIH1cbikoKVxuXG5cbmNvbnN0IG1haW4gPSAoXG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGhvbWVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBcImhvbWVDYXJkXCIpXG4gICAgICAgIGNvbnN0IGhvbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZUhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0hvbWVoZWFkZXInKVxuICAgICAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJMZSBGcm9zdFdhbGtlcidzXCI7XG4gICAgICAgIGhvbWVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG4gICAgICAgIGNvbnN0IGhvbWVNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVNYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnSG9tZW1haW4nKTtcbiAgICAgICAgY29uc3QgbWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG1haW5UZXh0LnRleHRDb250ZW50ID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXG4gICAgICAgIE51bGxhIGltcGVyZGlldCBlbmltIGVyb3MsIGlkIGRpZ25pc3NpbSBlc3QgcGhhcmV0cmEgdmVzdGlidWx1bS4gSW4gY29udmFsbGlzLCBcbiAgICAgICAgZmVsaXMgdXQgYmxhbmRpdCB0ZW1wdXMsIG51bGxhIGlwc3VtIHJob25jdXMgbWF1cmlzLCBpbiBncmF2aWRhIG1hdXJpcyBhcmN1IGFjIFxuICAgICAgICBlc3QuIEZ1c2NlIG1vbGVzdGllIG5lcXVlIG5lYyB0b3J0b3IgbG9ib3J0aXMgcG9ydHRpdG9yLiBQZWxsZW50ZXNxdWUgYWMgXG4gICAgICAgIGZlcm1lbnR1bSBsb3JlbS4gVml2YW11cyBldCBibGFuZGl0IGxpYmVyby4gUHJvaW4gY29uZGltZW50dW0gZWdlc3RhcyBtZXR1cyBcbiAgICAgICAgbmVjIGNvbmRpbWVudHVtLiBOdWxsYSBmYWNpbGlzaS4gVml2YW11cyBkaWFtIG1hc3NhLCBkaWduaXNzaW0gc2VkIGZpbmlidXMgYXQsIFxuICAgICAgICBwZWxsZW50ZXNxdWUgZWdldCBzZW0uYDtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgaG9tZU1haW4uYXBwZW5kQ2hpbGQobWFpblRleHQpO1xuICAgICAgICAgICAgaG9tZUNhcmQuYXBwZW5kQ2hpbGQoaG9tZUhlYWRlcik7XG4gICAgICAgICAgICBob21lQ2FyZC5hcHBlbmRDaGlsZChob21lTWFpbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlLCBob21lQ2FyZCB9XG4gICAgfVxuKSgpXG5cbmNvbnN0IGluaXRpYWxQYWdlID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdkNyZWF0ZS5jcmVhdGUoKTtcbiAgICAgICAgICAgIG1haW4uY3JlYXRlKCk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkNyZWF0ZS50YWIpO1xuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kaW1hZ2UnKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbi5ob21lQ2FyZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgaW5pdCB9XG4gICAgfVxuKSgpXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==