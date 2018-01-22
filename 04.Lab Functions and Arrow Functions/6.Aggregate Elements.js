function aggregate(arr){
    function aggregate(elements, start, func){
        for (let e of elements){
            start = func(start, e)
        }
        return start
    }
    console.log(aggregate(arr, 0, (a, b) => a + b))
    console.log(aggregate(arr, 0,  (a, b) => a + 1 / b))
    console.log(aggregate(arr, '', (a, b) =>  a + b))
}

aggregate([1, 2, 3])

// function aggregateElements(elements) {
//     aggregate(elements, 0, (a, b) => a + b);
//     aggregate(elements, 0, (a, b) => a + 1 / b);
//     aggregate(elements, '', (a, b) => a + b);
//     function aggregate(arr, initVal, func) {
//         let val = initVal;
//         for (let i = 0; i < arr.length; i++)
//             val = func(val, arr[i]);
//         console.log(val);
//     }
// }
//
// aggregateElements([1,2,3,4,5])