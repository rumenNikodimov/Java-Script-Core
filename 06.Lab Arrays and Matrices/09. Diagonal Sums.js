function diagonalSum(input) {
    let mainSum = 0
    let secondSum = 0
    for (let row = 0; row < input.length; row++) {
        mainSum += input[row][row]
        secondSum += input[row][input.length - row - 1]
    }
    console.log(mainSum + ' ' + secondSum)
}

diagonalSum([[20, 40],
    [10, 60]]
)