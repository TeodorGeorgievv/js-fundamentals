function addSubtract(num1, num2, num3) {
    function sum(a, b) {
        return a + b;
    }

    let result = sum(num1, num2);
    return result - num3;
}


addSubtract(23, 6, 10)