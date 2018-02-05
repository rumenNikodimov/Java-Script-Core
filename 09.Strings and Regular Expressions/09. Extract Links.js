function extractLinks(input) {
    let regex = /(www\.[a-zA-Z0-9-]*)(\.[a-z]+)(\.[a-z]+)*/gm
    let result = []

    let match = regex.exec(input)

    while(match){
        result.push(match[0])
        match = regex.exec(input)
    }

    console.log(result.join('\n'))
}

extractLinks('Need information about cheap hotels in London?\n' +
    'You can check us at www.london-hotels.co.uk!\n' +
    'We provide the best services in London.\n' +
    'Here are some reviews in some blogs:\n' +
    '"London Hotels are awesome!" - www.indigo.bloggers.com\n' +
    '"I am very satisfied with their services" - ww.ivan.bg\n' +
    '"Best Hotel Services!" - www.rebel21.sedecrem.moc \n')