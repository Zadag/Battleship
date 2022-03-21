export default function removeBoard(board) {
    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }
    board.remove();
}
