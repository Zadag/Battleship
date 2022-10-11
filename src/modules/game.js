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

    const addGameboardEvents = (multiplayer) => {
        const playerBoard = document.querySelector('.player-gameboard');
        const cpuBoard = document.querySelector('.CPU-gameboard');

        cpuBoard.addEventListener('click', (e) => {
            const { x, y } = e.target.dataset;
            if (players[0].isTurn && (players[1].board.isCellHit([x, y]) === 'Cell is an unhit ship' || players[1].board.isCellHit([x, y]) === 'Cell is an unhit water')) {
                players[1].board.recieveAttack([x, y]);
                removeBoard(cpuBoard);
                removeBoard(playerBoard);
                displayBoard(players[0], true);
                displayBoard(players[1], false);
                if (players[1].board.allSunk()) {
                    console.log(`${players[0].playerName} Won`);
                    return;
                }
                addGameboardEvents(true);
                players[0].isTurn = false;
                players[1].isTurn = true;
                
                if (multiplayer === true) {
                    setTimeout(() => {
                        const newCPUBoard = document.querySelector('.CPU-gameboard');
                        const newPlayerBoard = document.querySelector('.player-gameboard');
                        const CPUGameboard = document.querySelector('.CPU-gameboard > .gameboard');
                        console.log(CPUGameboard);
                        const unhitSquares = Array.from(CPUGameboard.querySelectorAll('.not-hit'));
                        console.log(unhitSquares);
                        const randomSquare = unhitSquares[Math.floor(Math.random() * unhitSquares.length)];
                        console.log(randomSquare);
                        players[0].board.recieveAttack([parseInt(randomSquare.dataset.x), parseInt(randomSquare.dataset.y)]);
                        removeBoard(newCPUBoard);
                        removeBoard(newPlayerBoard);
                        displayBoard(players[0], true);
                        displayBoard(players[1], false);
                        if (players[1].board.allSunk()) {
                            console.log(`${players[0].playerName} Won`);
                            return
                        }
                        addGameboardEvents(true);
                        players[0].isTurn = true;
                        players[1].isTurn = false;
                    }, '500');  
                }
            }
        });
    };

    const init = (playerShipData, CPUShipData, playerName = 'Player', multiplayer = false) => {
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
        displayBoard(player2, false);
        addGameboardEvents(true);
    };

    return {
        init,
        players,
        changeTurns,
        addGameboardEvents,
    };
}
