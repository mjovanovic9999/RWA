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
        el.innerHTML = this.ime + "<br>" + this.prezime + "<br>" + this.godine;
        this.el = el;
        el.classList.add("covek");
        host.append(el);
    }
    obrisi() {
        this.el.remove();
    }
}


/***/ }),

/***/ "./src/prikaz.ts":
/*!***********************!*\
  !*** ./src/prikaz.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prikaz": () => (/* binding */ Prikaz)
/* harmony export */ });
/* harmony import */ var _covek__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./covek */ "./src/covek.ts");

class Prikaz {
    constructor(niz) {
        this.niz = niz;
    }
    klik(a) {
        this.niz.push(a);
    }
    inicijalno() {
        let host = document.querySelector("body");
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
        dugme.innerHTML = "Dodaj u red";
        el.append(dugme);
        dugme.onclick = (ev) => {
            if (imeTb.value === "" || prezimeTb.value === "" || godineUnos.value === "" || parseInt(godineUnos.value) < 1)
                throw new Error("Greska! Probajte opet");
            const a = new _covek__WEBPACK_IMPORTED_MODULE_0__.Covek(imeTb.value, prezimeTb.value, parseInt(godineUnos.value));
            a.crtaj(kont);
            this.klik(a);
        };
        dugme = document.createElement("button");
        dugme.innerHTML = "Zavrsio";
        el.append(dugme);
        dugme.onclick = (ev) => {
            if (this.niz.length === 0)
                alert("Nema vise ljudi koji cekaju");
            else
                this.niz.shift().obrisi();
        };
        let odv = document.createElement("div");
        odv.className = "odvajanje";
        host.append(odv);
        let kont = document.createElement("div");
        kont.className = "kont";
        host.append(kont);
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
/* harmony import */ var _prikaz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prikaz */ "./src/prikaz.ts");

const ljudi = new Array();
const prikaz = new _prikaz__WEBPACK_IMPORTED_MODULE_0__.Prikaz(ljudi);
prikaz.inicijalno();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yd2EvLi9zcmMvY292ZWsudHMiLCJ3ZWJwYWNrOi8vcndhLy4vc3JjL3ByaWthei50cyIsIndlYnBhY2s6Ly9yd2Evd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcndhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yd2Evd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yd2Evd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yd2EvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmdDO0FBQ3pCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5Q0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ2xDO0FBQ0EsbUJBQW1CLDJDQUFNO0FBQ3pCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb3ZlayB7XHJcbiAgICBjb25zdHJ1Y3RvcihpbWUsIHByZXppbWUsIGdvZGluZSkge1xyXG4gICAgICAgIHRoaXMuaW1lID0gaW1lO1xyXG4gICAgICAgIHRoaXMucHJlemltZSA9IHByZXppbWU7XHJcbiAgICAgICAgdGhpcy5nb2RpbmUgPSBnb2RpbmU7XHJcbiAgICB9XHJcbiAgICBjcnRhaihob3N0KSB7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcclxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gdGhpcy5pbWUgKyBcIjxicj5cIiArIHRoaXMucHJlemltZSArIFwiPGJyPlwiICsgdGhpcy5nb2RpbmU7XHJcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJjb3Zla1wiKTtcclxuICAgICAgICBob3N0LmFwcGVuZChlbCk7XHJcbiAgICB9XHJcbiAgICBvYnJpc2koKSB7XHJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb3ZlayB9IGZyb20gJy4vY292ZWsnO1xyXG5leHBvcnQgY2xhc3MgUHJpa2F6IHtcclxuICAgIGNvbnN0cnVjdG9yKG5peikge1xyXG4gICAgICAgIHRoaXMubml6ID0gbml6O1xyXG4gICAgfVxyXG4gICAga2xpayhhKSB7XHJcbiAgICAgICAgdGhpcy5uaXoucHVzaChhKTtcclxuICAgIH1cclxuICAgIGluaWNpamFsbm8oKSB7XHJcbiAgICAgICAgbGV0IGhvc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBpbWVUYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBlbC5hcHBlbmQoaW1lVGIpO1xyXG4gICAgICAgIGxldCBpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgaW1lLmlubmVySFRNTCA9IFwiSW1lXCI7XHJcbiAgICAgICAgZWwuYXBwZW5kKGltZSk7XHJcbiAgICAgICAgZWwuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4gICAgICAgIGxldCBwcmV6aW1lVGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgZWwuYXBwZW5kKHByZXppbWVUYik7XHJcbiAgICAgICAgbGV0IHByZXppbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgcHJlemltZS5pbm5lckhUTUwgPSBcIlByZXppbWVcIjtcclxuICAgICAgICBlbC5hcHBlbmQocHJlemltZSk7XHJcbiAgICAgICAgZWwuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4gICAgICAgIGxldCBnb2RpbmVVbm9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGdvZGluZVVub3MudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICAgICAgZWwuYXBwZW5kKGdvZGluZVVub3MpO1xyXG4gICAgICAgIGxldCBickdvZGluYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBickdvZGluYS5pbm5lckhUTUwgPSBcIkdvZGluZSBzdGFyb3N0aVwiO1xyXG4gICAgICAgIGVsLmFwcGVuZChickdvZGluYSk7XHJcbiAgICAgICAgaG9zdC5hcHBlbmQoZWwpO1xyXG4gICAgICAgIGVsLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgICBsZXQgZHVnbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGR1Z21lLmlubmVySFRNTCA9IFwiRG9kYWogdSByZWRcIjtcclxuICAgICAgICBlbC5hcHBlbmQoZHVnbWUpO1xyXG4gICAgICAgIGR1Z21lLm9uY2xpY2sgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgaWYgKGltZVRiLnZhbHVlID09PSBcIlwiIHx8IHByZXppbWVUYi52YWx1ZSA9PT0gXCJcIiB8fCBnb2RpbmVVbm9zLnZhbHVlID09PSBcIlwiIHx8IHBhcnNlSW50KGdvZGluZVVub3MudmFsdWUpIDwgMSlcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdyZXNrYSEgUHJvYmFqdGUgb3BldFwiKTtcclxuICAgICAgICAgICAgY29uc3QgYSA9IG5ldyBDb3ZlayhpbWVUYi52YWx1ZSwgcHJlemltZVRiLnZhbHVlLCBwYXJzZUludChnb2RpbmVVbm9zLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIGEuY3J0YWooa29udCk7XHJcbiAgICAgICAgICAgIHRoaXMua2xpayhhKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGR1Z21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBkdWdtZS5pbm5lckhUTUwgPSBcIlphdnJzaW9cIjtcclxuICAgICAgICBlbC5hcHBlbmQoZHVnbWUpO1xyXG4gICAgICAgIGR1Z21lLm9uY2xpY2sgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubml6Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiTmVtYSB2aXNlIGxqdWRpIGtvamkgY2VrYWp1XCIpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5pei5zaGlmdCgpLm9icmlzaSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IG9kdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgb2R2LmNsYXNzTmFtZSA9IFwib2R2YWphbmplXCI7XHJcbiAgICAgICAgaG9zdC5hcHBlbmQob2R2KTtcclxuICAgICAgICBsZXQga29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAga29udC5jbGFzc05hbWUgPSBcImtvbnRcIjtcclxuICAgICAgICBob3N0LmFwcGVuZChrb250KTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFByaWtheiB9IGZyb20gJy4vcHJpa2F6JztcclxuY29uc3QgbGp1ZGkgPSBuZXcgQXJyYXkoKTtcclxuY29uc3QgcHJpa2F6ID0gbmV3IFByaWtheihsanVkaSk7XHJcbnByaWthei5pbmljaWphbG5vKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=