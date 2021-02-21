function characterInRange(a, b) {
    let first = a.charCodeAt()
    let second = b.charCodeAt()
    let str = '';
    //console.log(a.charCodeAt() ,b.charCodeAt());
    if (first < second) {
 
        for (i = first + 1; i < second; i++) {
            let current = String.fromCharCode(i);
            str += current + ' '
        }
    } else {
        for (i = second + 1; i < first; i++) {
            let current = String.fromCharCode(i);
            //console.log(current);
 
            str += current + ' '
        }
    }
    console.log(str)
    //______________________________________________________

    // str = ''
    // let start = first < second ? first : second;
    // let end = first > second ? first : second;
 
    // for (let i = start + 1; i < end; i++) {
    //     let current = String.fromCharCode(i);
    //     str += current + ' '
 
    // }
    // return console.log(str)
 
}
 
characterInRange('C', '#')