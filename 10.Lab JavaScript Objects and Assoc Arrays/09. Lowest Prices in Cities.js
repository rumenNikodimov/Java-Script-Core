function lowestPrices(arr) {
    let products = new Map()
    for (let row of arr) {
        let tokens = row.split(' | ')
        let town = tokens[0]
        let product = tokens[1]
        let price = Number(tokens[2])

        if (!products.has(product)) {
            products.set(product, new Map())
        }
        if(!products.get(product).has(town)){
            products.get(product).set(town, 0)
        }
        products.get(product).set(town, price)
    }
    print(products)

    console.log(products)

    function print(products) {
        [...products].forEach(([product, towns]) => {
            let cheapest = [...towns].sort((a,b) => {
                if(a[1] < b[1]) return -1
                if(a[1] > b[1]) return 1
                return 0
            })[0]

            console.log(`${product} -> ${cheapest[1]} (${cheapest[0]})`)
        })
    }
}
lowestPrices([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
])