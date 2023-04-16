/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/export.js":
/*!***********************!*\
  !*** ./src/export.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Test": () => (/* binding */ Test),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "falarNome": () => (/* binding */ falarNome),
/* harmony export */   "pessoa": () => (/* binding */ pessoa)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var pessoa = {
  nome: 'Thiago',
  sobrenome: 'Augusto',
  idade: 22,
  altura: 1.87
};
function falarNome() {
  return "".concat(pessoa.nome, " ").concat(pessoa.sobrenome);
}
var Test = /*#__PURE__*/_createClass(function Test(nome, sobrenome) {
  _classCallCheck(this, Test);
  this.nome = nome;
  this.sobrenome = sobrenome;
  function falarNome() {
    return "".concat(pessoa.nome, " ").concat(pessoa.sobrenome);
  }
});

/**
 * export { pessoa as pessoa2 };
 * 
 * você consegue ter um export padrão aonde quando você importar você pode coloca qualquer nome que se você cahamar sem as chaves seu export padrão vai ser exportado
 * 
 * export default function nome() { return "nome padrão"};
 *                      OU
 * export { pessoa as default, nome, falaNome, Test}
 * 
 * import dado from './export';
 * 
 * esse dado vai ser a constante nome deste arquivo export.js
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (a, b) {
  return a + b;
});

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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./export */ "./src/export.js");
/** Você consegue importar e exportar variaveis, constantes e funções de um arquivo JS para outro arquivo JS
 * 
 * basta colocar a palavra Import { variavel } from '/.arquivo'; para chamar para o seu arquivo atual 
 * Export { variavel }; para exportar ele para fora deste arquivo
 * 
 * 
*/


/* você consegue renomear uma exportação com as para não ocorrer duplicação de variavel no seu código, nome as nome2
* se você fizer isso no arquivo de origem também funciona export { pessoa as objPessoa }; ae so importar com o novo nome import { objPessoa } from './arquivo';
*/

var pessoa = {
  nome: 'Afonso'
};
var pessoa2 = new _export__WEBPACK_IMPORTED_MODULE_0__.Test('Julia', 'Lima');
console.log(pessoa2);

// console.log(pessoa.nome, objPessoa.nome, falarNome());

/** --------------------------------------------------------
 *  Também é possivel importar todos os arquivos que você exportou
 * 
 * colocando está syntaxe
 * 
 * import * as todosExports from '.arquivo,js'; desde modo todos as variaveis ou métodos que você exportou no seu arquivo vão ficar armazenados dentro de todosExports
*/
//soma é o padrão

console.log(_export__WEBPACK_IMPORTED_MODULE_0__);
console.log((0,_export__WEBPACK_IMPORTED_MODULE_0__["default"])(10, 10));
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map