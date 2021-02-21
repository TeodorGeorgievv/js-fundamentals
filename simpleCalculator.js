function calculator(a, b, operator) {
    switch (operator) {
        case `multiply`:
            let multiply = (a, b) => a * b;
            console.log(multiply(a, b));
            break;
        case `divide`:
            let divide = (a, b) => a / b;
            console.log(divide(a, b));
            break;
        case `add`:
            let add = (a, b) => a + b;
            console.log(add(a, b));
            break;
        case `subtract`:
            let subtract = (a, b) => a - b;
            console.log(subtract(a, b));
            break;
    }



}

function calculators(a, b, operator) {
    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let add = (x, y) => x + y;
    let subtract = (x, y) => x - y;

    switch(operator) {
        case `multiply`: console.log(multiply(a, b)); break;
        case `divide`: console.log(divide(a, b)); break;
        case `add`: console.log(add(a, b)); break;
        case `subtract`: console.log(subtract(a, b)); break;
    }

}



calculator(5, 5, 'multiply')
calculators(25, 5, `add`)