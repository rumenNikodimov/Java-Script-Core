function nThElement(input){
    let n = Number(input.pop())
    let result = []
    for (let i = 0; i < input.length; i+=n) {
        result.push(input[i]);
    }
    return result.join('\n')
}

console.log(nThElement([5, 20, 31, 4, 20, 2]));
console.log(nThElement(['dsa', 'asd', 'test', 'tset', 2]));