function arrayManipulations(input) {
    let numbers = input.shift().split(' ')
    //console.log(input);
    
    for (let line of input) {
        let [command, firstArg, secondArg] = line.split(' ');

        if(command === 'Add') {
            numbers.push(firstArg);
        } else if(command === 'Remove') {
            let index = numbers.indexOf(firstArg);

            if (index !== -1) {
                numbers = numbers.filter((el) => el !== firstArg);
            }
        } else if(command === 'RemoveAt') {
            let index = Number(firstArg);

            numbers.splice(index, 1);
        } else{
            let index = Number(secondArg)

            numbers.splice(index, 0, firstArg);
        }

    }

    return numbers.map(Number).join(' ')


}
console.log(arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
))