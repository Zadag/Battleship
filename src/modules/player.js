import gameboardFactory from './gameboard';

export default function playerFactory(playerName, isTurn = false, isComputer = false) {
    const sendAttack = (player, coords) => {
        if (player.board.recieveAttack([coords]) === 'Cell is already hit') return 'Invalid move';
        player.board.recieveAttack(coords);
        return 'Valid move';
    };

    return {
        player: playerName,
        board: gameboardFactory(),
        isComputer,
        isTurn,
        sendAttack,
    };
}
