function units(number) {
    let unit = Math.floor(number / 12).toString()
    let unit1 = (number % 12).toString()
    let firstString = `${unit}'-`
    let secondString = `${unit1}"`
    
    console.log(firstString.concat(secondString))
}

units(55)