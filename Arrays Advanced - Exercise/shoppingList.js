function shoppingList(input) {
    let product = input.shift().split('!');
    let commands = input.toString().split(',');
    for (let line of commands) {
        let [command, oldProduct, newProduct] = line.split(' ');
        if (command === 'Urgent') {
            if (!product.includes(oldProduct)) {
                product.unshift(oldProduct);
            }
        } else if (command === "Unnecessary") {
            if (product.includes(oldProduct)) {
                product.splice(product.indexOf(oldProduct),1);
            }
        } else if (command === "Correct"){
            if (product.includes(oldProduct)) {
                product.splice(product.indexOf(oldProduct), 1, newProduct);
            }
        } else if (command === "Rearrange") {
            if (product.includes(oldProduct)) {
                let rearranged = product.splice(product.indexOf(oldProduct), 1);
                product.push(rearranged);
            }
        } else if (command === "Go"){
            console.log(product.join(', '));
            break;
        }
    }
}

shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
