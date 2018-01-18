function filter(input1, input2, input3, input4, input5) {
    let age = input1
    let person = {name: input2, age: input3}
    let person1 = {name: input4, age: input5}
    if(person.age >= age){
        console.log({name: person.name, age: person.age})
    }
    if(person1.age >= age){
        console.log({name: person1.name, age: person1.age})
    }
}

filter(12, 'Ivan', 15, 'Asen', 9)