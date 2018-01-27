function addElements(input){
    let firstNum = Number(input[0])
    let secondNum = Number(input[input.length - 1])
    return firstNum + secondNum
}

console.log(addElements(['5', '10']))