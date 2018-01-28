// function magicMatrix(input) {
//     let matrix = input.map(row => row.join(' '))
//
//     let firstRow = matrix[0].split(' ')
//     let secondRow = matrix[1].split(' ')
//     let index = secondRow.length
//     let count = 0
//     let sum1 = 0
//     let sum2 = 0
//
//     for (let i = 0; i < secondRow.length; i++) {
//         sum1 += Number(firstRow[i])
//         sum2 += Number(secondRow[i])
//     }
//
//     if(sum1 != sum2){
//         count++
//     }
//     if(count == 0){
//         return true
//     }
// }

function magicMatrix(matrix) {

    function isRowsEqual(matrix) {
        let firstRow = matrix[0].map(Number).reduce((a, b) => a+b)
        for (let row = 0; row < matrix.length; row++) {
            let secondRow = matrix[row].map(Number).reduce((a,b) => a+b)
            if(firstRow != secondRow){
                return false
            }
        }
        return true
    }

   function isColumnsEqual(matrix) {
       let firstCol = 0
       let secondCol = 0
       let thirdCol = 0
       for (let row = 0; row < matrix.length; row++) {
           for (let col = 0; col < matrix[row].length; col++) {
               firstCol += Number(matrix[col][row])
               secondCol += Number(matrix[col][row+1])
               thirdCol += Number(matrix[col][row+2])
               if(firstCol != secondCol || firstCol != thirdCol){
                return false
               }
           }


       }
       return true
   }

   if(isColumnsEqual(matrix) == false || isRowsEqual(matrix) == false){
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