/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prikaz": () => (/* binding */ Prikaz)
/* harmony export */ });
class Prikaz {
    constructor(body) {
        this.host = body;
        this.niz = null;
    }
    incicialnoCrtanje() {
        if (this.host === null)
            throw new Error("Greska!");
        let el = document.createElement("div");
        this.host.append(el);
        let kontejner1 = document.createElement("div");
        kontejner1.className = "kontejner";
        this.host.append(kontejner1);
        let kontejner2 = document.createElement("div");
        kontejner2.className = "kontejner";
        this.host.append(kontejner2);
        let broj = document.createElement("input");
        broj.type = "number";
        el.append(broj);
        let button = document.createElement("button");
        button.innerHTML = "Crtaj zadati broj elemenata";
        el.append(button);
        button.onclick = () => {
            kontejner1.innerHTML = null;
            kontejner2.innerHTML = null;
            this.crtaj(parseInt(broj.value));
            broj.value = "";
        };
        button = document.createElement("button");
        button.innerHTML = "Nasumicni broj";
        el.append(button);
        button.onclick = (ev) => {
            kontejner1.innerHTML = null;
            kontejner2.innerHTML = null;
            this.crtaj(Math.round(Math.random() * 8) + 2);
            broj.value = "";
        };
    }
    crtaj(broj) {
        let divs = document.querySelectorAll(".kontejner");
        if (divs.length !== 2)
            throw new Error("Greska");
        const nizPromise = [];
        for (let index = 0; index < broj; index++) {
            let boja = this.getHex();
            let kocka = document.createElement("div");
            kocka.innerHTML = "index" + index + "    ";
            kocka.className = "kocka";
            kocka.style.backgroundColor = boja;
            this.prikaziKocku(kocka).then((el) => divs[0].append(el));
            kocka = document.createElement("div");
            kocka.innerHTML = "index" + index + "";
            kocka.className = "kocka";
            kocka.style.backgroundColor = boja;
            nizPromise.push(this.prikaziKocku(kocka));
        }
        Promise.all(nizPromise).then(el => el.forEach((element, index) => {
            divs[1].append(el[index]);
        }));
    }
    prikaziKocku(kocka) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(kocka), Math.round(Math.random() * 2000));
        });
    }
    getHex() {
        return "#" + Math.round((Math.random() * 16777215)).toString(16);
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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/view.ts");

const prikaz = new _view__WEBPACK_IMPORTED_MODULE_0__.Prikaz(document.body);
prikaz.incicialnoCrtanje();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yd2EvLi9zcmMvdmlldy50cyIsIndlYnBhY2s6Ly9yd2Evd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcndhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yd2Evd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yd2Evd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yd2EvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3BFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05nQztBQUNoQyxtQkFBbUIseUNBQU07QUFDekIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByaWtheiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihib2R5KSB7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gYm9keTtcclxuICAgICAgICB0aGlzLm5peiA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpbmNpY2lhbG5vQ3J0YW5qZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5ob3N0ID09PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHcmVza2EhXCIpO1xyXG4gICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFwcGVuZChlbCk7XHJcbiAgICAgICAgbGV0IGtvbnRlam5lcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGtvbnRlam5lcjEuY2xhc3NOYW1lID0gXCJrb250ZWpuZXJcIjtcclxuICAgICAgICB0aGlzLmhvc3QuYXBwZW5kKGtvbnRlam5lcjEpO1xyXG4gICAgICAgIGxldCBrb250ZWpuZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBrb250ZWpuZXIyLmNsYXNzTmFtZSA9IFwia29udGVqbmVyXCI7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFwcGVuZChrb250ZWpuZXIyKTtcclxuICAgICAgICBsZXQgYnJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBicm9qLnR5cGUgPSBcIm51bWJlclwiO1xyXG4gICAgICAgIGVsLmFwcGVuZChicm9qKTtcclxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gXCJDcnRhaiB6YWRhdGkgYnJvaiBlbGVtZW5hdGFcIjtcclxuICAgICAgICBlbC5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAga29udGVqbmVyMS5pbm5lckhUTUwgPSBudWxsO1xyXG4gICAgICAgICAgICBrb250ZWpuZXIyLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY3J0YWoocGFyc2VJbnQoYnJvai52YWx1ZSkpO1xyXG4gICAgICAgICAgICBicm9qLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IFwiTmFzdW1pY25pIGJyb2pcIjtcclxuICAgICAgICBlbC5hcHBlbmQoYnV0dG9uKTtcclxuICAgICAgICBidXR0b24ub25jbGljayA9IChldikgPT4ge1xyXG4gICAgICAgICAgICBrb250ZWpuZXIxLmlubmVySFRNTCA9IG51bGw7XHJcbiAgICAgICAgICAgIGtvbnRlam5lcjIuaW5uZXJIVE1MID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5jcnRhaihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA4KSArIDIpO1xyXG4gICAgICAgICAgICBicm9qLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY3J0YWooYnJvaikge1xyXG4gICAgICAgIGxldCBkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5rb250ZWpuZXJcIik7XHJcbiAgICAgICAgaWYgKGRpdnMubGVuZ3RoICE9PSAyKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHcmVza2FcIik7XHJcbiAgICAgICAgY29uc3Qgbml6UHJvbWlzZSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBicm9qOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBib2phID0gdGhpcy5nZXRIZXgoKTtcclxuICAgICAgICAgICAgbGV0IGtvY2thID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAga29ja2EuaW5uZXJIVE1MID0gXCJpbmRleFwiICsgaW5kZXggKyBcIiAgICBcIjtcclxuICAgICAgICAgICAga29ja2EuY2xhc3NOYW1lID0gXCJrb2NrYVwiO1xyXG4gICAgICAgICAgICBrb2NrYS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBib2phO1xyXG4gICAgICAgICAgICB0aGlzLnByaWthemlLb2NrdShrb2NrYSkudGhlbigoZWwpID0+IGRpdnNbMF0uYXBwZW5kKGVsKSk7XHJcbiAgICAgICAgICAgIGtvY2thID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAga29ja2EuaW5uZXJIVE1MID0gXCJpbmRleFwiICsgaW5kZXggKyBcIlwiO1xyXG4gICAgICAgICAgICBrb2NrYS5jbGFzc05hbWUgPSBcImtvY2thXCI7XHJcbiAgICAgICAgICAgIGtvY2thLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJvamE7XHJcbiAgICAgICAgICAgIG5pelByb21pc2UucHVzaCh0aGlzLnByaWthemlLb2NrdShrb2NrYSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQcm9taXNlLmFsbChuaXpQcm9taXNlKS50aGVuKGVsID0+IGVsLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGRpdnNbMV0uYXBwZW5kKGVsW2luZGV4XSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgcHJpa2F6aUtvY2t1KGtvY2thKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKGtvY2thKSwgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjAwMCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0SGV4KCkge1xyXG4gICAgICAgIHJldHVybiBcIiNcIiArIE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkpLnRvU3RyaW5nKDE2KTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFByaWtheiB9IGZyb20gJy4vdmlldyc7XHJcbmNvbnN0IHByaWtheiA9IG5ldyBQcmlrYXooZG9jdW1lbnQuYm9keSk7XHJcbnByaWthei5pbmNpY2lhbG5vQ3J0YW5qZSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9