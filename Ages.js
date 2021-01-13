function agesProblem(ageNum) {
    if(ageNum >= 0 && ageNum <= 2) {
        console.log(`baby`);
    } else if(ageNum >= 3 && ageNum <= 13) {
        console.log(`child`);
    } else if(ageNum >= 14 && ageNum <= 19) {
        console.log(`teenager`);
    } else if(ageNum >= 20 && ageNum <= 65) {
        console.log(`adult`);
    } else if(ageNum >= 66) {
        console.log(`elder`);
    } else{
        console.log(`out of bounds`);
    }
}

agesProblem(20)
agesProblem(1)
agesProblem(100)
agesProblem(-1)