function sumByTowns(strArr) {
    let towns = { }
    for (let i = 0; i < strArr.length; i+=2) {
        let town = strArr[i]
        let value = Number(strArr[i+1])
        if(!towns.hasOwnProperty(town)){
            towns[town] = 0
        }
        towns[town] += value
    }
    return JSON.stringify(towns)
}

console.log(sumByTowns(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']));