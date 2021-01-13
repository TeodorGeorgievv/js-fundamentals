function printSum(num1, num2) {
    let sum = 0;
    let line = ''

    for (let i = num1; i <= num2; i++) {
        line += i + ' ';
        sum += i;
    }
    
    console.log(line);
    console.log(`Sum: ${sum}`);
}

printSum(5, 10)