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

    const placeShip = (coords, length, allignment) => {
        const ship = shipFactory(length);
        const [x, y] = coords;
        if (allignment === 'horizontal') {
            for (let i = 0; i < length; i++) {
                board[x][y + i] = ship;
            }
        }
        if (allignment === 'vertical') {
            for (let i = 0; i < length; i++) {
                board[x + i][y] = ship;
            }
        }
        console.log(board)
    }

    const isShip = (coords) => {
        const [x, y] = coords;
        return typeof board[x][y] === 'object' ? true: false;
    }

    const recieveAttack = (coords) => {
        const [x, y] = coords;
        board[x][y].hit()
    }

    return { getBoard, placeShip, isShip, getShip }
}