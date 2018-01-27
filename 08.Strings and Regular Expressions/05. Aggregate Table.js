function aggregateTable(input) {
    let sum = 0
    let list = []

    for (let line of input) {
        let towndata = line.split('|')
        townName = towndata[1].trim()
        income = Number(towndata[2].trim())
        list.push(townName)
        sum += income
    }
    console.log(list.join(', ') + '\n' + sum)
}

ageregateTable(['| Sofia           | 300',
                '| Veliko Tarnovo  | 500',
                '| Yambol          | 275']
                )