function rectangleOfStars(num){
    for(let i = 1; i <= num; i++){
        console.log('* '.repeat(num).trim())
    }
}

rectangleOfStars(5)