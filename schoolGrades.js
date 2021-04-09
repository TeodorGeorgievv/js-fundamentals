function grades(input) {
    let grades = {};

    for (let line of input) {
        let lineArr = line.split(' ');
        let name = lineArr.shift();
        let grade = lineArr.map(Number); 
    }
}

grades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)