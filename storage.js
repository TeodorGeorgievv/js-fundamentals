function storage(input) {
    let groceries = {};

    for (let line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity)

        if(groceries.hasOwnProperty(product)) {
            let currentQuantity = product;
            let newQuantity = currentQuantity + quantity
            groceries[product] = newQuantity
        } else{
            groceries[product] = quantity
        }
    }

    console.log(groceries);
    
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)

////////

function storage(arr) {
    let storaged = new Map();
 
    for (const item of arr) {
        let [product, quantity] = item.split(' ');
        quantity = Number(quantity);
        // check for existing keys
        if (storaged.has(product)) {
            let currentQuantity = storaged.get(product)
            let newQuantity = currentQuantity += quantity;
            storaged.set(product, newQuantity)
        } else {
            storaged.set(product, quantity);
        }
    }
    let iterables = Array.from(storaged.entries());
    for (const item of iterables) {
        let [product, quantity] = item
        console.log(`${product} -> ${quantity}`);
    }
 
}
 
storage(['tomatoes 10','coffee 5','olives 100','coffee 40']);