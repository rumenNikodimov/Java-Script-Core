function heroInventory(arr) {
    let heroes = []
    for(let element of arr){
        let tokens = element.split(' \/ ')
        let name = tokens[0]
        let level = Number(tokens[1])
        let items = []
        if(tokens.length > 2){
            items = tokens[2].split(', ')
        }
        let currentHero = {
            name: name,
            level: level,
            items: items
        }
        heroes.push(currentHero)
    }
    console.log(JSON.stringify(heroes))
}

heroInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])

heroInventory(['Jake / 1000 / Gauss, HolidayGrenade'])

