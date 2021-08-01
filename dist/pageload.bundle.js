/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************************!*\
  !*** ./src/scripts/pageload.js ***!
  \*********************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3NjcmlwdHMvcGFnZWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBIiwiZmlsZSI6InBhZ2Vsb2FkLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgbmF2Q3JlYXRlID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFiLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgdGFiVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBjb25zdCB0YWIxbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YWIxbGkuc2V0QXR0cmlidXRlKCdpZCcsICd0YWIxbGknKTtcbiAgICAgICAgdGFiMWxpLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgICAgICBjb25zdCB0YWIybGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YWIybGkuc2V0QXR0cmlidXRlKCdpZCcsICd0YWIybGknKTtcbiAgICAgICAgdGFiMmxpLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgICAgICBjb25zdCB0YWIzbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YWIzbGkuc2V0QXR0cmlidXRlKCdpZCcsICd0YWIzbGknKTtcbiAgICAgICAgdGFiM2xpLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgICAgICBjb25zdCBjcmVhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0YWIxbGkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAodGFiMmxpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0YWIybGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFiM2xpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0YWIzbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJVbC5hcHBlbmRDaGlsZCh0YWIxbGkpO1xuICAgICAgICAgICAgdGFiVWwuYXBwZW5kQ2hpbGQodGFiMmxpKTtcbiAgICAgICAgICAgIHRhYlVsLmFwcGVuZENoaWxkKHRhYjNsaSk7XG4gICAgICAgICAgICB0YWIuYXBwZW5kQ2hpbGQodGFiVWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3JlYXRlLCB0YWIgfTtcbiAgICB9XG4pKClcblxuXG5jb25zdCBtYWluID0gKFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBob21lQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJob21lQ2FyZFwiKVxuICAgICAgICBjb25zdCBob21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdIb21laGVhZGVyJylcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiTGUgRnJvc3RXYWxrZXInc1wiO1xuICAgICAgICBob21lSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICAgICAgICBjb25zdCBob21lTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lTWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0hvbWVtYWluJyk7XG4gICAgICAgIGNvbnN0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBtYWluVGV4dC50ZXh0Q29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxuICAgICAgICBOdWxsYSBpbXBlcmRpZXQgZW5pbSBlcm9zLCBpZCBkaWduaXNzaW0gZXN0IHBoYXJldHJhIHZlc3RpYnVsdW0uIEluIGNvbnZhbGxpcywgXG4gICAgICAgIGZlbGlzIHV0IGJsYW5kaXQgdGVtcHVzLCBudWxsYSBpcHN1bSByaG9uY3VzIG1hdXJpcywgaW4gZ3JhdmlkYSBtYXVyaXMgYXJjdSBhYyBcbiAgICAgICAgZXN0LiBGdXNjZSBtb2xlc3RpZSBuZXF1ZSBuZWMgdG9ydG9yIGxvYm9ydGlzIHBvcnR0aXRvci4gUGVsbGVudGVzcXVlIGFjIFxuICAgICAgICBmZXJtZW50dW0gbG9yZW0uIFZpdmFtdXMgZXQgYmxhbmRpdCBsaWJlcm8uIFByb2luIGNvbmRpbWVudHVtIGVnZXN0YXMgbWV0dXMgXG4gICAgICAgIG5lYyBjb25kaW1lbnR1bS4gTnVsbGEgZmFjaWxpc2kuIFZpdmFtdXMgZGlhbSBtYXNzYSwgZGlnbmlzc2ltIHNlZCBmaW5pYnVzIGF0LCBcbiAgICAgICAgcGVsbGVudGVzcXVlIGVnZXQgc2VtLmA7XG4gICAgICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGhvbWVNYWluLmFwcGVuZENoaWxkKG1haW5UZXh0KTtcbiAgICAgICAgICAgIGhvbWVDYXJkLmFwcGVuZENoaWxkKGhvbWVIZWFkZXIpO1xuICAgICAgICAgICAgaG9tZUNhcmQuYXBwZW5kQ2hpbGQoaG9tZU1haW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNyZWF0ZSwgaG9tZUNhcmQgfVxuICAgIH1cbikoKVxuXG5jb25zdCBpbml0aWFsUGFnZSA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXZDcmVhdGUuY3JlYXRlKCk7XG4gICAgICAgICAgICBtYWluLmNyZWF0ZSgpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZDcmVhdGUudGFiKTtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZGltYWdlJyk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4uaG9tZUNhcmQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGluaXQgfVxuICAgIH1cbikoKVxuXG5leHBvcnQgeyBpbml0aWFsUGFnZSwgbmF2Q3JlYXRlLCBtYWluIH0iXSwic291cmNlUm9vdCI6IiJ9