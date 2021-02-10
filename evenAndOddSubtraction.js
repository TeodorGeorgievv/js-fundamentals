function evenAndOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    let evenSum = 0;
    let oddSum = 0;


    for (let i of arr) {
        if (i % 2 === 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }

    let result = evenSum - oddSum;
    console.log(result);

}

evenAndOdd([1, 2, 3, 4, 5, 6])
evenAndOdd([3, 5, 7, 9])
evenAndOdd([2, 4, 6, 8, 10])