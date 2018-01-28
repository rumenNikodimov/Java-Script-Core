function sort(arr) {
    arr.sort((a,b) => a>b).sort((a, b) => a.length > b.length)
    console.log(arr.join('\n'))
}

sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])