function oddNumbers(input) {
     let elements = input.filter((a, i) => i%2 == 1).reverse().map(x => x*2)
    console.log(elements.join(' '))
}

oddNumbers([10, 15, 20, 25])