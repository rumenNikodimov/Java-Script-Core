function evenNums(input){
    let result = []
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            result.push(input[i])
        }
    }
    return result.join(' ')
}

console.log(evenNums(['20', '30', '40']))