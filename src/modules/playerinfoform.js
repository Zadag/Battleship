export default function playerInfoForm(playerNum) {
    const root = document.querySelector('#root');
    const container = document.createElement('div');
    const formContainer = document.createElement('div');
    const playerNameContainer = document.createElement('div');
    const playerIsCPUContainer = document.createElement('div');
    const playerName = document.createElement('input');
    const isPlayerCPU = document.createElement('input');
    const playerText = document.createElement('p');
    const isCPUText = document.createElement('p');

    playerText.textContent = `What is ${playerNum}'s name?`;
    isCPUText.textContent = `Is ${playerNum} a cpu?`;
    isPlayerCPU.setAttribute('type', 'checkbox');

    root.appendChild(container);
    container.appendChild(formContainer);
    formContainer.appendChild(playerNameContainer);
    formContainer.appendChild(playerIsCPUContainer);
    playerNameContainer.appendChild(playerText);
    playerNameContainer.appendChild(playerName);
    playerIsCPUContainer.appendChild(isCPUText);
    playerIsCPUContainer.appendChild(isPlayerCPU);
}
