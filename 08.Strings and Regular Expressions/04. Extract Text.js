function extractText(input) {
    let result = []
    let startIndex = input.toString().indexOf('(')

    while (startIndex > -1) {
        let endIndex = input.indexOf(')', startIndex)
        if (endIndex == -1) {
            break
        }
        let currentText = input.substring(startIndex + 1, endIndex)
        result.push(currentText)
        startIndex = input.indexOf('(', endIndex)
    }
    console.log(result.join(', '));
}

extractText("Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)")