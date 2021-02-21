function passValidator(str) {

    function strValidator(pass) {
        if (pass.length < 6 || pass.length > 10) {
            return `Password must be between 6 and 10 characters\n`;
        } else {
            return '';
        }
    }

    function letterOrDigit(pas) {
        let isLetterDigits = true;

        for (let i of pas) {
            let checkNum = i.charCodeAt();
            if (checkNum < 48 || checkNum > 57 && checkNum < 65
                || checkNum >= 90 && checkNum < 97 || checkNum > 122) {
                isLetterDigits = false;
            }
        }

        return isLetterDigits ? '' : `Password must consist only of letters and digits\n`;
    }

    function twoDigitMin(passs) {
        let count = 0;
        for (let k of passs) {
            if (Number(k)) {
                count++;
            }

        }
        if (count >= 2) {
            return '';
        } else {
            return `Password must have at least 2 digits\n`
        }
    }

    let error = strValidator(str) + letterOrDigit(str) + twoDigitMin(str);
    return error ? error : `Password is valid`
}

let result = passValidator('Pa$s$s');
console.log(result);
