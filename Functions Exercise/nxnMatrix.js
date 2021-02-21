function nxnMatrix(number) {
    let x = [];
    let newArr = [];
 
    for (let i = 0; i < number; i++) {
        x.push(number)
        newArr.push(x);
        console.log(newArr);
        
    }
    for (let k = 0; k < newArr.length; k++) {
        let element = newArr[k].map(Number);
        console.log(element.join(' '))
    }
 
}

nxnMatrix(5)