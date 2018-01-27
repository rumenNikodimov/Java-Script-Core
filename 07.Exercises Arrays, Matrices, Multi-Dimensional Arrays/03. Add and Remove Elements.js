function addOrRemoveElements(input) {
    let count = 1
    let result = []

    for (let i = 0; i < input.length; i++) {
        if(input[i] === 'add'){
            result.push(count)
            count++
        } else if(input[i] === 'remove'){
            result.pop()
            count++
        }
    }
    if(result.length > 0) {
        return result.join('\n')
    } else {
        return "Empty"
    }
}

//console.log(addOrRemoveElements(['add', 'add', "add", "add"]));
console.log(addOrRemoveElements(['add', 'add', "remove", "add", "add"]));
//console.log(addOrRemoveElements(['remove', 'remove', "remove"]));
