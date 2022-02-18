import shipFactory from './ship';

export default function gameboardFactory() {
    const board = [];

    for (let i = 0; i < 10; i += 1) {
        board.push(Array(10).fill(0));
    }

    const getBoard = () => [...board];

    const cellStatus = (coords) => {
        const [x, y] = coords;
        return board[x][y];
    };

    const isShip = (coords) => {
        const [x, y] = coords;
        return typeof board[x][y] === 'object';
    };

    const allSunk = () => {
        for (let i = 0; i < 10; i += 1) {
            for (let j = 0; j < 10; j += 1) {
                if (typeof board[i][j] === 'object') {
                    if (board[i][j].ship.isSunk() === false) return false;
                }
            }
        }
        return true;
    };

    const placeShip = (coords, length, allignment) => {
        const [x, y] = coords;
        if (allignment === 'horizontal') {
            if (board[x][y + length] === undefined) return 'error: out of bounds';
            for (let i = 0; i < length; i += 1) {
                if (isShip([x, y + i])) return 'error: occupied by ship';
            }
            const ship = shipFactory(length);
            for (let i = 0; i < length; i += 1) {
                board[x][y + i] = {
                    originCoords: [x, y],
                    ship,
                };
            }
        }
        if (allignment === 'vertical') {
            if (board[x + length] === undefined) return 'error: out of bounds';
            for (let i = 0; i < length; i += 1) {
                if (isShip([x + i, y])) return 'error: occupied by ship';
            }
            const ship = shipFactory(length);
            for (let i = 0; i < length; i += 1) {
                board[x + i][y] = {
                    originCoords: [x, y],
                    ship,
                };
            }
        }

        return 'Ship placed';
    };

    const recieveAttack = (coords) => {
        const [x, y] = coords;
        if (isShip(coords)) {
            // get distance between the ship position hit and its origin then pass it to hit()
            const origin = board[x][y].originCoords;
            let diff = (x - origin[0]) + (y - origin[0]);
            if (diff < 0) diff *= -1;
            board[x][y].ship.hit(diff);
        }
        if (!isShip(coords)) {
            board[x][y] = 1;
        }
    };

    return {
        getBoard,
        placeShip,
        isShip,
        cellStatus,
        recieveAttack,
        allSunk,
    };
}
