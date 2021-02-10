function printNthEl(arr) {

    let lastEl = Number(arr.pop())
    let result = []
    for (let i = 0; i < arr.length; i += lastEl) {
        result.push(arr[i])
    }
    console.log(result.join(' '));
}

printNthEl(['5', '20', '31', '4', '20', '2'])