import gameLoop from './modules/game';
import header from './modules/header';
import startScreen from './modules/startScreen';
import dragAndDrop from './modules/dragAndDrop';
import formatShipsForGame from './modules/formatShipsForGame';
import clearContent from './modules/clearContent';

header();
startScreen();
dragAndDrop();

const playButton = document.querySelector('#play-button');
playButton.addEventListener('click', () => {
    const playerShipData = formatShipsForGame();
    clearContent();
    startScreen();
    dragAndDrop('CPU');
    const CPUShipData = formatShipsForGame();
    clearContent();
    const game = gameLoop();
    game.init(playerShipData, CPUShipData, 'Player');
});


//const game = gameLoop();

//game.init();
