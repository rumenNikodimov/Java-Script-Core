function fillSpiralMatrix(rows, cols) {
    const totalElements = rows * cols;

    // Create matrix with undefined values
    let matrix = [];
    for(let row = 0; row < rows; row++) {
        matrix[row] = new Array(cols);
    }

    // Fill matrix
    fillMatrix();

    // Generate matrix output
    let result = getOutput();

    return result;

    function fillMatrix(startValue = 1, startRow = 0, endRow = matrix.length - 1, startCol = 0, endCol = matrix[0].length - 1) {
        while(startValue <= totalElements){
            // Go right
            for (let col = startCol; col <= endCol; col++) {
                matrix[startRow][col] = startValue;
                startValue++;
            }

            // Go down
            for (let row = startRow + 1; row <= endRow; row++) {
                matrix[row][endCol] = startValue;
                startValue++;
            }

            // Go left
            for (let col = endCol - 1; col >= startCol; col--) {
                matrix[endRow][col] = startValue;
                startValue++;
            }

            // Go up
            for (let row = endRow - 1; row > startRow; row--) {
                matrix[row][startCol] = startValue;
                startValue++;
            }

            startCol++;
            endCol--;
            startRow++;
            endRow--;
        }
    }

    function getOutput() {
        let result = '';

        for (let row = 0; row < matrix.length; row++) {
            result += matrix[row].join(' ') + '\n';
        }

        return result;
    }
}

console.log(fillSpiralMatrix(5, 5));
console.log(fillSpiralMatrix(3, 3));