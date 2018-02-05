function fillBlank(username, email, phone, arr) {
    let namePattern = /<![A-Za-z]+!>/g
    let emailPattern = /<@[A-Za-z]+@>/g
    let phonePattern = /<\+[a-zA-Z]+\+>/g


    for(let e of arr){
        e = e.replace(namePattern, username)
        e = e.replace(emailPattern, email)
        e = e.replace(phonePattern, phone)
        console.log(e)
    }
}

fillBlank('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
)