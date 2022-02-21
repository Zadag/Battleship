import gameboardFactory from './gameboard';

export default function playerFactory(playerName, isTurn = false, isComputer = false) {
    const sendAttack = (playerObj, coords) => {
        if (playerObj.board.recieveAttack(coords) === 'Cell is already hit') return 'Invalid move';
        playerObj.board.recieveAttack(coords);
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
