function sumOf3Numbers(input) {
    let sum = 0;
    for(let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }

    debugger
    let vat = sum * 0.20;
    let total = sum * 1.20;
    console.log("sum = " + sum);
    console.log("VAT = " + vat);
    console.log("total = " + total);
}

sumOf3Numbers([1.20, 2.60, 3.50])