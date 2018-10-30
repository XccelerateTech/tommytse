var genLetter = require('./genLetter');

function genText(num) {
    var text=[];
    for(let i=0;i<num;i++){
    text+=genLetter();
    }
    return text;
}

console.log(genText(10));