function listOfProducts(arr) {
    let sortedProducts = arr.sort();
    //console.log(sortedProducts);

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(`${i + 1}.${element}`);
    }

}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])