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

    const attack = (player, coords) => {
        if (player === 'player1') players[1].sendAttack(players[0], coords);
        if (player === 'player2') players[0].sendAttack(players[1], coords);
    };

    const isWon = () => {
        let winner;

        if (players[0].board.allSunk()) winner = players[1].playerName;
        if (players[1].board.allSunk()) winner = players[0].playerName;
        if (winner) return winner;
        return 'No winner';
    };

    return {
        init,
        changeTurn,
        attack,
        isWon,
        players,
    };
}
