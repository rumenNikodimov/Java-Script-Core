function split(text, delimeter) {
    text = text.split(delimeter)
    console.log(text.join('\n'))
}

split('One-Two-Three-Four-Five', '-')
split('http://platform.softuni.bg', '.')