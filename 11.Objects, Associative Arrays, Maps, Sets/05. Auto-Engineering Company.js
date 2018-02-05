function autoEng(arrWithData) {
    let cars = new Map()
    for(let row of arrWithData){
        let [make, model, quantity] = row.split(' | ')
        quantity = Number(quantity)

        if(!cars.has(make)){
            cars.set(make, new Map())
        }
        if(!cars.get(make).has(model)) {
            cars.get(make).set(model, 0)
        }
        let oldQuantity = cars.get(make).get(model)
        cars.get(make).set(model, oldQuantity + quantity)
    }
    [...cars].forEach(([make, models]) => {
        console.log(make);
        [...models].forEach(([model, quantity]) =>{
            console.log(`###${model} -> ${quantity}`)
        })

    })

    //console.log(cars)
}

autoEng([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])