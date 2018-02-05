function uniqueWords(strArr) {
    let text = strArr.join('\n')
    let words = text.split(/\W+/)
        .filter(e => e != '')
        .map(e => e.toLowerCase())
    let unique = new Set()
    for(let word of words){
        unique.add(word)
    }
    console.log([...unique].join(', '));
}

uniqueWords([
    'JS devs use Node.js for server-side JS.',
    'JS devs use JS.',
    '-- JS for devs --'])