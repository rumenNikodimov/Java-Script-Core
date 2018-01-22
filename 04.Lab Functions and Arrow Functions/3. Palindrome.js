function palindrome(input){
    let reverse = input.split("").reverse().join("")
    let index = Math.ceil(input.length / 2)
    let result = true
    let count = 0

    for (let i = 0; i < index; i++) {
        if(input[i] != reverse[i]){
            count++
        }
    }
    if(count > 0){
        result = false
    }
    console.log(result)
    
}

palindrome('unitinu')