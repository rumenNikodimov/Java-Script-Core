// function bill(input) {
//     let list = []
//     let sum = 0
//
//     for (let i = 1; i < input.length; i+=2) {
//         list.push(input[i-1])
//         sum += Number(input[i])
//     }
//     console.log('You purchased' + ' ' +list.join(', ') + ' ' + 'for a total sum of' + ' ' + sum)
// }

function bill(input) {
    let item = input.filter((x,i) => i%2 == 0)
    let sum = input.filter((x,i) => i%2 == 1)
        .map(Number).reduce((a,b) => a + b)

    console.log(`You parchased ${item.join(', ')} for total sum ${sum}`)
}

bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])