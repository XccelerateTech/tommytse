// a number between 100 and 999999 to a string
var Decode = {
    "6":"a",
    "1":"b",
    "7":"d",
    "4":"e",
    "3":"i",
    "2":"l",
    "9":"m",
    "8":"n",
    "0":"o",
    "5":"t"

};

function Decoder (input) {
    if (input >= 100 && input <= 999999) {
        var arr = input.toString().split('');
        var word = '';
        for (let val of arr) {
            word += Decode[val];
        }
        return word;
    } else return 'Wrong input! Enter a number between 100 and 999999.';
}