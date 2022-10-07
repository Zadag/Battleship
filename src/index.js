import gameLoop from './modules/game';
import header from './modules/header';
import startScreen from './modules/startScreen';
import dragAndDrop from './modules/dragAndDrop';
import formatShipsForGame from './modules/formatShipsForGame';

header();
startScreen();
dragAndDrop();

const playButton = document.querySelector('#play-button');
playButton.addEventListener('click', formatShipsForGame);


//const game = gameLoop();

//game.init();
