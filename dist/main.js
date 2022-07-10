/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/BucketList.js":
/*!***************************!*\
  !*** ./src/BucketList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BucketList\": () => (/* binding */ BucketList)\n/* harmony export */ });\nclass BucketList {\n    constructor() {\n        this.locations = [];\n    }\n\n    add(location) {\n        this.locations.push(location);\n    };\n    \n    remove(car) {\n        this.locations = this.locations.filter((existingLocation) => existingLocation != location);\n    }\n}\n\n//# sourceURL=webpack://es6_modules/./src/BucketList.js?");

/***/ }),

/***/ "./src/Location.js":
/*!*************************!*\
  !*** ./src/Location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Location\": () => (/* binding */ Location)\n/* harmony export */ });\nclass Location {\n    constructor(location, topThing, estCost) {\n        this.location = location;\n        this.topThing = topThing;\n        this.estCost = estCost;\n    }\n};\n\n//# sourceURL=webpack://es6_modules/./src/Location.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Location */ \"./src/Location.js\");\n/* harmony import */ var _BucketList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BucketList */ \"./src/BucketList.js\");\n\n\n\n// Form Selections\nlet form = document.querySelector(\"#submitForm\");\nlet locationInput = document.querySelector(\"#locationInput\");\nlet topThingInput = document.querySelector(\"#topThingInput\");\nlet estCostInput = document.querySelector(\"#estCostInput\");\n\n// Display Selections\nlet bucketListUl = document.querySelector(\"#bucketListContainer > ul\");\nlet locationResult = document.querySelector(\"#location\");\nlet topThingResult = document.querySelector(\"#topThing\");\nlet estCostResult = document.querySelector(\"#estCost\");\nlet removeBtn = document.querySelector(\"#removeBtn\");\n\n// Script Values\nlet bucketList = new _BucketList__WEBPACK_IMPORTED_MODULE_1__.BucketList();\n\n// Event Listeners\n// Form Submitted\nform.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n\n    let location = locationInput.value;\n    let topThing = topThingInput.value;\n    let estCost = estCostInput.value;\n    \n    // Will make new location from inputs\n    let newLocation = new _Location__WEBPACK_IMPORTED_MODULE_0__.Location(location, topThing, estCost)\n\n    // Will add location to bucket list\n    bucketList.add(newLocation);\n\n    // Will update dom\n    let li = document.createElement(\"li\");\n    li.classList.add(\"list-group-item\");\n    li.textContent = newLocation.location;\n\n    // li is clicked\n    li.addEventListener(\"click\", (event) => {\n        // will display location details in card\n        locationResult.textContent = newLocation.location;\n        topThingResult.textContent = newLocation.topThing;\n        estCostResult.textContent = newLocation.estCost;\n\n        // enable remove button on card\n        removeBtn.disabled = false;\n        removeBtn.onclick = (event) => {\n            // removes location from bucket list\n            bucketList.remove(newLocation);\n\n            // reset card display values\n            locationResult.textContent = \"\";\n            topThingResult.textContent = \"\";\n            estCostResult.textContent = \"\";\n\n            // disabled remove button\n            removeBtn.disabled = true;\n\n            // remove li from dom\n            bucketListUl.removeChild(li);\n        };\n    });\n\n    bucketListUl.appendChild(li);\n\n    // Clear Form Inputs\n    locationInput.value = \"\";\n    topThingInput.value = \"\";\n    estCostInput.value = \"\";\n})\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;