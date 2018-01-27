function smallestTwo(input){
    console.log(input.sort((a, b) => a - b).slice(0, Math.min(2, input.length)));
}

smallestTwo(([100, 200, 3000, 4, 5, 6, 1]))