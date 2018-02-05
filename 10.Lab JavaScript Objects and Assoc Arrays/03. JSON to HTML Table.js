function htmlTable(json) {
    let arr = JSON.parse((json))

    let html = '<table>\n'
    html += '  <tr>'
    let keys = Object.keys(arr[0])

    for( let key of keys){
        html += `<th>${key}</th>`
    }
    html += '</tr>\n'

    for(let obj of arr){
        html += `  <tr>`
        for (let i = 0; i < keys.length; i++) {
            html += `<td>${escape(obj[keys[i]] + '')}</td>`

        }
        html += '</tr>\n'
    }

    html += '</table>'

    console.log(html)

    function escape(str){
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}

htmlTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')

htmlTable('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'
)

