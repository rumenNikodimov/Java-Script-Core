function scoreToHtml(json) {
    let html = '<table>\n'
    html += `  <tr><th>name</th><th>score</th></tr>\n`
    let scores = JSON.parse(json)

    for(let score of scores) {
        html += `  <tr><td>${escape(score.name)}</td><td>${score.score}</td></tr>\n`
    }

    function escape(str){
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }

    html += '</table>'
    console.log(html)

}

scoreToHtml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]')

scoreToHtml('[{"name":"Pesho","score":479}, {"name":"Gosho","score":205}]')