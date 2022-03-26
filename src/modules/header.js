import battleshipLogo from '../assets/battleship_icon.png';

export default function header() {
    const headerDiv = document.getElementById('header');
    const headerContent = document.createElement('div');
    headerContent.classList.add('header-content');

    const logo = new Image();
    logo.src = battleshipLogo;
    logo.classList.add('header-logo');

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Battleship';
    headerTitle.classList.add('header-title');

    headerDiv.appendChild(headerContent);
    headerContent.appendChild(headerTitle);
    headerContent.appendChild(logo);
}
