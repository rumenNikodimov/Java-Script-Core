function rotate(input) {
    let n = Number(input.pop())
    //let result = []
    // for (let i = 0; i < input.length; i++) {
    //     result.push(input[i])
    // }
    let currentElement
    for (let i = 0; i < n % input.length; i++) {
        currentElement = input.pop()
        input.unshift(currentElement)
    }
    return input.join(' ')
}

console.log(rotate(["Banana", "Orange", "Coconut", "Apple", "15"]))
console.log(rotate(["1", "2", "3", "4", "2"]))