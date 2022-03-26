import gameLoop from './modules/game';
import header from './modules/header';

header();

const game = gameLoop();

game.init();
