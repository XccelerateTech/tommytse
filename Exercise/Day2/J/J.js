function isNum (input) {
    if ( typeof input != "number" || input <= 0) {
        return 'ERROR';
    } else while (input < 1000000) {
        input *= 10;
    }
    return input;
}
console.log(isNum(2));