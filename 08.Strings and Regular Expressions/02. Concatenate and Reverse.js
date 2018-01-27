function concatReverse(input) {
    let str = input.join('')
    let chars = Array.from(str)
    let revChars = chars.reverse().join('')



    return revChars
}
console.log(concatReverse(['I', 'am', 'student']))
console.log(concatReverse(['race', 'car']))