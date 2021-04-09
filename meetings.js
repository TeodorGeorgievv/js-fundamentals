function meetings(arr) {
    let calendar = {};

    for (const item of arr) {
        
        let [day, name] = item.split(' ');

        if(calendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else{
            console.log(`Scheduled for ${day}`);
            calendar[day] = name;
        }
    }

    for (let day in calendar) {
        console.log(`${day} -> ${calendar[day]}`);
    }
    }
meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])