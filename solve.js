function solve(arr) {
    
    let text = arr.shift();
 
    for (let line of arr) {
        if (line === 'Finish') {
            break;
        }
        let [command, firstArg, secondArg] = line.split(' ');
        
        if (command === 'Replace') {
            let currentChar = firstArg;
            let newChar = secondArg;
 
            text = text.replace(new RegExp(`${currentChar}`, 'g'), newChar);
            console.log(text);
        } else if (command === 'Cut') {
            let startIndex = Number(firstArg);
            let endIndex = Number(secondArg);
 
            if (startIndex >= 0 && startIndex < text.length && endIndex >= 0 && endIndex < text.length) {
                text = text.substring(0, startIndex) + text.substring(endIndex+1);
                console.log(text);
            } else {
                console.log('Invalid indices!');
            }
        } else if (command === 'Make') {
            let type = firstArg;
 
            if(type === 'Upper') {
                text = text.toUpperCase();
            } else if (type === 'Lower') {
                text = text.toLowerCase();
            }
            console.log(text);
        } else if (command === 'Check') {
            let string = firstArg;
 
            if (text.includes(string)) {
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`);
            }
        } else if (command === 'Sum') {
            let startIndex = Number(firstArg);
            let endIndex = Number(secondArg);
            let sub;
 
            if(startIndex >= 0 && startIndex < text.length && endIndex >= 0 && endIndex < text.length) {
                sub = text.substring(startIndex, endIndex + 1);
                let sum = 0;
                for (let i = 0; i < sub.length; i++) {
                    sum += Number(sub[i].charCodeAt(0));
                }
                console.log(sum);
            } else {
                console.log('Invalid indices!');
            }
        }
    }
}

solve((["ILikeSharan", 
"Replace a e", 
"Make Upper", 
"Check SHEREN", 
"Sum 1 4", 
"Cut 1 4", 
"Finish"]) 
)