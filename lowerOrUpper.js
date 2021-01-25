function lowerUpper(input) {
    let charValue = input.charCodeAt(0)

    if (charValue >= 65 && charValue <= 90) {
        console.log(`upper-case`);
    } else {
        console.log(`lower-case`);
    }
}

lowerUpper('L')