function primeNumberChecker(num) {
    let a = [];
    let f = 2;
    while (num > 1) {
        if ( num % f === 0) {
            a.push(f);
            num/= f;
        } else {
            f += 1;
        }
    }
    let count = 0;
    for (let i = 0; i <= a; i++) {
    count++;
    }
    if (count > 1) {
        console.log(true);
    } else {
        console.log(false);
    }

}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);