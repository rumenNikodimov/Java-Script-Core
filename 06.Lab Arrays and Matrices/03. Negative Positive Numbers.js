function oddOrEven(input) {
    let result = []
    for(let num of input){
        if(num < 0){
            result.unshift(num)
        } else if(num >= 0){
            result.push(num)
        }
    }

    console.log(result.join('\n'));
}

oddOrEven([7, -2, 8, 9])
oddOrEven([3, -2, 0, -1])