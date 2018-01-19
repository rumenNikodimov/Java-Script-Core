function properties(input) {
    let firstRow = input[0]
    let secondRow = input[2]
    let thirdRow = input[4]
    let obj = {
        firstRow: input[1],
        secondRow: input[3],
        thirdRow: input[5]
    }

    console.log(obj)       
}

properties(['ssid', '90127461', 'status', 'admin', 'expires', '600'])