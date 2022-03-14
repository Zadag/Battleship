import playerFactory from './player';
import displayBoard from './displayboard';

export default function gameLoop() {
    const players = [];
    const init = (player1Name) => {
        const player1 = playerFactory(player1Name, true, false);
        const player2 = playerFactory('CPU', false, true);
        player1.board.placeShip([0, 0], 4, 'horizontal');
        player1.board.placeShip([3, 3], 3, 'vertical');
        player1.board.placeShip([5, 5], 2, 'horizontal');
        player2.board.placeShip([0, 0], 4, 'horizontal');
        player2.board.placeShip([3, 3], 3, 'vertical');
        player2.board.placeShip([5, 5], 2, 'horizontal');
        players.push(player1, player2);

        displayBoard(player1.board);
        displayBoard(player2.board);
    };

    return {
        init,
        players,
    };
}
