function catalogue(arr) {
    let result = new Map()

    for(let row of arr){
        let tokens = row.split(' : ')
        let product = tokens[0]
        let firstLetter = product[0]
        let price = Number(tokens[1])
        if(!result.has(firstLetter)){
            result.set(firstLetter, new Map())
        }
        if(!result.get(firstLetter).has(product)){
            result.get(firstLetter).set(product, 0)
        }
        result.get(firstLetter).set(product, price)
    }

    console.log(result)
    let sortFunc = function orderBy(a, b) {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
    };

    // Sort and print
    [...result].sort(sortFunc)
        .forEach(([result, products]) => {
            console.log(result);
            [...products].sort(sortFunc)
                .forEach(([name, price]) => {
                    console.log(`  ${name}: ${price}`);
                });
        })
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])