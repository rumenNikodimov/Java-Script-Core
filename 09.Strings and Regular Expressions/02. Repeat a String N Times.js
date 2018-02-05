function repeat(repeat, n) {
    repeat += repeat.repeat(n - 1)
    console.log(repeat)
}
repeat('repeat', '5')