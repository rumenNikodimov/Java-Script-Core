function countWords(input) {
    let words = input.toString().split(/\W/).filter(e => e != '')
    let result = { }
    for(let word of words) {
        if (!result.hasOwnProperty(word)) {
            result[word] = 0
        }
        result[word] += 1
    }

    return JSON.stringify(result)
}

console.log(countWords(['Far too slow, you\'re far too slow.']));