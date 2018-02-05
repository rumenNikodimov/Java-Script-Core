function cityMarket(strArr) {
    let summary = new Map()

    for(let row of strArr) {
        let [town, product, sales] = row.split(' -> ')
        sales = sales.split(' : ')
            .map(e => Number(e))
            .reduce((a,b) => a * b)
        //verify town exists
        if (!summary.has(town)) {
            summary.set(town, new Map())
        }
         //verify product exists
        if (!summary.get(town).has(product)) {
            summary.get(town).set(product, 0)
        }
        let oldSales = summary.get(town).get(product)
        summary.get(town).set(product, oldSales + sales)
    }
    for(let [town, products] of summary){
        console.log(`Town - ${town}`)
        for(let [product, sales] of products){
            console.log(`$$$${product} : ${sales}`)
        }
    }
}

cityMarket(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'])