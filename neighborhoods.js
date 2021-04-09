function solve(input) {
    let neighborhoodNames = input.shift().split(`, `);

    //console.log(neighborhoodNames);

    let neighborhoods = {};

    for (const name of neighborhoodNames) {
        neighborhoods[name] = []
    }
    
    for (const line of input) {
        let [neighborhood, person] = line.split(` - `)
        if(neighborhoods[neighborhood]) {
            neighborhoods[neighborhood].push(person);
        }
    }
    
    let sortedNeighborhood = Object.entries(neighborhoods).sort((a, b) => b[1].length - a[1].length)

    for (const entrie of sortedNeighborhood) {
        console.log(`${entrie[0]}: ${entrie[1].length}`);

        for (const person of entrie[1]) {
            console.log(`--${person}`);
            
        }
        
    }

}

solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)