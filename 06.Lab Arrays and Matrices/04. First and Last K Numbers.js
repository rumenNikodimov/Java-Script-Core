function m(input) {
    let k = Number(input.shift())

    let firstElements = input.slice(0, k)
    let lastElements = input.slice(input.length - k)

    console.log(firstElements.join(' '))
    console.log(lastElements.join(' '))
}

m([2,
    7, 8, 9]
)

m(
    [3,
    6, 7, 8, 9]
)