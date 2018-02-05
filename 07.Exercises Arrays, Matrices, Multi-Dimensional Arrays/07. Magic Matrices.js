function magicMatrix(matrix) {
    let firstRow
    function isRowsEqual() {
        firstRow = matrix[0].map(Number).reduce((a, b) => a+b)
        for (let row = 1; row < matrix.length; row++) {
            let secondRow = matrix[row].map(Number).reduce((a,b) => a+b)
            if(firstRow != secondRow){
                return false
            }
        }
        return true
    }
   function isColumnsEqual(matrix) {


       for (let col = 0; col < matrix[0].length; col++) {
           let currentCol = 0
           for (let row = 0; row < matrix.length; row++) {
               currentCol += Number(matrix[row][col])
           }
           if (firstRow != currentCol) {
               return false
           }
       }
       return true
   }

   if(isRowsEqual(matrix) == false || isColumnsEqual(matrix) == false){
        return false
   } else {
        return true
   }
}

console.log(magicMatrix([[4, 5, 6],
                        [6, 5, 4],
    [5, 5, 5]]));
console.log(magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));

console.log(magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]

));