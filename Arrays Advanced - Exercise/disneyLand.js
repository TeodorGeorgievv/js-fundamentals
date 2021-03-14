function disneyland(input) {

    let neededMoney = input.shift();
    neededMoney = Number(neededMoney);
    let months = input.shift();
    months = Number(months);
    let savings = 0;

    
    for (let i = 1; i <= months; i++) {
        if(i % 4 === 0) {
            savings = savings + (0.25 * savings);
        }
        
        if (i % 2 !== 0 && i !== 1) {
            savings = savings - (0.16 * savings)
            //console.log(savings);
        }

        savings = savings + (0.25 * neededMoney)
    }

    let souvenirMoney = neededMoney - savings;

    if(souvenirMoney < 0) {
        souvenirMoney = souvenirMoney * (-1)
    }
    
    if(savings > neededMoney) {
        console.log(`Bravo! You can go to Disneyland and you will have ${souvenirMoney.toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${souvenirMoney.toFixed(2)}lv. more.`)
    }
}

disneyland([`1000`, '4'])
disneyland(['3265', '3'])