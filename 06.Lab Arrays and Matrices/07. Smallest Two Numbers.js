function smallestTwo(input){
    console.log(input
        .sort((a, b) => a - b)
        .slice(0, 2));
}

smallestTwo(([100, 200, 3000, 4, 5, 6, 1]))

//Math.min(2, input.length)