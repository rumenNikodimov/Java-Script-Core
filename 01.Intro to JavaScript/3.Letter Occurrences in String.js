function count(input1, input2) {
    let text = input1
    let pattern = input2
    let count = 0

    for(let i = 0; i <= text.length - 1; i++){
        if(text[i] === pattern){
            count++
        }
    }
    console.log(count)
}

count('hello', 'l')