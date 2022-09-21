export default function startScreen() {
    const content = document.getElementById('content'); // page container

    const startContainer = document.createElement('div'); // content in codepen
    startContainer.id = 'start-container';

    const boardGrid = document.createElement('div'); // grid in codepen
    boardGrid.id = 'board-grid';

    const shipsContainer = document.createElement('div'); // same as codepen
    shipsContainer.id = 'ships-container';

    const shipButtons = document.createElement('div'); // same as codepen
    shipButtons.id = 'ship-buttons';
    
    const resetShipsButton = document.createElement('button'); // reset-ships codepen
    resetShipsButton.id = 'reset-ships-button';
    resetShipsButton.textContent = 'Reset Ships';

    const rotateShipsButton = document.createElement('button'); // rotate-ships in codepen
    rotateShipsButton.id = 'rotate-ships-button';
    rotateShipsButton.textContent = 'Rotate Ships';

    const shipsHeader = document.createElement('h1');
    shipsHeader.id = 'ship-header';
    shipsHeader.textContent = 'Ships';

    const shipsBay = document.createElement('div'); // same as codepen
    shipsBay.classList.add('ships-bay');
    shipsBay.id = 'ships-bay-horizontal';

    content.appendChild(startContainer);
    startContainer.appendChild(boardGrid);
    startContainer.appendChild(shipsContainer);
    shipsContainer.appendChild(shipButtons);
    shipButtons.appendChild(resetShipsButton);
    shipButtons.appendChild(rotateShipsButton);
    shipsContainer.appendChild(shipsHeader);
    shipsContainer.appendChild(shipsBay);
}
