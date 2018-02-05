function uniqueSequnences (strArr) {
    // Parse, sort each array elements by descending, and all arrays by length ascending
    let all = strArr.map(JSON.parse)
        .map(e => e.map(Number).sort((a, b) => b - a))
        .sort((a, b) => a.length - b.length);

    // Distinct arrays
    for (let i = 0; i < all.length; i++) {
        for (let j = i + 1; j < all.length; j++) {
            if(compareArrays(all[i], all[j])){
                all.splice(j, 1); // Remove repeating array
                j--;
            }
        }
    }

    // Print result
    let  a = 5;
    all.forEach(e => console.log(`[${e.join(', ')}]`));

    // Functions
    function compareArrays(a1, a2) {
        if(a1.length !== a2.length){
            return false;
        }


        for (let i = 0; i < a1.length; i++) {
            if(a1[i] !== a2[i]){
                return false;
            }
        }

        return true;
    }
}

uniqueSequnences([
    '["-3", "-2", "-1", "0", "1", "2", "3", "4"]',
    '["10", "1", "-17", "0", "2", "13"]',
    '["4", "-3", "3", "-2", "2", "-1", "1", "0"]'
]);
