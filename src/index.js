import displayBoard from './modules/displayboard';
import playerFactory from './modules/player';

const player1 = playerFactory('player1', true, false);
const player2 = playerFactory('player2', false, true);

player1.board.placeShip([0, 0], 4, 'horizontal');

displayBoard(player1.board);