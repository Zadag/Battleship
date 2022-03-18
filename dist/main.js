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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n\n\nconst game = (0,_modules_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\ngame.init();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/displayboard.js":
/*!*************************************!*\
  !*** ./src/modules/displayboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayBoard)\n/* harmony export */ });\nfunction displayBoard(playerObj) {\n    const root = document.querySelector('#root');\n    const gameboardContainer = document.createElement('div');\n    gameboardContainer.classList.add('gameboard-container');\n    const gameboard = document.createElement('div');\n    gameboard.classList.add('gameboard');\n\n    root.appendChild(gameboardContainer);\n    gameboardContainer.appendChild(gameboard);\n\n    for (let i = 0; i < 10; i += 1) {\n        for (let j = 0; j < 10; j += 1) {\n            const boardCell = document.createElement('div');\n            if (playerObj.board.isCellHit([i, j]) === 'Cell is an unhit ship' || playerObj.board.isCellHit([i, j]) === 'Cell is an unhit water') {\n                boardCell.classList.add('not-hit');\n            }\n            if (playerObj.board.isCellHit([i, j]) === 'Cell is a hit water') {\n                boardCell.classList.add('hit-water');\n            }\n            if (playerObj.board.isCellHit([i, j]) === 'Cell is a hit ship') {\n                boardCell.classList.add('hit-ship');\n            }\n            boardCell.dataset.x = i;\n            boardCell.dataset.y = j;\n            gameboard.appendChild(boardCell);\n            // boardCell.addEventListener('click', (e) => {\n            //     console.log('event added');\n            //     if (e.target.classList.contains('not-hit') && playerObj.isTurn) {\n            //         playerObj.board.recieveAttack([i, j]);\n            //         displayBoard(playerObj);\n            //     } else console.log('error');\n            // });\n        }\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/displayboard.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gameLoop)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/modules/player.js\");\n/* harmony import */ var _displayboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayboard */ \"./src/modules/displayboard.js\");\n\n\n\nfunction gameLoop() {\n    const players = [];\n\n    const changeTurns = () => {\n        if (players[0].isTurn) {\n            players[0].isTurn = false;\n            players[1].isTurn = true;\n        } else {\n            players[0].isTurn = true;\n            players[1].isTurn = false;\n        }\n    };\n\n    const init = (player1Name) => {\n        const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(player1Name, true, false);\n        const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('CPU', false, true);\n        player1.board.placeShip([0, 0], 4, 'horizontal');\n        player1.board.placeShip([3, 3], 3, 'vertical');\n        player1.board.placeShip([5, 5], 2, 'horizontal');\n        player2.board.placeShip([0, 0], 4, 'horizontal');\n        player2.board.placeShip([3, 3], 3, 'vertical');\n        player2.board.placeShip([5, 5], 2, 'horizontal');\n        players.push(player1, player2);\n\n        // while(player1.board.allSunk === false && player2.board.allSunk === false) {\n\n        // }\n        (0,_displayboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(player1);\n        (0,_displayboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(player2);\n    };\n\n    return {\n        init,\n        players,\n        changeTurns,\n    };\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gameboardFactory)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\nfunction gameboardFactory() {\n    const board = [];\n\n    for (let i = 0; i < 10; i += 1) {\n        board.push(Array(10).fill(0));\n    }\n\n    const getBoard = () => [...board];\n\n    const cellStatus = (coords) => {\n        const [x, y] = coords;\n        return board[x][y];\n    };\n\n    const isShip = (coords) => {\n        const [x, y] = coords;\n        return typeof board[x][y] === 'object';\n    };\n\n    const allSunk = () => {\n        for (let i = 0; i < 10; i += 1) {\n            for (let j = 0; j < 10; j += 1) {\n                if (typeof board[i][j] === 'object') {\n                    if (board[i][j].ship.isSunk() === false) return false;\n                }\n            }\n        }\n        return true;\n    };\n\n    const placeShip = (coords, length, allignment) => {\n        const [x, y] = coords;\n        if (allignment === 'horizontal') {\n            if (board[x][y + length] === undefined) return 'error: out of bounds';\n            for (let i = 0; i < length; i += 1) {\n                if (isShip([x, y + i])) return 'error: occupied by ship';\n            }\n            const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length);\n            for (let i = 0; i < length; i += 1) {\n                board[x][y + i] = {\n                    originCoords: [x, y],\n                    ship,\n                };\n            }\n        }\n        if (allignment === 'vertical') {\n            if (board[x + length] === undefined) return 'error: out of bounds';\n            for (let i = 0; i < length; i += 1) {\n                if (isShip([x + i, y])) return 'error: occupied by ship';\n            }\n            const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length);\n            for (let i = 0; i < length; i += 1) {\n                board[x + i][y] = {\n                    originCoords: [x, y],\n                    ship,\n                };\n            }\n        }\n\n        return 'Ship placed';\n    };\n\n    const recieveAttack = (coords) => {\n        const [x, y] = coords;\n        if (isShip(coords)) {\n            // get distance between the ship position hit and its origin then pass it to hit()\n            const origin = board[x][y].originCoords;\n            let diff = (x - origin[0]) + (y - origin[1]);\n            if (diff < 0) diff *= -1;\n            if (!cellStatus(coords).ship.isHit(diff)) {\n                board[x][y].ship.hit(diff);\n                return 'Cell marked as ship hit';\n            }\n            return 'Cell is already hit';\n        }\n        if (!isShip(coords)) {\n            if (cellStatus(coords) !== 1) {\n                board[x][y] = 1;\n                return 'Cell marked as water hit';\n            }\n            return 'Cell is already hit';\n        }\n        return 'Error';\n    };\n\n    const isCellHit = (coords) => {\n        const [x, y] = coords;\n        if (isShip(coords)) {\n            const origin = board[x][y].originCoords;\n            let diff = (x - origin[0]) + (y - origin[1]);\n            if (diff < 0) diff *= -1;\n            if (!cellStatus(coords).ship.isHit(diff)) {\n                return 'Cell is an unhit ship';\n            }\n            return 'Cell is a hit ship';\n        }\n        if (!isShip(coords)) {\n            if (cellStatus(coords) !== 1) {\n                return 'Cell is an unhit water';\n            }\n            return 'Cell is a hit water';\n        }\n        return 'Error';\n    };\n\n    return {\n        getBoard,\n        placeShip,\n        isShip,\n        cellStatus,\n        recieveAttack,\n        allSunk,\n        isCellHit,\n    };\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ playerFactory)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n\n\nfunction playerFactory(playerName, isTurn = false, isComputer = false) {\n    const sendAttack = (playerObj, coords) => {\n        if (playerObj.board.recieveAttack(coords) === 'Cell is already hit') return 'Invalid move';\n        playerObj.board.recieveAttack(coords);\n        return 'Valid move';\n    };\n\n    return {\n        playerName,\n        board: (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n        isComputer,\n        isTurn,\n        sendAttack,\n    };\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shipFactory)\n/* harmony export */ });\nfunction shipFactory(length) {\n    const ship = Array(length).fill(0);\n    const getLength = () => ship.length;\n\n    const isHit = (position) => ship[position] === 1;\n\n    const isSunk = () => {\n        let count = 0;\n        ship.forEach((element) => {\n            if (element === 1) count += 1;\n        });\n        return count === ship.length;\n    };\n\n    const hit = (position) => {\n        ship[position] = 1;\n    };\n\n    return {\n        getLength,\n        isSunk,\n        hit,\n        isHit,\n    };\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

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