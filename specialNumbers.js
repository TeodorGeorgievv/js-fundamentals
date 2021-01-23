function specialNumber(input) {
    for (let i = 1; i <= input; i++) {
        let numAsString = i.toString();
        let sum = 0;
        for (let a = 0; a < numAsString.length; a++) {
            let currentNum = Number(numAsString[a]);
            sum += currentNum;

        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }

    }

}

specialNumber(15)
