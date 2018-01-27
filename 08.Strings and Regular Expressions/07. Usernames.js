function names(input) {
    let results = []
    for(let email of input){
        let [name, domain] = email.split('@')
        let username = name + '.'
        let domainParts = domain.split('.')
        domainParts.forEach(p => username += p[0])
        results.push(username)
    }
    console.log(results.join(', '))
}

names(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])