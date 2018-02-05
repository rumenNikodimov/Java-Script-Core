function start(text, string) {
    if(text.startsWith(string)){
        return true
    } else {
        return false
    }
}

console.log(start('How have you been?', 'how'));
console.log(start('Marketing Fundamentals, starting 19/10/2016',
    'Marketing Fundamentals, sta'
));