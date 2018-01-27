function isPointInside(input){
    const xMin = 10;
    const xMax = 50;
    const yMin = 20;
    const yMax = 80;
    const zMin = 15;
    const zMax = 50;

    for (let i = 0; i < input.length; i+=3) {

        let currentX = input[i]
        let currentY = input[i+1]
        let currentZ = input[i+2]

        if(currentX >= xMin && currentX <= xMax && currentY >= yMin && currentY <= yMax && currentZ >= zMin && currentZ <= zMax){
            console.log('inside');
        } else {
            console.log('outside');
        }
    }
}

//console.log(isPointInside([8, 20, 22]));

isPointInside([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43])