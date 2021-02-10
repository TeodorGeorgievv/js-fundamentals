function reverseStrings(elements) {
    for (let i = 0; i < elements.length / 2; i++) {
        let firstEl = elements[i];
        let firstElNewIndex = elements.length - 1 - i;
        elements[i] = elements[firstElNewIndex];
        elements[firstElNewIndex] = firstEl;
    }
    console.log(elements.join(' '));
}


reverseStrings(['a', 'b', 'c', 'd', 'e'])