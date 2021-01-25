function solve(startingYield) {

    let totalAmount = 0;
    let crewConsumption = 26;
    let days = 0;

    for (let i = startingYield; i >= 100; i -= 10) {

        totalAmount += i;
        totalAmount -= crewConsumption;
        days++
    }

    totalAmount -= crewConsumption;

    console.log(days);
    console.log(Math.max(totalAmount, 0));
}

spiceMustFlow(111)