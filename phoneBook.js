function phoneBook(arr) {
    let phonebook = {};

    for (let el of arr) {
        let contacts = el.split(' ');

        let name = contacts[0];
        let number = contacts[1]
        phoneBook[name] = number;
    }

    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)