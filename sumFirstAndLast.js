function sumFirstLast(strArr) {
    let modifiedArr = strArr.map(Number);
    return modifiedArr[0] + modifiedArr.pop();
}

console.log(sumFirstLast(['20', '30', '40']))