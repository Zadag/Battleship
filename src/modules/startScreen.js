export default function startScreen() {
    const content = document.getElementById('content');
    const startContainer = document.createElement('div');
    startContainer.id = 'start-container';
    const boardGrid = document.createElement('div');
    boardGrid.id = 'board-grid';
    const shipsContainer = document.createElement('div');
    shipsContainer.id = 'ships-container';
    const shipButtons = document.createElement('div');
    shipButtons.id = 'ship-buttons';
    
    const resetShipsButton = document.createElement('button');
    resetShipsButton.id = 'reset-ships-button';
    const rotateShipsButton = document.createElement('button');
    rotateShipsButton.id = 'rotate-ships-button';
    const shipsHeader = document.createElement('h1');
    shipsHeader.textContent = 'Ships';

    const shipsBay = document.createElement('div');
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
