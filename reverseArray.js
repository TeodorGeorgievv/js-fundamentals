function reverse  (n, numbers) {
    let resultArray = [];
    let result = '';

    for(let i = 0; i < n; i++) {
        resultArray[i] = numbers[i];
    }
    
    for(let i = n - 1; i >= 0; i--) {
        result += resultArray[i] + ' ';
    }
    
    console.log(result);
}   

reverse(3, [10, 20, 30, 40, 50])