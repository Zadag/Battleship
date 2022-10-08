import playerFactory from './player';
import displayBoard from './displayboard';
import removeBoard from './removeBoard';

export default function gameLoop() {
    const players = [];

    const changeTurns = () => {
        if (players[0].isTurn) {
            players[0].isTurn = false;
            players[1].isTurn = true;
        } else {
            players[0].isTurn = true;
            players[1].isTurn = false;
        }
    };

    const addGameboardEvents = () => {
        const playerBoard = document.querySelector('.player-gameboard');
        const cpuBoard = document.querySelector('.CPU-gameboard');

        playerBoard.addEventListener('click', (e) => {
            const { x, y } = e.target.dataset;
            if (players[0].isTurn && (players[0].board.isCellHit([x, y]) === 'Cell is an unhit ship' || players[0].board.isCellHit([x, y]) === 'Cell is an unhit water')) {
                players[0].board.recieveAttack([x, y]);
                removeBoard(playerBoard);
                removeBoard(cpuBoard);
                displayBoard(players[0], true);
                displayBoard(players[1], true);
                if (players[0].board.allSunk()) {
                    console.log(`${players[1].playerName} Won`);
                    return;
                }
                addGameboardEvents();
                players[0].isTurn = false;
                players[1].isTurn = true;
            }
        });

        cpuBoard.addEventListener('click', (e) => {
            const { x, y } = e.target.dataset;
            if (players[1].isTurn && (players[1].board.isCellHit([x, y]) === 'Cell is an unhit ship' || players[1].board.isCellHit([x, y]) === 'Cell is an unhit water')) {
                players[1].board.recieveAttack([x, y]);
                removeBoard(cpuBoard);
                removeBoard(playerBoard);
                displayBoard(players[0], true);
                displayBoard(players[1], true);
                if (players[1].board.allSunk()) {
                    console.log(`${players[0].playerName} Won`);
                    return;
                }
                addGameboardEvents();
                players[0].isTurn = true;
                players[1].isTurn = false;
            }
        });
    };

    const init = (playerShipData, CPUShipData, playerName = 'Player') => {
        const player1 = playerFactory(playerName, true, false);
        const player2 = playerFactory('CPU', false, true);
        playerShipData.forEach(ship => {
            player1.board.placeShip(ship.coords, ship.length, ship.orientation);
        });

        CPUShipData.forEach(ship => {
            player2.board.placeShip(ship.coords, ship.length, ship.orientation);
        });

        players.push(player1, player2);
        displayBoard(player1, true);
        displayBoard(player2, true);
        addGameboardEvents();
    };

    return {
        init,
        players,
        changeTurns,
        addGameboardEvents,
    };
}
