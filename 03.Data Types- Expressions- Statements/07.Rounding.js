function rounding(input){
    let number = input[0].toString().split('.')[1].length
    let round = input[1]
    round = Math.min(15, number, round)
    console.log(`${input[0].toFixed(round)}`)
}

rounding([3.1415926535897932384626433832795, 2])
