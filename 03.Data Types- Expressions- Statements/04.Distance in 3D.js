function distance(input){
    let x = Math.sqrt(Math.pow(Math.abs(input[3] - input[0]), 2) 
    + Math.pow(Math.abs(input[4] - input[1]), 2) 
    + Math.pow(Math.abs(input[5] - input[2]), 2))
    console.log(x)
}

distance([3.5, 0, 1, 0, 2, -1]);