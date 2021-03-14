function smallestTwoNums(arr) {
    let sortedInAscending = arr.sort((a, b) => {
        return a - b;
    })

    return sortedInAscending.slice(0, 2).join(' ')
}

console.log(smallestTwoNums([30, 15, 50, 5]))
console.log(smallestTwoNums([3, 0, 10, 4, 7, 3]))