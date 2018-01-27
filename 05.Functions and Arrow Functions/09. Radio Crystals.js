function manufactureCrystal(input) {
    // Input params
    const targetSize = Number(input[0]);

    // Operations
    let cutOperations = {
        "Cut" : c => 0.25 * c,
        "Lap" : c => 0.8 * c,
        "Grind" : c => c - 20,
        "Etch" : c => c - 2
    };

    let specialOperations = {
        "xRay" : c => c + 1, // Adds 1 to value. Can be applied only once
        "transportAndWash" : c => Math.floor(c) // After each remove operation floor the value
    };

    // Operations counter
    let operationsCounter = {
        "Cut" : 0,
        "Lap" : 0,
        "Grind" : 0,
        "Etch" : 0
    };

    let tmpCount = 0; // Temp operation execution counter. It is modified from sub function 'performOperation'
    let initialSize = 0;
    let tmpIndex = 0;
    let xRayUsed = false;

    // Loop over all crystals
    for (var i = 1; i < input.length; i++) {
        initialSize = Number(input[i]);
        tmpIndex = i;

        // Operations counter
        operationsCounter = {
            "Cut" : 0,
            "Lap" : 0,
            "Grind" : 0,
            "Etch" : 0
        };

        xRayUsed = false;

        // Loop over all remove operations
        for (let op in cutOperations) {
            performOperation(cutOperations[op]); // Calculate recursively operations counter and initial crystal size
            operationsCounter[op] = tmpCount; // Set performed operations for current cut operation

            specialOperations["transportAndWash"](initialSize); // Perform wash operation before next cut operation operation
            tmpCount = 0; // Reset counter
        }

        // Check if size is more than target size and if necessary perform "etch" one more time
        if(initialSize > targetSize){
            initialSize = cutOperations["Etch"](initialSize);
            operationsCounter["Etch"]++;
        }

        // If initial size is less than target do xRay routine to add 1
        if (initialSize < targetSize){
            initialSize = specialOperations["xRay"](initialSize);
            xRayUsed = true;
        }

        // Print info for current crystal
        let result = generateResult(operationsCounter);
        console.log(generateResult());
    }

    // Functions
    function generateResult() {
        let result = '';

        result += `Processing chunk ${input[tmpIndex]} microns\n`;
        operationsCounter["Cut"] > 0 ? result += `Cut x${operationsCounter["Cut"]}\nTransporting and washing\n` : undefined;
        operationsCounter["Lap"] > 0 ? result += `Lap x${operationsCounter["Lap"]}\nTransporting and washing\n` : undefined;
        operationsCounter["Grind"] > 0 ? result += `Grind x${operationsCounter["Grind"]}\nTransporting and washing\n` : undefined;
        operationsCounter["Etch"] > 0 ? result += `Etch x${operationsCounter["Etch"]}\nTransporting and washing\n` : undefined;

        xRayUsed == true ? result += 'X-ray x1\n' : undefined;

        result += `Finished crystal ${targetSize} microns`

        return result;
    }

    function performOperation(func) {
        if(func(initialSize) < targetSize){
            return;
        }else{
            initialSize = func(initialSize);
            tmpCount++;

            performOperation(func);
        }
    }
}

manufactureCrystal([1000, 4000, 8100]);
manufactureCrystal([1375, 50000]);