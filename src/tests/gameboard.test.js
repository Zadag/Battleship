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

it('Does not place ships out of bounds', () => {
    const board1 = gameboardFactory();
    expect(board1.placeShip([0, 9], 2, 'horizontal')).toBe('error: out of bounds');
    expect(board1.placeShip([9, 1], 2, 'vertical')).toBe('error: out of bounds');
})

it('Does not place ships on occupied cells', () => {
    const board1 = gameboardFactory();
    board1.placeShip([0, 0], 4, 'horizontal');
    board1.placeShip([3, 3], 4, 'vertical');
    console.log(board1.getBoard());
    console.log(board1.isShip([0, 3]));
    expect(board1.placeShip([0, 3], 2, 'horizontal')).toBe('error: occupied by ship');
    expect(board1.placeShip([0, 3], 2, 'vertical')).toBe('error: occupied by ship');
    expect(board1.placeShip([4, 2], 2, 'horizontal')).toBe('error: occupied by ship');
})

it('All ship cells of the same ship reference the same ship object', () => {
    const board1 = gameboardFactory();
    board1.placeShip([0, 0], 3, 'horizontal');
    board1.placeShip([3, 3], 4, 'horizontal');
    expect(board1.getShip([0, 0])).toBe(board1.getShip([0, 1]));
    expect(board1.getShip[3, 3] === board1.getShip([0, 0])).toBe(false);
})

it('Unique ship cells reference separate ship objects', () => {
    const board1 = gameboardFactory();
    board1.placeShip([0, 0], 3, 'horizontal');
    board1.placeShip([3, 3], 4, 'horizontal');
    expect(board1.getShip[3, 3] === board1.getShip([0, 0])).toBe(false);
})

