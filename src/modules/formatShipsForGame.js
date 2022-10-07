export default function formatShipsForGame() {
    let outputArray = []; //Array of objects containing parameters for gameboard.placeShip()
    const fourLongElements = Array.from(document.querySelectorAll('.four-long'));
    const four2LongElements = Array.from(document.querySelectorAll('.four-long-2'));
    const threeLongElements = Array.from(document.querySelectorAll('.three-long'));
    const twoLongElements = Array.from(document.querySelectorAll('.two-long'));
    let shipsArray = [fourLongElements, four2LongElements, threeLongElements, twoLongElements];

    shipsArray.forEach(ship => {
        outputArray.push({
            coords: [parseInt(ship[0].dataset.x), parseInt(ship[0].dataset.y)],
            length: ship.length,
            orientation: ship[0].dataset.orientation
        })
    });
    console.log(outputArray);
    return outputArray;
}