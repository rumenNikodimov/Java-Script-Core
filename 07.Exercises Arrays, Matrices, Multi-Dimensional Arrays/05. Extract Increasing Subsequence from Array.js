function increaseSequence(input) {
    let result = []
    result.push(input[0])

    for (let i = 1; i < input.length; i++) {
        let currentElement = result[result.length -1]
        let nextElement = input[i]

        if(currentElement < nextElement){
            result.push(nextElement)
        } else {
            continue
        }
    }
        return result.join('\r\n')
}

console.log(increaseSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(increaseSequence([1, 2, 3, 4]));
console.log(increaseSequence([20, 2, 2, 4, 4, 5]));