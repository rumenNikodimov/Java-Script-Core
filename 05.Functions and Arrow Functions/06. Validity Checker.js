// function  checker(input) {
//     let start = {x: 0, y:0}
//     let firstPoint = { x: Number(input[0]), y: Number(input[1]) }
//     let secondPoint = { x: Number(input[2]), y: Number(input[3]) }
//     let getDistance = (firstPoint, secondPoint) => Math.sqrt(Math.pow(secondPoint.x - firstPoint.x, 2) + Math.pow(secondPoint.y - firstPoint.y, 2))
//     let generateResult = (firstPoint, secondPoint, result)
// }
//
// checker([3, 0, 0, 4])
//
//
// 23 lines (19 sloc)  1.61 KB
function validityChecker(input) {
    // Input
    let startOfCoordinateSystem = { x: 0, y: 0 };
    let firstPoint = { x: Number(input[0]), y: Number(input[1]) };
    let secondPoint = { x: Number(input[2]), y: Number(input[3]) };

    // Functions
    let getDistance = (firstPoint, secondPoint) => Math.sqrt(Math.pow(secondPoint.x - firstPoint.x, 2) + Math.pow(secondPoint.y - firstPoint.y, 2));
    let generateResult = (firstPoint, secondPoint, result) => `{${firstPoint.x}, ${firstPoint.y}} to {${secondPoint.x}, ${secondPoint.y}} is ${result}`;

    // Check distances
    let distanceBetweenFirstPointAndStart = getDistance(firstPoint, startOfCoordinateSystem) === Math.round(getDistance(firstPoint, startOfCoordinateSystem)) ? generateResult(firstPoint, startOfCoordinateSystem, 'valid') : generateResult(firstPoint, startOfCoordinateSystem, 'invalid');
    let distanceBetweenSecondPointAndStart = getDistance(secondPoint, startOfCoordinateSystem) === Math.round(getDistance(secondPoint, startOfCoordinateSystem)) ? generateResult(secondPoint, startOfCoordinateSystem, 'valid') : generateResult(secondPoint, startOfCoordinateSystem, 'invalid');
    let distanceBetweenFirstPointAndSecondPoint = getDistance(firstPoint, secondPoint) === Math.round(getDistance(firstPoint, secondPoint)) ? generateResult(firstPoint, secondPoint, 'valid') : generateResult(firstPoint, secondPoint, 'invalid');

    // Log results
    console.log(distanceBetweenFirstPointAndStart);
    console.log(distanceBetweenSecondPointAndStart);
    console.log(distanceBetweenFirstPointAndSecondPoint);
}

validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);



