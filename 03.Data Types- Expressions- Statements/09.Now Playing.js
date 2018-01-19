function concat(input){
    let song = input[0]
    let singer = input[1]
    let duration = input[2]

    let result = `Now Playing: ${singer} - ${song} [${duration}]`
    console.log(result)
}

concat(['Number One', 'Nelly', '4:09'])