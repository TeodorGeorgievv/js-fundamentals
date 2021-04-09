function solve(input) {
    let words = {};

    for (const word of input) {
        if(words[word]) {
            words[word]++;
        } else {
            words[word] = 1;
        }
    }

    let wordEntries = Object.entries(words);

    let sortedWordEntries = wordEntries.sort((a, b) => {
        let wordCountA = a[1];
        let wordCountB = b[1];

        return wordCountB - wordCountA;
    
    })

    for (const kvp of sortedWordEntries) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}

