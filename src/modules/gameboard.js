import shipFactory from "./ship"

export default function gameboardFactory() {
    const board = [];

    for (let i = 0; i < 10; i++) {
        board.push(Array(10).fill(0));
    }

    const getBoard = () => {
        return board
    }    

    const getShip = (coords) => {
        const [x, y] = coords;
        return board[x][y]
    }

    const isShip = (coords) => {
        const [x, y] = coords;
        return typeof board[x][y] === 'object' ? true: false;
    }

    const placeShip = (coords, length, allignment) => {
        const [x, y] = coords;
        if (allignment === 'horizontal') {
            if (board[x][y + length] === undefined) return 'error: out of bounds';
            for (let i = 0; i < length; i++) {
                if (board[x][y + i] !== 0) return 'error: occupied by ship' //This needs answers.  Why is isShip returning false here??
            }
            const ship = shipFactory(length);
            console.log(isShip([x, y]));
            for (let i = 0; i < length; i++) {
                board[x][y + i] = ship;
            }
        }

        if (allignment === 'vertical') {
            if (board[x + length] === undefined) return 'error: out of bounds';
            for (let i = 0; i < length; i++) {
                if (board[x + i][y] !== 0) return 'error: occupied by ship'
            }
            const ship = shipFactory(length);
            for (let i = 0; i < length; i++) {
                board[x + i][y] = ship;
            }
        }


        // if (allignment === 'horizontal' && board[x][y + length] === undefined) return 'error: out of bounds';
        // if (allignment === 'vertical' && board[x + length] === undefined) return 'error: out of bounds';
        // const ship = shipFactory(length);
        // if (allignment === 'horizontal') {
        //     for (let i = 0; i < length; i++) {
        //         board[x][y + i] = ship;
        //     }
        // }
        // if (allignment === 'vertical') {
        //     for (let i = 0; i < length; i++) {
        //         board[x + i][y] = ship;
        //     }
        // }
    }

    // const isShip = (coords) => {
    //     const [x, y] = coords;
    //     return typeof board[x][y] === 'object' ? true: false;
    // }

    const recieveAttack = (coords) => {
        const [x, y] = coords;
        if (isShip(coords)) {
            board[x][y].hit(coords);
        }
        board[x][y].hit()
    }

    return { getBoard, placeShip, isShip, getShip }
}