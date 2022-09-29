export default function dragAndDrop() {
    const grid = document.querySelector('#board-grid');

    const createGrid = () => {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const square = document.createElement('div');
                square.classList.add('grid-square');
                square.dataset.x = i;
                square.dataset.y = j;
                grid.appendChild(square);
            }
        }  
    }

    const clearGrid = () => {
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild)
        }
    }

    createGrid();

    let currentDrag = {};

    const addEventListenersToShips = () => {
        const ships = document.querySelectorAll(".ship");
        ships.forEach((ship) => {
            ship.addEventListener("mousedown", (e) => {
                currentDrag.shipPos = e.target.dataset.square;
                currentDrag.shipId = e.target.parentNode.id;
                console.log(currentDrag)
            })
        });
    
        const gridSquares = document.querySelectorAll(".grid-square");
        gridSquares.forEach((square) => {
            square.addEventListener('dragenter', (e) => {
                e.preventDefault();
                const shipsBay = document.querySelector('.ships-bay');
                console.log(`This is shipsBay ${shipsBay}`)
                let rootX;
                let rootY;
                let rootEl;
                let rootElPlusOne;
                let rootElPlusTwo;
                let rootElPlusThree;
                let outOfBoundsX;
                let outOfBoundsY;
                if (shipsBay.id === 'ships-bay-horizontal') {
                    rootX = parseInt(e.target.dataset.x);
                    rootY = parseInt(e.target.dataset.y - currentDrag.shipPos);
                    rootEl = document.querySelector(`[data-x="${rootX.toString()}"][data-y="${rootY.toString()}"]`);
                    rootElPlusOne = document.querySelector(`[data-x="${rootX.toString()}"][data-y="${(rootY + 1).toString()}"]`);
                    rootElPlusTwo = document.querySelector(`[data-x="${rootX.toString()}"][data-y="${(rootY + 2).toString()}"]`);
                    rootElPlusThree = document.querySelector(`[data-x="${rootX.toString()}"][data-y="${(rootY + 3).toString()}"]`);
                    outOfBoundsX = 4;
                    outOfBoundsY = 0;
                }
                if (shipsBay.id === 'ships-bay-vertical') {
                    rootX = parseInt(e.target.dataset.x - currentDrag.shipPos);
                    rootY = parseInt(e.target.dataset.y);
                    rootEl = document.querySelector(`[data-x="${rootX.toString()}"][data-y="${rootY.toString()}"]`);
                    rootElPlusOne = document.querySelector(`[data-x="${(rootX + 1).toString()}"][data-y="${(rootY).toString()}"]`);
                    rootElPlusTwo = document.querySelector(`[data-x="${(rootX + 2).toString()}"][data-y="${(rootY).toString()}"]`);
                    rootElPlusThree = document.querySelector(`[data-x="${(rootX + 3).toString()}"][data-y="${(rootY).toString()}"]`);
                    outOfBoundsX = 0;
                    outOfBoundsY = 4;
                }
                if (currentDrag.shipId === 'four-long') {
                    if (rootY + outOfBoundsX < 9 && rootY + outOfBoundsY >= 0) {
                        if ((rootEl.classList.length === 1 || rootEl.classList.contains('four-long')) && (rootElPlusOne.classList.length === 1 || rootElPlusOne.classList.contains('four-long')) && (rootElPlusTwo.classList.length === 1 || rootElPlusTwo.classList.contains('four-long')) && (rootElPlusThree.classList.length === 1 || rootElPlusThree.classList.contains('four-long'))) {
                            const targets = document.querySelectorAll('.grid-square.four-long')
                            if (targets) {
                                targets.forEach(target => target.classList.remove('four-long'))
                            }
                            rootEl.classList.add('four-long');
                            rootElPlusOne.classList.add('four-long');
                            rootElPlusTwo.classList.add('four-long');
                            rootElPlusThree.classList.add('four-long');
                        }
                    }
                }
                if (currentDrag.shipId === 'four-long-2') {
                    if (rootY + outOfBoundsX < 9 && rootY + outOfBoundsY >= 0) {
                        if ((rootEl.classList.length === 1 || rootEl.classList.contains('four-long-2')) && (rootElPlusOne.classList.length === 1 || rootElPlusOne.classList.contains('four-long-2')) && (rootElPlusTwo.classList.length === 1 || rootElPlusTwo.classList.contains('four-long-2')) && (rootElPlusThree.classList.length === 1 || rootElPlusThree.classList.contains('four-long-2'))) {
                            const targets = document.querySelectorAll('.grid-square.four-long-2')
                            if (targets) {
                                targets.forEach(target => target.classList.remove('four-long-2'))
                            }
                            rootEl.classList.add('four-long-2');
                            rootElPlusOne.classList.add('four-long-2');
                            rootElPlusTwo.classList.add('four-long-2');
                            rootElPlusThree.classList.add('four-long-2');
                        }
                    }
                }
                if (currentDrag.shipId === 'three-long') {
                    if (rootY + outOfBoundsX - 1 < 9 && rootY + outOfBoundsY >= 0) {
                        if ((rootEl.classList.length === 1 || rootEl.classList.contains('three-long')) && (rootElPlusOne.classList.length === 1 || rootElPlusOne.classList.contains('three-long')) && (rootElPlusTwo.classList.length === 1 || rootElPlusTwo.classList.contains('three-long'))) {
                            const targets = document.querySelectorAll('.grid-square.three-long')
                            if (targets) {
                                targets.forEach(target => target.classList.remove('three-long'))
                            }
                            rootEl.classList.add('three-long');
                            rootElPlusOne.classList.add('three-long');
                            rootElPlusTwo.classList.add('three-long');
                        }
                    }
                }
                if (currentDrag.shipId === 'two-long') {
                    if (rootY + outOfBoundsX - 2 < 9 && rootY + outOfBoundsY >= 0) {
                        if ((rootEl.classList.length === 1 || rootEl.classList.contains('two-long')) && (rootElPlusOne.classList.length === 1 || rootElPlusOne.classList.contains('two-long'))) {
                            const targets = document.querySelectorAll('.grid-square.two-long')
                            if (targets) {
                                targets.forEach(target => target.classList.remove('two-long'))
                            }
                            rootEl.classList.add('two-long');
                            rootElPlusOne.classList.add('two-long');
                        }
                    }
                }
            })
    
            square.addEventListener('drop', (e) => {
                e.preventDefault();
                let droppedShip = e.target;
                console.log(droppedShip)
                if (droppedShip.classList.contains('four-long')) {
                    while (document.querySelector('.ship.four-long').firstChild) {
                        document.querySelector('.ship.four-long').removeChild(document.querySelector('.ship.four-long').firstChild);
                    }
                    document.querySelector('.ship.four-long').remove()
                }
                if (droppedShip.classList.contains('four-long-2')) {
                    while (document.querySelector('.ship.four-long-2').firstChild) {
                        document.querySelector('.ship.four-long-2').removeChild(document.querySelector('.ship.four-long-2').firstChild);
                    }
                    document.querySelector('.ship.four-long-2').remove()
                }
                if (droppedShip.classList.contains('three-long')) {
                    while (document.querySelector('.ship.three-long').firstChild) {
                        document.querySelector('.ship.three-long').removeChild(document.querySelector('.ship.three-long').firstChild);
                    }
                    document.querySelector('.ship.three-long').remove()
                }
                if (droppedShip.classList.contains('two-long')) {
                    while (document.querySelector('.ship.two-long').firstChild) {
                        document.querySelector('.ship.two-long').removeChild(document.querySelector('.ship.two-long').firstChild);
                    }
                    document.querySelector('.ship.two-long').remove()
                }
                const droppedElement = e.dataTransfer.getData('text/plain');
            })
    
            let board = document.querySelector('#board-grid');
            // This event fires whenever the dragged element leaves a child element
            board.addEventListener('dragleave', () => {
                console.log('dragleave');
                let draggingShipSquares = document.querySelectorAll(`.grid-square.${currentDrag.shipId}`);
                draggingShipSquares.forEach(shipSquare => {
                    // shipSquare.classList.remove(currentDrag.shipId);
                })
            })
    
            square.addEventListener('dragover', (e) => {
                e.preventDefault();
            })
        })
    }

    addEventListenersToShips();

    const removeShipsFromContainer = () => {
        const shipsContainer = document.querySelector('#ships-container');
        if (document.querySelector('.ship.four-long')) {
            while (document.querySelector('.ship.four-long').firstChild) {
                document.querySelector('.ship.four-long').removeChild(document.querySelector('.ship.four-long').lastChild)
            }
            document.querySelector('.ship.four-long').remove();
        }
        if (document.querySelector('.ship.four-long-2')) {
            while (document.querySelector('.ship.four-long-2').firstChild) {
                document.querySelector('.ship.four-long-2').removeChild(document.querySelector('.ship.four-long-2').lastChild)
            }
            document.querySelector('.ship.four-long-2').remove();
        }
        if (document.querySelector('.ship.three-long')) {
            while (document.querySelector('.ship.three-long').firstChild) {
                document.querySelector('.ship.three-long').removeChild(document.querySelector('.ship.three-long').lastChild)
            }
            document.querySelector('.ship.three-long').remove();
        }
        if (document.querySelector('.ship.two-long')) {
            while (document.querySelector('.ship.two-long').firstChild) {
                document.querySelector('.ship.two-long').removeChild(document.querySelector('.ship.two-long').lastChild)
            }
            document.querySelector('.ship.two-long').remove();
        }
        if (document.querySelector('.ships-bay').id === 'ships-bay-vertical') {
            document.querySelector('.ships-bay').id = 'ships-bay-horizontal';
        }
    }

    const addShipToContainer = (shipId) => {
        const ship = document.createElement('div');
        ship.classList.add('ship', shipId);
        ship.id = shipId;
        ship.draggable = true;
        const shipsBay = document.querySelector('.ships-bay');
        shipsBay.appendChild(ship);
        if (shipId === 'four-long' || shipId === 'four-long-2') {
            for (let i = 0; i < 4; i++) {
                const shipSquare = document.createElement('div');
                shipSquare.classList.add('ship-square');
                shipSquare.dataset.square = i.toString();
                ship.appendChild(shipSquare);
            }
        }
        if (shipId === 'three-long') {
            for (let i = 0; i < 3; i++) {
                const shipSquare = document.createElement('div');
                shipSquare.classList.add('ship-square');
                shipSquare.dataset.square = i.toString();
                ship.appendChild(shipSquare);
            }
        }
        if (shipId === 'two-long') {
            for (let i = 0; i < 2; i++) {
                const shipSquare = document.createElement('div');
                shipSquare.classList.add('ship-square');
                shipSquare.dataset.square = i.toString();
                ship.appendChild(shipSquare);
            }
        }
    }

    const resetShips = () => {
        //const boardSquares = document.querySelectorAll()
        clearGrid();
        createGrid();
        removeShipsFromContainer();
        addShipToContainer('four-long');
        addShipToContainer('four-long-2');
        addShipToContainer('three-long')
        addShipToContainer('two-long');
        addEventListenersToShips();
    }
    
    const resetButton = document.querySelector('#reset-ships-button');
    resetButton.addEventListener('click', resetShips);
    
    const rotateShips = () => {
        console.log('rotating')
        let ships = document.querySelectorAll('.ship');
        let shipsBay = document.querySelector('.ships-bay');
        if (shipsBay.id === "ships-bay-vertical") {
            shipsBay.id = "ships-bay-horizontal";
        } else {
            shipsBay.id = 'ships-bay-vertical';
        }
        ships.forEach((ship) => {
            console.log('rotate')
            ship.classList.toggle('vertical')
        })
    }

    const placeShipsRandomly = () => {
        clearGrid();
        createGrid();
        let ships = [
            {
                name: 'four-long',
                length: 4,
                placed: false,
            }, 
            {
                name: 'four-long-2',
                length: 4,
                placed: false,
            }, 
            {
                name: 'three-long',
                length: 3,
                placed: false,
            }, 
            {
                name: 'two-long',
                length: 2,
                placed: false,
            }
        ];

        const randomOrigin = (maxDistance) => Math.floor(Math.random()*maxDistance);
        
        const squareIsEmpty = (gridSquareElement) => gridSquareElement.classList.length === 1 ? true : false

        ships.forEach(ship => {
            let orientations = ['horizontal', 'vertical'];
            let orientation = orientations[Math.floor(Math.random() * orientations.length)];
            let originX;
            let originY;
            let rootEl;
            let rootElPlusOne;
            let rootElPlusTwo;
            let rootElPlusThree;

            const placeShipOnBoard = (name, squares) => {
                switch (name) {
                    case 'four-long':
                        if (squareIsEmpty(squares[0]) && squareIsEmpty(squares[1]) && squareIsEmpty(squares[2]) && squareIsEmpty(squares[3])) {
                            squares.forEach(square => {
                                square.classList.add(name);
                            })
                        } else if (orientation === 'horizontal'){
                            originX = randomOrigin(8);
                            originY = randomOrigin(5);
                            setRootElements();
                            placeShipOnBoard(name, [rootEl, rootElPlusOne, rootElPlusTwo, rootElPlusThree]);
                        } else {
                            originX = randomOrigin(5);
                            originY = randomOrigin(8);
                            setRootElements();
                            placeShipOnBoard(name, [rootEl, rootElPlusOne, rootElPlusTwo, rootElPlusThree]);
                        }
                        break;
                    case 'four-long-2':
                        if (squareIsEmpty(squares[0]) && squareIsEmpty(squares[1]) && squareIsEmpty(squares[2]) && squareIsEmpty(squares[3])) {
                            squares.forEach(square => {
                                square.classList.add(name);
                            })
                        } else if (orientation === 'horizontal') {
                            originX = randomOrigin(8);
                            originY = randomOrigin(5);
                            setRootElements();
                            placeShipOnBoard(name, [rootEl, rootElPlusOne, rootElPlusTwo, rootElPlusThree]);
                        } else {
                            originX = randomOrigin(5);
                            originY = randomOrigin(8);
                            setRootElements();
                            placeShipOnBoard(name, [rootEl, rootElPlusOne, rootElPlusTwo, rootElPlusThree]);
                        }
                        break;
                    case 'three-long': 
                        if (squareIsEmpty(squares[0]) && squareIsEmpty(squares[1]) && squareIsEmpty(squares[2])) {
                            squares.forEach(square => {
                                square.classList.add(name);
                            })
                        } else if (orientation === 'horizontal') {
                            originX = randomOrigin(8);
                            originY = randomOrigin(6);
                            setRootElements();
                            placeShipOnBoard(name, [rootEl, rootElPlusOne, rootElPlusTwo]);
                        } else {
                            originX = randomOrigin(6);
                            originY = randomOrigin(8);
                            setRootElements();
                            placeShipOnBoard(name, [rootEl, rootElPlusOne, rootElPlusTwo]);
                        }
                        break;
                    case 'two-long':
                        if (squareIsEmpty(squares[0]) && squareIsEmpty(squares[1])) {
                            squares.forEach(square => {
                                square.classList.add(name);
                            })
                        } else if(orientation === 'horizontal') {
                            originX = randomOrigin(8);
                            originY = randomOrigin(7);
                            setRootElements();
                            placeShipOnBoard(name, [rootEl, rootElPlusOne]);
                        } else {
                            originX = randomOrigin(7);
                            originY = randomOrigin(8);
                            setRootElements();
                            placeShipOnBoard(name, [rootEl, rootElPlusOne]);
                        }
                }
                
            }

            const setRootElements = () => {
                if (orientation === 'horizontal') {
                    rootEl = document.querySelector(`[data-x="${originX.toString()}"][data-y="${originY.toString()}"]`);
                    rootElPlusOne = document.querySelector(`[data-x="${originX.toString()}"][data-y="${(originY + 1).toString()}"]`);
                    rootElPlusTwo = document.querySelector(`[data-x="${originX.toString()}"][data-y="${(originY + 2).toString()}"]`);
                    rootElPlusThree = document.querySelector(`[data-x="${originX.toString()}"][data-y="${(originY + 3).toString()}"]`);
                }
                if (orientation === 'vertical') {
                    rootEl = document.querySelector(`[data-x="${originX.toString()}"][data-y="${originY.toString()}"]`);
                    rootElPlusOne = document.querySelector(`[data-x="${(originX + 1).toString()}"][data-y="${(originY).toString()}"]`);
                    rootElPlusTwo = document.querySelector(`[data-x="${(originX + 2).toString()}"][data-y="${(originY).toString()}"]`);
                    rootElPlusThree = document.querySelector(`[data-x="${(originX + 3).toString()}"][data-y="${(originY).toString()}"]`);
                }
            }

            if (ship.name === 'four-long') {
                if (orientation === 'horizontal') {
                    originX = randomOrigin(8);
                    originY = randomOrigin(5);
                    setRootElements();
                }
                if (orientation === 'vertical') {
                    originX = randomOrigin(5);
                    originY = randomOrigin(8);
                    setRootElements();
                }
                placeShipOnBoard(ship.name, [rootEl, rootElPlusOne, rootElPlusTwo, rootElPlusThree]);
            }
            if (ship.name === 'four-long-2') {
                if (orientation === 'horizontal') {
                    originX = randomOrigin(8);
                    originY = randomOrigin(5);
                    setRootElements();
                }
                if (orientation === 'vertical') {
                    originX = randomOrigin(5);
                    originY = randomOrigin(8);
                    setRootElements();
                }
                placeShipOnBoard(ship.name, [rootEl, rootElPlusOne, rootElPlusTwo, rootElPlusThree]);    
            }
            if (ship.name === 'three-long') {
                if (orientation === 'horizontal') {
                    originX = randomOrigin(8);
                    originY = randomOrigin(6);
                    setRootElements();
                }
                if (orientation === 'vertical') {
                    originX = randomOrigin(6);
                    originY = randomOrigin(8);
                    setRootElements();
                }
                placeShipOnBoard(ship.name, [rootEl, rootElPlusOne, rootElPlusTwo]);
            }
            if (ship.name === 'two-long') {
                if (orientation === 'horizontal') {
                    originX = randomOrigin(8);
                    originY = randomOrigin(7);
                    setRootElements();
                }
                if (orientation === 'vertical') {
                    originX = randomOrigin(7);
                    originY = randomOrigin(8);
                    setRootElements();
                }
                placeShipOnBoard(ship.name, [rootEl, rootElPlusOne]);
            }
        })
        removeShipsFromContainer();
    }
    
    resetShips();

    const rotateButton = document.querySelector('#rotate-ships-button');
    rotateButton.addEventListener('click', rotateShips);

    const randomizeShipsButton = document.querySelector('#randomize-ships-button');
    randomizeShipsButton.addEventListener('click', placeShipsRandomly);

}