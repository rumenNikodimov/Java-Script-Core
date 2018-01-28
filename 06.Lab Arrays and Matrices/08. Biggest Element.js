function biggestElement(matrix){
    return matrix
        .concat.apply([], matrix)
        .sort((a, b) => b - a)[0]
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
));