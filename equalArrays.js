function equalArrays(arr1, arr2) {
    let areEqual = true;
    let indexOfDifference = 0;

    for (let i = 0; i < arr1.length; i++) {
        let firstEl = arr1[i];
        let secondEl = arr2[i];

        if (firstEl !== secondEl) {
            areEqual = false;
            indexOfDifference = i;
            break;
        }

    }

    if (areEqual) {
        let sum = 0;

        for (let i = 0; i < arr1.length; i++) {
            sum += Number(arr1[i]);
        }

        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexOfDifference} index`);
    }

}

equalArrays(['10', '20', '30'], ['10', '20', '30'])
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
equalArrays(['1'], ['10'])