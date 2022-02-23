import playerFactory from './player';

export default function gameLoop() {
    let players = [];
    const init = () => {
        const player1 = playerFactory('TestHuman', true, false);
        const player2 = playerFactory('TestCPU', false, true);

        player1.board.placeShip([0, 3], 4, 'vertical');
        player2.board.placeShip([4, 1], 2, 'horizontal');
        players.push(player1, player2);
    };

    return {
        init,
    };
}
