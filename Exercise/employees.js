function employees(arr) {
    for (let line of arr) {
        let employee = {}
        employee.line = line;
        employee.id = line.length
        console.log(`Name: ${employee.line} -- Personal Number: ${employee.id}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'])