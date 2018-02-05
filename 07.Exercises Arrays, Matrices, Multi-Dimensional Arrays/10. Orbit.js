function solve(input) {
    const rows = Number(input[0]);
    const cols = Number(input[1]);
    const starRow = Number(input[2]);
    const starCol = Number(input[3]);

    // Create empty matrix
    let matrix = [];
    createMatrix();
    matrix[starRow][starCol] = 1;

    fillMatrix();

    let result = getResult();

    return result;

    // Functions
    function getResult() {
        let result = '';

        for (let row = 0; row < matrix.length; row++) {
            result += matrix[row].join(' ').trim() + '\n';
        }

        return result;
    }

    function fillMatrix() {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
            }
        }
    }

    function createMatrix() {
        for (let row = 0; row < rows; row++) {
            matrix[row] = new Array(cols);
        }
    }
}

console.log(solve([4, 3, 0, 0]));
console.log(solve([5, 5, 2, 2]));
console.log(solve([3, 3, 2, 2]));
console.log(solve([1, 1, 0, 0]));
console.log(solve([5, 5, 0, 4]));