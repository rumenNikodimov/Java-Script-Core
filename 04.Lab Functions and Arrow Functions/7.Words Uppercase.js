function wordUppercase(str){
    let strUpper = str.toUpperCase()
    let words = extractWords()
    words = words.filter(w => w != '')
    return words.join(', ')
    function extractWords(){return strUpper.split('/\W+/')}
}

console.log(wordUppercase('Hi, how are you?'))