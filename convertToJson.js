function converter(name, lastName, hairColor) {
    let person = {};

    person = {name, lastName, hairColor};

    console.log(JSON.stringify(person))
}

converter('George',
'Jones',
'Brown'
)