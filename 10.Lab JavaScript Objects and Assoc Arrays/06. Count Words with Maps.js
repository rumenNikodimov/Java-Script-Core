function countWords(input) {
    let words = input.join('\n').toLowerCase()
        .split(/\W/).filter(e => e != '')

        let wordsCount = new Map()

        for(let w of words){
            wordsCount.has(w)
                ? wordsCount.set(w, wordsCount.get(w) +1 )
                : wordsCount.set(w, 1)
        }
        let allWords = Array.from(wordsCount.keys()).sort()
    allWords.forEach(w => console.log(`'${w}' -> ${wordsCount.get(w)} times`))
}


console.log(countWords(['Far too slow, you\'re far too slow.']));