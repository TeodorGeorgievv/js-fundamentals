function processOdd(arr) {
    let oddArr = arr
        .filter((num, i) => i % 2 == 1)
        .map(x => 2 * x)
        .reverse();
    return oddArr.join(' ')
}
console.log(processOdd([3, 0, 10, 4, 7, 3]))

