function fuelMoney(distance, passengers, priceLiter) {
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.100;
    let price = priceLiter * neededFuel;

    console.log(`Needed money for that trip is ${price}lv.`);
}

fuelMoney(260, 9, 2.49)