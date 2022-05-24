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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_startScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/startScreen */ \"./src/modules/startScreen.js\");\n\n\n\n\n(0,_modules_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_startScreen__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n// const game = gameLoop();\n\n// game.init();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/displayboard.js":
/*!*************************************!*\
  !*** ./src/modules/displayboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayBoard)\n/* harmony export */ });\nfunction displayBoard(playerObj) {\n    const content = document.querySelector('#content');\n    const gameboardContainer = document.createElement('div');\n    gameboardContainer.classList.add('gameboard-container');\n    if (playerObj.playerName === 'CPU') {\n        gameboardContainer.classList.add('CPU-gameboard');\n    } else {\n        gameboardContainer.classList.add('player-gameboard');\n    }\n    const gameboard = document.createElement('div');\n    gameboard.classList.add('gameboard');\n\n    content.appendChild(gameboardContainer);\n    gameboardContainer.appendChild(gameboard);\n\n    for (let i = 0; i < 10; i += 1) {\n        for (let j = 0; j < 10; j += 1) {\n            const boardCell = document.createElement('div');\n            if (playerObj.board.isCellHit([i, j]) === 'Cell is an unhit ship' || playerObj.board.isCellHit([i, j]) === 'Cell is an unhit water') {\n                boardCell.classList.add('not-hit');\n            }\n            if (playerObj.board.isCellHit([i, j]) === 'Cell is a hit water') {\n                boardCell.classList.add('hit-water');\n            }\n            if (playerObj.board.isCellHit([i, j]) === 'Cell is a hit ship') {\n                boardCell.classList.add('hit-ship');\n            }\n            boardCell.dataset.x = i;\n            boardCell.dataset.y = j;\n            gameboard.appendChild(boardCell);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/displayboard.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gameLoop)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/modules/player.js\");\n/* harmony import */ var _displayboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayboard */ \"./src/modules/displayboard.js\");\n/* harmony import */ var _removeBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeBoard */ \"./src/modules/removeBoard.js\");\n\n\n\n\nfunction gameLoop() {\n    const players = [];\n\n    const changeTurns = () => {\n        if (players[0].isTurn) {\n            players[0].isTurn = false;\n            players[1].isTurn = true;\n        } else {\n            players[0].isTurn = true;\n            players[1].isTurn = false;\n        }\n    };\n\n    const addGameboardEvents = () => {\n        const playerBoard = document.querySelector('.player-gameboard');\n        const cpuBoard = document.querySelector('.CPU-gameboard');\n\n        playerBoard.addEventListener('click', (e) => {\n            const { x, y } = e.target.dataset;\n            if (players[0].isTurn && (players[0].board.isCellHit([x, y]) === 'Cell is an unhit ship' || players[0].board.isCellHit([x, y]) === 'Cell is an unhit water')) {\n                players[0].board.recieveAttack([x, y]);\n                (0,_removeBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(playerBoard);\n                (0,_removeBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cpuBoard);\n                (0,_displayboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(players[0]);\n                (0,_displayboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(players[1]);\n                if (players[0].board.allSunk()) {\n                    console.log(`${players[1].playerName} Won`);\n                    return;\n                }\n                addGameboardEvents();\n                players[0].isTurn = false;\n                players[1].isTurn = true;\n            }\n        });\n\n        cpuBoard.addEventListener('click', (e) => {\n            const { x, y } = e.target.dataset;\n            if (players[1].isTurn && (players[1].board.isCellHit([x, y]) === 'Cell is an unhit ship' || players[1].board.isCellHit([x, y]) === 'Cell is an unhit water')) {\n                players[1].board.recieveAttack([x, y]);\n                (0,_removeBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cpuBoard);\n                (0,_removeBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(playerBoard);\n                (0,_displayboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(players[0]);\n                (0,_displayboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(players[1]);\n                if (players[1].board.allSunk()) {\n                    console.log(`${players[0].playerName} Won`);\n                    return;\n                }\n                addGameboardEvents();\n                players[0].isTurn = true;\n                players[1].isTurn = false;\n            }\n        });\n    };\n\n    const init = (player1Name) => {\n        const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(player1Name, true, false);\n        const player2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('CPU', false, true);\n        player1.board.placeShip([0, 0], 4, 'horizontal');\n        player1.board.placeShip([3, 3], 3, 'vertical');\n        player1.board.placeShip([5, 5], 2, 'horizontal');\n        player2.board.placeShip([0, 0], 4, 'horizontal');\n        player2.board.placeShip([3, 3], 3, 'vertical');\n        player2.board.placeShip([5, 5], 2, 'horizontal');\n        players.push(player1, player2);\n        (0,_displayboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(player1);\n        (0,_displayboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(player2);\n        addGameboardEvents();\n    };\n\n    return {\n        init,\n        players,\n        changeTurns,\n        addGameboardEvents,\n    };\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gameboardFactory)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\nfunction gameboardFactory() {\n    const board = [];\n\n    for (let i = 0; i < 10; i += 1) {\n        board.push(Array(10).fill(0));\n    }\n\n    const getBoard = () => [...board];\n\n    const cellStatus = (coords) => {\n        const [x, y] = coords;\n        return board[x][y];\n    };\n\n    const isShip = (coords) => {\n        const [x, y] = coords;\n        return typeof board[x][y] === 'object';\n    };\n\n    const allSunk = () => {\n        for (let i = 0; i < 10; i += 1) {\n            for (let j = 0; j < 10; j += 1) {\n                if (typeof board[i][j] === 'object') {\n                    if (board[i][j].ship.isSunk() === false) return false;\n                }\n            }\n        }\n        return true;\n    };\n\n    const placeShip = (coords, length, allignment) => {\n        const [x, y] = coords;\n        if (allignment === 'horizontal') {\n            if (board[x][y + length] === undefined) return 'error: out of bounds';\n            for (let i = 0; i < length; i += 1) {\n                if (isShip([x, y + i])) return 'error: occupied by ship';\n            }\n            const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length);\n            for (let i = 0; i < length; i += 1) {\n                board[x][y + i] = {\n                    originCoords: [x, y],\n                    ship,\n                };\n            }\n        }\n        if (allignment === 'vertical') {\n            if (board[x + length] === undefined) return 'error: out of bounds';\n            for (let i = 0; i < length; i += 1) {\n                if (isShip([x + i, y])) return 'error: occupied by ship';\n            }\n            const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(length);\n            for (let i = 0; i < length; i += 1) {\n                board[x + i][y] = {\n                    originCoords: [x, y],\n                    ship,\n                };\n            }\n        }\n\n        return 'Ship placed';\n    };\n\n    const recieveAttack = (coords) => {\n        const [x, y] = coords;\n        if (isShip(coords)) {\n            // get distance between the ship position hit and its origin then pass it to hit()\n            const origin = board[x][y].originCoords;\n            let diff = (x - origin[0]) + (y - origin[1]);\n            if (diff < 0) diff *= -1;\n            if (!cellStatus(coords).ship.isHit(diff)) {\n                board[x][y].ship.hit(diff);\n                return 'Cell marked as ship hit';\n            }\n            return 'Cell is already hit';\n        }\n        if (!isShip(coords)) {\n            if (cellStatus(coords) !== 1) {\n                board[x][y] = 1;\n                return 'Cell marked as water hit';\n            }\n            return 'Cell is already hit';\n        }\n        return 'Error';\n    };\n\n    const isCellHit = (coords) => {\n        const [x, y] = coords;\n        if (isShip(coords)) {\n            const origin = board[x][y].originCoords;\n            let diff = (x - origin[0]) + (y - origin[1]);\n            if (diff < 0) diff *= -1;\n            if (!cellStatus(coords).ship.isHit(diff)) {\n                return 'Cell is an unhit ship';\n            }\n            return 'Cell is a hit ship';\n        }\n        if (!isShip(coords)) {\n            if (cellStatus(coords) !== 1) {\n                return 'Cell is an unhit water';\n            }\n            return 'Cell is a hit water';\n        }\n        return 'Error';\n    };\n\n    return {\n        getBoard,\n        placeShip,\n        isShip,\n        cellStatus,\n        recieveAttack,\n        allSunk,\n        isCellHit,\n    };\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _assets_battleship_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/battleship_icon.png */ \"./src/assets/battleship_icon.png\");\n\n\nfunction header() {\n    const headerDiv = document.getElementById('header');\n    const headerContent = document.createElement('div');\n    headerContent.classList.add('header-content');\n\n    const logo = new Image();\n    logo.src = _assets_battleship_icon_png__WEBPACK_IMPORTED_MODULE_0__;\n    logo.classList.add('header-logo');\n\n    const headerTitle = document.createElement('h1');\n    headerTitle.textContent = 'Battleship';\n    headerTitle.classList.add('header-title');\n\n    headerDiv.appendChild(headerContent);\n    headerContent.appendChild(headerTitle);\n    headerContent.appendChild(logo);\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ playerFactory)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n\n\nfunction playerFactory(playerName, isTurn = false, isComputer = false) {\n    const sendAttack = (playerObj, coords) => {\n        if (playerObj.board.recieveAttack(coords) === 'Cell is already hit') return 'Invalid move';\n        playerObj.board.recieveAttack(coords);\n        return 'Valid move';\n    };\n\n    return {\n        playerName,\n        board: (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n        isComputer,\n        isTurn,\n        sendAttack,\n    };\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/removeBoard.js":
/*!************************************!*\
  !*** ./src/modules/removeBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeBoard)\n/* harmony export */ });\nfunction removeBoard(board) {\n    while (board.firstChild) {\n        board.removeChild(board.lastChild);\n    }\n    board.remove();\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/removeBoard.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shipFactory)\n/* harmony export */ });\nfunction shipFactory(length) {\n    const ship = Array(length).fill(0);\n    const getLength = () => ship.length;\n\n    const isHit = (position) => ship[position] === 1;\n\n    const isSunk = () => {\n        let count = 0;\n        ship.forEach((element) => {\n            if (element === 1) count += 1;\n        });\n        return count === ship.length;\n    };\n\n    const hit = (position) => {\n        ship[position] = 1;\n    };\n\n    return {\n        getLength,\n        isSunk,\n        hit,\n        isHit,\n    };\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

/***/ }),

/***/ "./src/modules/startScreen.js":
/*!************************************!*\
  !*** ./src/modules/startScreen.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startScreen)\n/* harmony export */ });\nfunction startScreen() {\n    const content = document.getElementById('content');\n    const startContainer = document.createElement('div');\n    startContainer.id = 'start-container';\n    const boardGrid = document.createElement('div');\n    boardGrid.id = 'board-grid';\n    const shipsContainer = document.createElement('div');\n    shipsContainer.id = 'ships-container';\n    const shipButtons = document.createElement('div');\n    shipButtons.id = 'ship-buttons';\n    \n    const resetShipsButton = document.createElement('button');\n    resetShipsButton.id = 'reset-ships-button';\n    const rotateShipsButton = document.createElement('button');\n    rotateShipsButton.id = 'rotate-ships-button';\n    const shipsHeader = document.createElement('h1');\n    shipsHeader.textContent = 'Ships';\n\n    const shipsBay = document.createElement('div');\n    shipsBay.classList.add('ships-bay');\n    shipsBay.id = 'ships-bay-horizontal';\n\n    content.appendChild(startContainer);\n    startContainer.appendChild(boardGrid);\n    startContainer.appendChild(shipsContainer);\n    shipsContainer.appendChild(shipButtons);\n    shipButtons.appendChild(resetShipsButton);\n    shipButtons.appendChild(rotateShipsButton);\n    shipsContainer.appendChild(shipsHeader);\n    shipsContainer.appendChild(shipsBay);\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/startScreen.js?");

/***/ }),

/***/ "./src/assets/battleship_icon.png":
/*!****************************************!*\
  !*** ./src/assets/battleship_icon.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f088534212aea0a0a01d.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/battleship_icon.png?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;