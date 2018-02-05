function isDiagonalEqual(arr) {
    let matrix = []
    for (let i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(' ').map(Number))

    }
    let firstDiagonal = 0
    let secondDiagonal = 0

    for (let row = 0; row < matrix.length; row++) {
            firstDiagonal += Number(matrix[row][row])
            secondDiagonal += Number(matrix[row][matrix.length - 1 - row])
    }
    if(firstDiagonal != secondDiagonal){
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i])

        }
    } else {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row !== col && col !== matrix[row].length - 1 - row){
                    matrix[row][col] = firstDiagonal;
                }
            }
        }
        // for (let i = 0; i < matrix.length; i++) {
        //     console.log(matrix[i])
        //
        // }

        let result = '';

        for (let row of matrix) {
            result += row.join(' ') + '\n';
        }

        console.log(result)
    }
}

isDiagonalEqual(['5 3 12 3 1',
                 '11 4 23 2 5',
                 '101 12 3 21 10',
                 '1 4 5 2 2',
                 '5 22 33 11 1']
)

// isDiagonalEqual(['1 1 1',
//                  '1 1 1',
//                  '1 1 0']
// )