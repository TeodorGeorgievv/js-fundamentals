function solve(n) {
    let num = n.toString();
    let sum = 0;
    let degree = (num.length) - 1;
    for (let i = 0; i < num.length; i++) {
        let digit = Number(num[i]);
        sum += digit * 2 ** degree;
        degree--;
    }
    console.log(sum);
}

solve(00001001)