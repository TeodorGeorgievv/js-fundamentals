function intOrfloat(firstNum, secNum, thirdNum) {
    let sum = firstNum + secNum + thirdNum;

    console.log(sum % 1);
    
    if(sum % 1 === 0) {
        sum += ' - Integer';
    } else{
        sum += ' - Float';
    }

    console.log(sum);

}

intOrfloat(9, 100, 1.1)