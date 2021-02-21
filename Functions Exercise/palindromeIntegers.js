function palindromeInt(arr) {

    function checker(a) {
        let arr = String(a).split('');

        let reverse = '';
        for (let i = arr.length - 1; i >= 0; i--) {
            reverse += arr[i];
            //console.log(reverse);
            
        }

        if (reverse == a) {
            return true;
        } else {
            return false;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let result = checker(current)

        console.log(result);
    }

}
palindromeInt([32,2,232,1010])
/* function palindromeInt0(arr) {

    let result = ''

    for (let num of arr) {
        let isPalindrome = true;
        num = String(num)
        let mid = parseInt(num.length / 2);

        for (let i = 0; i <= mid; i++) {
            if (num[i] !== num[num.length - i - 1]) {
                isPalindrome = 'false';
                break;
            }

        }
        result += isPalindrome + '\n'
    }
    return console.log(result);
}
// palindromeInt0([32, 2, 232, 1010]) */