function matchDates(input) {
    const pattern = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/gm;
    let result = '';

    for(let e of input){
        if(e.match(pattern)){
            let matchArray = [];
            while((matchArray = pattern.exec(e)) != null){
                result += `${matchArray[0]} (Day: ${matchArray[1]}, Month: ${matchArray[2]}, Year: ${matchArray[3]})\n`;
            }
        }
    }
    console.log(result);
}

matchDates('I am born on 30-Dec-1994.', 'This is not date: 512-Jan-1996.')