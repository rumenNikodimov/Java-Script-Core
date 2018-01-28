// function lastSequence(length, sequence) {
//
//     let result = []
//     result.push(1)
//     for (let i = 1; i < sequence; i++) {
//         result.push(i)
//     }
//     for (let i = sequence; i < length; i++) {
//         let sum = result[i] + result[]
//
//     }
// }

// Calculate sequence with n elements
// Each element is sum of the last k elements
function lastKNumbersFunction(n, k) {
    let resultArr = [ 1 ];

    calcElements();

    return resultArr.join(' ');

    function calcElements() {
        if (resultArr.length == n){
            return;
        }

        let nextElement = resultArr.reverse().slice(0, k).reduce((a, b) => a + b, 0);
        resultArr.reverse().push(nextElement);
        calcElements();
    }
}

console.log(lastKNumbersFunction(6, 3));
console.log(lastKNumbersFunction(8, 2));

lastSequence(6, 3)