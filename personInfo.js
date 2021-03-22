function personInfo(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = Number(age);

    for (let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }

    return person;
}

console.log(personInfo("Peter", 
            "Pan",
            "20"
))