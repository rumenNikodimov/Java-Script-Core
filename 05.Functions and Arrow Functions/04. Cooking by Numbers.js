function cookingNumbers(input){
    let numbers = []
    numbers.push(input[0])
    let number

    for (let i = 1; i < input.length; i++){

        switch(input[i]){
            case 'chop':
                numbers.push(numbers[numbers.length - 1] / 2)
                break
            case 'dice':
                numbers.push(Math.sqrt(numbers[numbers.length - 1]));
                break
            case 'spice':
                numbers.push(numbers[numbers.length - 1] + 1);
                break
            case 'bake':
                numbers.push(numbers[numbers.length - 1] * 3);
                break
            case 'fillet':
                numbers.push((numbers[numbers.length - 1] * 80) /100);
        }
    }
    numbers.splice(0, 1)
    return numbers.join("\n")
}

//.log(cookingNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']))
console.log(cookingNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']));