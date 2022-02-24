import playerFactory from '../modules/player';

it('Sends attacks to the correct board', () => {
    const player1 = playerFactory('Bob', true, false);
    const player2 = playerFactory('Joe', false, false);
    expect(player1.sendAttack(player2, [0, 0])).toBe('Valid move');
    player1.sendAttack(player2, [0, 0]);
    expect(player1.sendAttack(player2, [0, 0])).toBe('Invalid move');
});

it('Changes player turn from true to false', () => {
    const player1 = playerFactory('Bob', true, false);
    player1.isTurn = false;
    expect(player1.isTurn).toBe(false);
});
