import gameLoop from '../modules/game';

it('changes turns', () => {
    const loop = gameLoop();
    loop.init('Clancey');
    expect(loop.players[0].isTurn).toBe(true);
    expect(loop.players[1].isTurn).toBe(false);
    loop.changeTurn();
    expect(loop.players[0].isTurn).toBe(false);
    expect(loop.players[1].isTurn).toBe(true);
    loop.changeTurn();
    expect(loop.players[0].isTurn).toBe(true);
    expect(loop.players[1].isTurn).toBe(false);
});

it('alerts when the game is over', () => {
    const loop = gameLoop();
    loop.init('Clancey');
    loop.players[0].board.placeShip([0, 0], 4, 'horizontal');
    loop.players[1].board.placeShip([0, 0], 4, 'horizontal');
    expect(loop.isWon()).toBe('No winner');
    loop.attack('player1', [0, 0]);
    loop.attack('player1', [0, 1]);
    loop.attack('player1', [0, 2]);
    expect(loop.isWon()).toBe('No winner');
    loop.attack('player1', [0, 3]);
    console.log(loop.players[0].board.allSunk());
    expect(loop.isWon()).toBe('CPU');
});
