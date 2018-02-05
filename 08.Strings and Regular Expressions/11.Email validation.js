function validator(email){
    let pattern = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/gm

    let result = pattern.test(email)

    if(result){
        return 'Valid'
    } else {
        return 'Invalid'
    }
} 

console.log(validator('valid@email.bg'))
console.log(validator('invalid@emai1.bg'))