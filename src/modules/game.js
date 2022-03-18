import playerFactory from './player';
import displayBoard from './displayboard';

export default function gameLoop() {
    const players = [];

    const changeTurns = () => {
        if (players[0].isTurn) {
            players[0].isTurn = false;
            players[1].isTurn = true;
        } else {
            players[0].isTurn = true;
            players[1].isTurn = false;
        }
    };

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

        // while(player1.board.allSunk === false && player2.board.allSunk === false) {

        // }
        displayBoard(player1);
        displayBoard(player2);
    };

    return {
        init,
        players,
        changeTurns,
    };
}
