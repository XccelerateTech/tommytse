var Decode = {
    'C':'G',
    'G':'C',
    'A':'U',
    'T':'A'
};

class DnaTranscriber {

    toRna (input) {
        let arr = input.split('');
        let output = '';
        for (let val of arr) {
            if (Decode[val] !== undefined) {
                output += Decode[val];
            } else {
                throw new Error ('Invalid input');
            }
        }
        return output;
    }
}

module.exports = DnaTranscriber;