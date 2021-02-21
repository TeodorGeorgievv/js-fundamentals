function oddEven(num) {
    let str = num.toString().split('');
    let realDig = str.map(Number)
    //console.log(realDig);

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < realDig.length; i++) {
        let current = Number(realDig[i]);
        //console.log(realDig[i]);
        if (current % 2 === 0) {
            evenSum += current;
        } else if (current % 2 === 1) {
            oddSum += current;
        }

    }

    return(console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`));


}

oddEven(3495892137259234)