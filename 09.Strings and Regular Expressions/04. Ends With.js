function end(text, string) {
    if(text.endsWith(string)){
        return true
    }else {
        return false
    }
}

console.log(end('This sentence ends with fun?', 'fun?'));
console.log(end('This is Houston, we have…', 'We have…'));