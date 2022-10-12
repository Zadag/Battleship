import clearContent from "./clearContent";
import startScreen from "./startScreen";
import dragAndDrop from "./dragAndDrop";
import gameLoop from "./game";
import formatShipsForGame from "./formatShipsForGame";

export default function resultsModal() {
    const modal = document.createElement('div');
    modal.id = 'results-modal';

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const winner = document.createElement('p');
    winner.classList.add('winner-text');
    winner.textContent = 'You Win!';

    const playAgain = document.createElement('button');
    playAgain.classList.add('play-again');
    playAgain.textContent = 'Play Again?';

    const body = document.querySelector('body');
    body.appendChild(modal);
    modal.appendChild(modalContent);
    modalContent.appendChild(winner);
    modalContent.appendChild(playAgain);

    playAgain.addEventListener('click', () => {
        clearContent();
        startScreen();
        dragAndDrop();

        const playButton = document.querySelector('#play-button');
        playButton.addEventListener('click', () => {
        const playerShipData = formatShipsForGame();
            clearContent();
            startScreen();
            dragAndDrop('CPU');
            const CPUShipData = formatShipsForGame();
            clearContent();
            const game = gameLoop();
            game.init(playerShipData, CPUShipData, 'Player');
        });
        modal.classList.remove('show');
    })
}