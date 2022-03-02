import playerFactory from './player';

export default function gameLoop() {
    const players = [];
    const init = (player1Name) => {
        const player1 = playerFactory(player1Name, true, false);
        const player2 = playerFactory('CPU', false, true);
        players.push(player1, player2);
    };

    const changeTurn = () => {
        const player1 = players[0];
        const player2 = players[1];
        if (player1.isTurn) {
            player1.isTurn = false;
            player2.isTurn = true;
        } else {
            player1.isTurn = true;
            player2.isTurn = false;
        }
    };

    return {
        init,
        changeTurn,
        players,
    };
}
