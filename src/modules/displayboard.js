export default function displayBoard(playerObj, visible = false) {
    const content = document.querySelector('#content');
    const gameboardContainer = document.createElement('div');
    gameboardContainer.classList.add('gameboard-container');
    if (playerObj.playerName === 'CPU') {
        gameboardContainer.classList.add('CPU-gameboard');
    } else {
        gameboardContainer.classList.add('player-gameboard');
    } 
    const gameboard = document.createElement('div');
    gameboard.classList.add('gameboard');

    content.appendChild(gameboardContainer);
    gameboardContainer.appendChild(gameboard);
    console.log(playerObj);
    for (let i = 0; i < 8; i += 1) {
        for (let j = 0; j < 8; j += 1) {
            const boardCell = document.createElement('div');
            if (playerObj.board.isCellHit([i, j]) === 'Cell is an unhit ship' || playerObj.board.isCellHit([i, j]) === 'Cell is an unhit water') {
                boardCell.classList.add('not-hit');
            }
            if (playerObj.board.isCellHit([i, j]) === 'Cell is an unhit ship' && visible === true) {
                boardCell.classList.add('gameboard-ship-square');
            }
            if (playerObj.board.isCellHit([i, j]) === 'Cell is a hit water') {
                boardCell.classList.add('hit-water');
            }
            if (playerObj.board.isCellHit([i, j]) === 'Cell is a hit ship') {
                boardCell.classList.add('hit-ship');
            }
            boardCell.dataset.x = i;
            boardCell.dataset.y = j;
            gameboard.appendChild(boardCell);
        }
    }
}
