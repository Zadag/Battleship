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
