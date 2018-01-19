function distance(input) {
    let time = input[2] / 3600
    let s1 = input[0] * time
    let s2 = input[1] * time
    console.log(Math.abs(s1 - s2) * 1000)
}

distance([5, -5, 40])