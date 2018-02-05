function match(text) {
    return text.split(/\W/g).filter(e => e != '').join('|')
        
}

console.log(match('A Regular Expression needs to have the global flag in order to match all occurrences in the text'))