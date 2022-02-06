import shipFactory from '../modules/ship.js'


it('Returns proper length', () => {
    const ship1 = shipFactory(4);
    const ship2 = shipFactory(3);
    expect(ship1.getLength()).toBe(4);
    expect(ship2.getLength()).toBe(3);
})

it('Marks hit elements as 1', () => {
    const ship = shipFactory(4);
    ship.hit(0);
    expect(ship.isHit(0)).toBe(true);
})

it('Detects sunken ships', () => {
    const ship = shipFactory(4);
    ship.hit(0);
    ship.hit(1);
    
    expect(ship.isSunk()).toBe(false);
    
    ship.hit(2);
    ship.hit(3);

    expect(ship.isSunk()).toBe(true);
})