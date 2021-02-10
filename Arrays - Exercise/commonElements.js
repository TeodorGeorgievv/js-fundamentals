function commonElements(arrayStr1, arrayStr2) {
    for (const el of arrayStr1) {
        for (const el2 of arrayStr2) {
            if (el === el2) {
                console.log(el);
                break;
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])
