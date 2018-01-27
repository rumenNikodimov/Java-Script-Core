function printLetters(input) {
    for (let i = 0; i < input.length; i++) {
        console.log(`str[${i}]`.concat(' -> ').concat(input[i]))

    }
}

printLetters('Hello, World!')