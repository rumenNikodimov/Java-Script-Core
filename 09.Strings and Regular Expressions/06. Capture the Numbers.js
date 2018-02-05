function captureTheNumbers(input) {
    let pattern = /\d+/gm
    result = []
    let text = ''

    for (let i = 0; i < input.length; i++) {
        let currentElement = input[i]
        text += currentElement + ' '
    }

    let match = pattern.exec(text)

    while(match){
        result.push(match[0])
        match = pattern.exec(text)
    }

    console.log(result.join(' '))
}

captureTheNumbers(['The300', 'What is that?',
    'I think it’s the 3rd movie.', 'Lets watch it at 22:45'])
captureTheNumbers([
'123a456',
'789b987',
'654c321',
'0'])
captureTheNumbers(['Let’s go11!!!11!', 'Okey!1!'])