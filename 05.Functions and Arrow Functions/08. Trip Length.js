function tripLength(input){
    let firstPoint = {x: input[0], y: input[1]}
    let secondPoint = {x: input[2], y: input[3]}
    let thirdPoint = {x: input[4], y: input[5]}

    let distance12 = Math.sqrt(Math.pow(secondPoint.x - firstPoint.x, 2) + Math.pow(secondPoint.y - firstPoint.y, 2))
    let distance23 = Math.sqrt(Math.pow(thirdPoint.x - secondPoint.x, 2) + Math.pow(thirdPoint.y - secondPoint.y, 2))
    let distance13 = Math.sqrt(Math.pow(firstPoint.x - thirdPoint.x, 2) + Math.pow(firstPoint.y - thirdPoint.y, 2))

    if(distance12 <= distance23 && distance23 <= distance13){
        let sum = distance12 + distance23
        console.log(`1->2->3: ${sum}`)
    }

    if(distance12 <= distance23 && distance23 >= distance13){
        let sum = distance12 + distance13
        console.log(`2->1->3: ${sum}`)
    }

    if(distance12 >= distance13 && distance13 >= distance23){
        let sum = distance13 + distance23
        console.log(`1->3->2: ${sum}`)
    }
}

// function solve(input) {
//     let x1 = Number(input[0]);
//     let y1 = Number(input[1]);
//     let x2 = Number(input[2]);
//     let y2 = Number(input[3]);
//     let x3 = Number(input[4]);
//     let y3 = Number(input[5]);
//
//     let distance12 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
//     let distance23 = Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2), 2));
//     let distance13 = Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1), 2));
//
//
//     if ((distance12 <= distance13) && (distance13 => distance23)) {
//         let a = distance12 + distance23;
//         console.log('1->2->3: ' + a);
//     }
//     else if ((distance12 <= distance23) && (distance13 < distance23)) {
//         let b = distance13 + distance12;
//         console.log('2->1->3: '+ b);
//     }
//     else {
//         let c = distance23 + distance13;
//         console.log('1->3->2: ' + c);
//     }
//
// }

tripLength([0, 0, 2, 0, 4, 0])

tripLength([5, 1, 1, 1, 5, 4])

tripLength([-1, -2, 3.5, 0, 0, 2])