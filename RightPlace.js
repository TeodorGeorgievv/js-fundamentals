function rightPlace(str, char, result) {
    let newResult = str.replace('_', char)
    if(newResult === result) {
        console.log(`Matched`);
    } else{
        console.log(`Not Matched`);
    }
}
rightPlace('Str_ng', 'i', 'String')