function match(input) {
    let regex = /\b_([a-zA-Z0-9]+)\b/g
    let match = regex.exec(input)
    let result = []
    while(match){
        result.push(match[1])
        match = regex.exec(input)
    }
    console.log(result.join(','))
}

match('The _id and _age variables are both integers.')