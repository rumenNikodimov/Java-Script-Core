function capitalize(text) {
    text = text.split(' ')
    let result = ''

    for(let e of text){
        result += e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() + ' '
    }

   console.log(result)
}

capitalize('Capitalize these words')
capitalize('Was that Easy? tRY thIs onE for SiZe!')