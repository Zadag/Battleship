export default function shipFactory(length) {
    const ship = Array(length).fill(0);
    
    const getLength = () => ship.length
    
    const isHit = (position) => {
        // Hits are denoted by 1
        return ship[position] === 1 ? true: false
    }
    
    const isSunk = () => {
        let count = 0;
        for (const element of ship) {
            if (element === 1) count++
        }
        return count === ship.length ? true : false
    }

    const hit = (position) => {
        ship[position] = 1
    }
    
    return { getLength, isSunk, hit, isHit }
}