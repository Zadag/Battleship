import battleshipLogo from '../assets/battleship_icon.png';

export default function header() {
    const headerDiv = document.getElementById('header');
    const logo = new Image();
    logo.src = battleshipLogo;

    headerDiv.appendChild(logo);
}