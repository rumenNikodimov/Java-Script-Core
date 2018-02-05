function jsonTable(arr){
    let str = '<table>\n'
    for(let json of arr){
        let j = JSON.parse(json)
        str += '    <tr>\n'
        str += `        <td>${j.name}</td>\n`
        str += `        <td>${j.position}</td>\n`
        str += `        <td>${j.salary}</td>\n`
        str += '    <tr>\n'
    }
    console.log(str + '</table>')
}

jsonTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
])
//jsonTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')
