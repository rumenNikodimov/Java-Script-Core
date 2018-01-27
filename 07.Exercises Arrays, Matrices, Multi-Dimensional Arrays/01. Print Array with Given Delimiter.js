function delimeter(input){
    let result = []
    let index = input.length - 1
    let delimeter = input[input.length -1]
    for (let i = 0; i < index; i++) {
        result += input[i]
        if(i < index - 1){
            result += delimeter
        }
    }

    return result
}

console.log(delimeter(['One', 'Two', 'Three', 'Four', 'Five', '-']));