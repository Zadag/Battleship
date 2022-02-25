export default function displayBoard(boardObj) {
    const root = document.querySelector('#root');
    const gameboardContainer = document.createElement('div');
    gameboardContainer.classList.add('gameboard-container');
    const gameboard = document.createElement('div');
    gameboard.classList.add('gameboard');

    root.appendChild(gameboardContainer);
    gameboardContainer.appendChild(gameboard);

    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            const boardCell = document.createElement('div');
            if (boardObj.isCellHit([i, j]) === 'Cell is an unhit ship' || boardObj.isCellHit([i, j]) === 'Cell is an unhit water') {
                boardCell.classList.add('not-hit');
            }
            if (boardObj.isCellHit([i, j]) === 'Cell is a hit water') {
                boardCell.classList.add('hit-water');
            }
            if (boardObj.isCellHit([i, j]) === 'Cell is a hit ship') {
                boardCell.classList.add('hit-ship');
            }
            gameboard.appendChild(boardCell);
        }
    }
}
