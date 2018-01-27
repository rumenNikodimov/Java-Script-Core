function printDnaHelix(input) {
    const width = 6;
    const height = Number(input);
    const sequence = 'ATCGTTAGGG';

    let figure = '';

    generateFigure();

    console.log(figure);

    function generateFigure(currentLine = 1, nextCoupleLettersStartIndex = 0, leftIndex = 2, leftIndexDirection = 'L', rightIndex = 3, rightIndexDirection = 'R') {
        if (currentLine > height){
            return;
        } else {
            let currLine = '';
            // Draw line
            for (let i = 0; i < width; i++) {
                if (i == leftIndex){
                    currLine += sequence[nextCoupleLettersStartIndex];
                } else if(i == rightIndex){
                    currLine += sequence[nextCoupleLettersStartIndex + 1];
                } else if (i > leftIndex && i < rightIndex) {
                    currLine += '-';
                } else {
                    currLine += '*';
                }
            }

            figure += currLine + '\n'; // Add line to figure

            // Modify params
            currentLine++; // Set to next line

            // Select next sequence of letters and check if is inside sequence bounds
            nextCoupleLettersStartIndex += 2;
            if(nextCoupleLettersStartIndex > sequence.length - 1){
                nextCoupleLettersStartIndex = 0;
            }

            // Move left index and change direction if necessary
            if(leftIndexDirection == 'L' && leftIndex - 1 < 0){
                // Change direction
                leftIndexDirection = 'R';
                leftIndex++;
            } else if(leftIndexDirection == 'R' && leftIndex + 1 > 2){
                // Change direction
                leftIndexDirection = 'L';
                leftIndex--;
            } else{
                if(leftIndexDirection == 'L'){
                    // Move to the left left index
                    leftIndex--;
                } else if (leftIndexDirection == 'R'){
                    // Move left index to right
                    leftIndex++;
                }
            }


            // Move right index. If necessary change direction
            if(rightIndexDirection == 'L' && rightIndex - 1 < 3){
                // Change direction
                rightIndexDirection = 'R';
                rightIndex++;
            } else if(rightIndexDirection == 'R' && rightIndex + 1 > width - 1){
                // Change direction
                rightIndexDirection = 'L';
                rightIndex--;
            } else {
                if(rightIndexDirection == 'L'){
                    // Move to the left left index
                    rightIndex--;
                } else if (rightIndexDirection == 'R'){
                    // Move left index to right
                    rightIndex++;
                }
            }

            generateFigure(currentLine, nextCoupleLettersStartIndex, leftIndex, leftIndexDirection, rightIndex, rightIndexDirection);
        }
    }
}

printDnaHelix(4)