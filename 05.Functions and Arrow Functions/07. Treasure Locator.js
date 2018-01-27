function treasureLocator(input){
    for (let i = 0; i < input.length; i+=2) {
        let x = Number(input[i])
        let y = Number(input[i + 1])

        if(x >= 1 && x <= 3 && y >= 1 && y <= 3){
            console.log('Tuvalu')
        } else if(x >= 0 && x <= 2 && y >= 6 && y <= 8){
            console.log('Tonga')
        } else if(x >= 4 && x <= 9 && y >= 7 && y <= 8) {
            console.log('Cook')
        } else if(x >= 5 && x <= 7 && y >= 3 && y <= 6){
            console.log('Samoa')
        } else if(x >= 8 && x <= 9 && y >= 0 && y <= 1){
            console.log('Tokelau')
        } else {
            console.log('On the bottom of the ocean')
        }
    }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3])
treasureLocator([6, 4]

)

function locateTreasure(points) {
    const islands = [
        { Name: 'Tokelau', xMin: 8, xMax: 9, yMin: 0, yMax: 1},
        { Name: 'Tuvalu', xMin: 1, xMax: 3, yMin: 1, yMax: 3},
        { Name: 'Samoa', xMin: 5, xMax: 7, yMin: 3, yMax: 6},
        { Name: 'Tonga', xMin: 0, xMax: 2, yMin: 6, yMax: 8},
        { Name: 'Cook', xMin: 4, xMax: 9, yMin: 7, yMax: 8}
    ]

    for (let i = 0; i < points.length; i+=2) {
        let currPoint = { x: Number(points[i]), y: Number(points[i + 1])};

        let foundIsland = islands.find(i => isInsideIsland(currPoint, i) == true);

        if(foundIsland != undefined){
            console.log(foundIsland.Name);
        }else{
            console.log('On the bottom of the ocean');
        }
    }

    function isInsideIsland(currPoint, island) {
        if(Number(currPoint.x) >= Number(island.xMin) && Number(currPoint.x) <= Number(island.xMax) &&
            Number(currPoint.y) >= Number(island.yMin) && Number(currPoint.y) <= Number(island.yMax)){
            return true;
        }

        return false;
    }
}