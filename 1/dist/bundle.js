/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/covek.ts":
/*!**********************!*\
  !*** ./src/covek.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Covek": () => (/* binding */ Covek)
/* harmony export */ });
class Covek {
    constructor(ime, prezime, godine) {
        this.ime = ime;
        this.prezime = prezime;
        this.godine = godine;
    }
    crtaj(host) {
        this.host = host;
        const el = document.createElement("div");
        el.innerHTML = "dfdfdf";
        el.classList.add("covek");
        host.append(el);
    }
}


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
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _covek__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./covek */ "./src/covek.ts");

(function (host) {
    let el = document.createElement("div");
    let imeTb = document.createElement("input");
    el.append(imeTb);
    let ime = document.createElement("label");
    ime.innerHTML = "Ime";
    el.append(ime);
    el.append(document.createElement("div"));
    let prezimeTb = document.createElement("input");
    el.append(prezimeTb);
    let prezime = document.createElement("label");
    prezime.innerHTML = "Prezime";
    el.append(prezime);
    el.append(document.createElement("div"));
    let godineUnos = document.createElement("input");
    godineUnos.type = "number";
    el.append(godineUnos);
    let brGodina = document.createElement("label");
    brGodina.innerHTML = "Godine starosti";
    el.append(brGodina);
    host.append(el);
    el.append(document.createElement("div"));
    let dugme = document.createElement("button");
    dugme.innerHTML = "dodaj";
    el.append(dugme);
    dugme.onclick = function () {
        if (imeTb.innerText === "" || prezimeTb.innerText === "" || brGodina.innerText === " ")
            throw new Error("Neophodna polja nisu popunjena");
        ljudi.push(new _covek__WEBPACK_IMPORTED_MODULE_0__.Covek(imeTb.innerText, prezimeTb.innerText, parseInt(brGodina.innerText)));
    };
    el = document.createElement("div");
    el.className = "odvajanje";
    host.append(el);
})(document.querySelector("body"));
let ljudi = new Array();
ljudi.push(new _covek__WEBPACK_IMPORTED_MODULE_0__.Covek("Tom", "Smith", 56));
ljudi[0].crtaj(document.querySelector("body"));
/*let ljud=new Covek("Tom","Smith",56);
ljud.crtaj(document.querySelector("body"));*/ 

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yd2EvLi9zcmMvY292ZWsudHMiLCJ3ZWJwYWNrOi8vcndhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3J3YS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcndhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcndhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcndhLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlDQUFLO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsZUFBZSx5Q0FBSztBQUNwQjtBQUNBO0FBQ0EsMkNBQTJDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb3ZlayB7XHJcbiAgICBjb25zdHJ1Y3RvcihpbWUsIHByZXppbWUsIGdvZGluZSkge1xyXG4gICAgICAgIHRoaXMuaW1lID0gaW1lO1xyXG4gICAgICAgIHRoaXMucHJlemltZSA9IHByZXppbWU7XHJcbiAgICAgICAgdGhpcy5nb2RpbmUgPSBnb2RpbmU7XHJcbiAgICB9XHJcbiAgICBjcnRhaihob3N0KSB7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcclxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gXCJkZmRmZGZcIjtcclxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiY292ZWtcIik7XHJcbiAgICAgICAgaG9zdC5hcHBlbmQoZWwpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ292ZWsgfSBmcm9tICcuL2NvdmVrJztcclxuKGZ1bmN0aW9uIChob3N0KSB7XHJcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGltZVRiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZWwuYXBwZW5kKGltZVRiKTtcclxuICAgIGxldCBpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBpbWUuaW5uZXJIVE1MID0gXCJJbWVcIjtcclxuICAgIGVsLmFwcGVuZChpbWUpO1xyXG4gICAgZWwuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4gICAgbGV0IHByZXppbWVUYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGVsLmFwcGVuZChwcmV6aW1lVGIpO1xyXG4gICAgbGV0IHByZXppbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBwcmV6aW1lLmlubmVySFRNTCA9IFwiUHJlemltZVwiO1xyXG4gICAgZWwuYXBwZW5kKHByZXppbWUpO1xyXG4gICAgZWwuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4gICAgbGV0IGdvZGluZVVub3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBnb2RpbmVVbm9zLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgZWwuYXBwZW5kKGdvZGluZVVub3MpO1xyXG4gICAgbGV0IGJyR29kaW5hID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgYnJHb2RpbmEuaW5uZXJIVE1MID0gXCJHb2RpbmUgc3Rhcm9zdGlcIjtcclxuICAgIGVsLmFwcGVuZChickdvZGluYSk7XHJcbiAgICBob3N0LmFwcGVuZChlbCk7XHJcbiAgICBlbC5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICBsZXQgZHVnbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZHVnbWUuaW5uZXJIVE1MID0gXCJkb2RhalwiO1xyXG4gICAgZWwuYXBwZW5kKGR1Z21lKTtcclxuICAgIGR1Z21lLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGltZVRiLmlubmVyVGV4dCA9PT0gXCJcIiB8fCBwcmV6aW1lVGIuaW5uZXJUZXh0ID09PSBcIlwiIHx8IGJyR29kaW5hLmlubmVyVGV4dCA9PT0gXCIgXCIpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5lb3Bob2RuYSBwb2xqYSBuaXN1IHBvcHVuamVuYVwiKTtcclxuICAgICAgICBsanVkaS5wdXNoKG5ldyBDb3ZlayhpbWVUYi5pbm5lclRleHQsIHByZXppbWVUYi5pbm5lclRleHQsIHBhcnNlSW50KGJyR29kaW5hLmlubmVyVGV4dCkpKTtcclxuICAgIH07XHJcbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbC5jbGFzc05hbWUgPSBcIm9kdmFqYW5qZVwiO1xyXG4gICAgaG9zdC5hcHBlbmQoZWwpO1xyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSk7XHJcbmxldCBsanVkaSA9IG5ldyBBcnJheSgpO1xyXG5sanVkaS5wdXNoKG5ldyBDb3ZlayhcIlRvbVwiLCBcIlNtaXRoXCIsIDU2KSk7XHJcbmxqdWRpWzBdLmNydGFqKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpKTtcclxuLypsZXQgbGp1ZD1uZXcgQ292ZWsoXCJUb21cIixcIlNtaXRoXCIsNTYpO1xyXG5sanVkLmNydGFqKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpKTsqLyBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==