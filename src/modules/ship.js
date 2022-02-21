export default function shipFactory(length) {
    const ship = Array(length).fill(0);
    const getLength = () => ship.length;

    const isHit = (position) => ship[position] === 1;

    const isSunk = () => {
        let count = 0;
        ship.forEach((element) => {
            if (element === 1) count += 1;
        });
        return count === ship.length;
    };

    const hit = (position) => {
        ship[position] = 1;
    };

    return {
        getLength,
        isSunk,
        hit,
        isHit,
    };
}
