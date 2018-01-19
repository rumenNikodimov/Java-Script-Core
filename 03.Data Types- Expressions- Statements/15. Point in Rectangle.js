function pointInOrRectangle(input){
    let xx = input[0]
    let yy = input[1]
    let x1 = input[2]
    let x2 = input[3]
    let y1 = input[4]
    let y2 = input[5]

    if(xx >= x1 && xx <= x2 && yy >= y1 && yy <= y2){
        console.log('inside')
    } else {
        console.log('outside')
    }
}

pointInOrRectangle([12.5, -1, 2, 12, -3, 3])