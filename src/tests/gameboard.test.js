import gameboardFactory from '../modules/gameboard.js'

it('Creates a 10 x 10 board array', () => {
    const board1 = gameboardFactory();
    expect(board1.getBoard()).toStrictEqual(
        [[0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],]);
});

it('Places ships in the correct horizontal position', () => {
    const board1 = gameboardFactory();
    board1.placeShip([0, 0], 3, 'horizontal');
    expect(board1.isShip([0, 0])).toBe(true);
    expect(board1.isShip([0, 1])).toBe(true);
    expect(board1.isShip([0, 2])).toBe(true);
    expect(board1.isShip([0, 3])).toBe(false);
    expect(board1.isShip([1, 0])).toBe(false);

    board1.placeShip([3, 4], 2, 'horizontal');
    expect(board1.isShip([3, 4])).toBe(true);
    expect(board1.isShip([3, 5])).toBe(true);
    expect(board1.isShip([3, 6])).toBe(false);
    expect(board1.isShip([3, 3])).toBe(false);

});

it('Places ships in the correct vertical position', () => {
    const board1 = gameboardFactory();
    board1.placeShip([0, 0], 3, 'vertical');
    expect(board1.isShip([0, 0])).toBe(true);
    expect(board1.isShip([1, 0])).toBe(true);
    expect(board1.isShip([2, 0])).toBe(true);
    expect(board1.isShip([0, 1])).toBe(false);
    expect(board1.isShip([1, 1])).toBe(false);

})

it('All ship cells reference the same object', () => {
    const board1 = gameboardFactory();
    board1.placeShip([0, 0], 3, 'horizontal');
    expect(board1.getShip([0, 0])).toBe(board1.getShip([0, 1]));
})

