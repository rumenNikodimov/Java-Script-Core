function splitText(text){
    let elements = text.split(/[\s.;.(),]+/)
    console.log(elements.join('\n'))
}

splitText('let sum = 4 * 4,b = "wow";')