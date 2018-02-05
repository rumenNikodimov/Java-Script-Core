function multiply(str) {
    const pattern = /(\-?\d{1,}(?:\.\d+)*)\s*\*\s*(\-?\d{1,}(?:\.\d+)*)/gm;

    let match = [];

    while((match = pattern.exec(str)) != null){
        let toBeReplaced = match[0];
        let firstNum = match[1];
        let secondNum = match[2];

        let result = firstNum * secondNum;

        str = str.replace(match[0], result);
    }

    return str;
}

console.log(multiply('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).'));