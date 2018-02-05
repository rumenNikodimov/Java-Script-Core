// function count(text, string) {
//     text = text.toString().toLowerCase()
//     console.log(occurrences(text, string));
//
//     function occurrences(string, subString, allowOverlapping) {
//
//         string += "";
//         subString += "";
//         if (subString.length <= 0) return (string.length + 1);
//
//         var n = 0,
//             pos = 0,
//             step = allowOverlapping ? 1 : subString.length;
//
//         while (true) {
//             pos = string.indexOf(subString, pos);
//             if (pos >= 0) {
//                 ++n;
//                 pos += step;
//             } else break;
//         }
//         return n;
//     }
// }

function countOccurrences(text, word) {
    const regex = new RegExp('\\b' + word + '\\b', 'gi');

    let counter = 0;

    let match = [];

    while((match = regex.exec(text)) != null){
        counter++;
    }

    return counter;
}

console.log(countOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the'));
console.log(countOccurrences('How do you plan on achieving that? How? How can you even think of that?', 'how'));
console.log(countOccurrences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there'));


// function countInstances(string, word) {
//     string = string.toString().toLowerCase()
//     return string.split(word + ' ').length - 1;
// }
//
// console.log(countInstances('The waterfall was so high, that the child couldn’t see its peak.', 'the'));
//
// console.log(countInstances('There was one. Therefore I bought it. I wouldn’t buy it otherwise.',
//     'there')
// )