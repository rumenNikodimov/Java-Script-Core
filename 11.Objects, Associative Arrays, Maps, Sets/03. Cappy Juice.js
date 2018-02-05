function juice(arr) {
    let juice = new Map()
    let result = new Map()
    for(let j of arr){
        let [fruit, quantity] = j.split(' => ')
        if(!juice.has(fruit)){
            juice.set(fruit, 0)
        }
        let oldQuantity = juice.get(fruit)
        juice.set(fruit, oldQuantity + Number(quantity))
        if(juice.get(fruit) >= 1000){
            quantity = Math.floor(juice.get(fruit) / 1000)
            result.set(fruit, quantity)
        }
    }

    [...result].forEach(([fruit, quantity]) => console.log(`${fruit} => ${quantity}`))
}

juice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549',])
juice([
   'Kiwi => 234',
   'Pear => 2345',
   'Watermelon => 3456',
   'Kiwi => 4567',
   'Pear => 5678',
   'Watermelon => 6789'
])