const bcrypt = require('bcrypt');

var hashPassword = (plainTextPassword) => {//turning the plaintext password to hashpassword 
    return new Promise((resolve, reject) => {
        bcrypt.genSalt((err, salt) => {
            if (err) {
                reject(err);
            }

            bcrypt.hash(plainTextPassword, salt, (err, hash) => {
                if (err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    });
};


var checkPassword = (plainTextPassword, hashedPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainTextPassword, hashedPassword, (err, match) => {
            if(err) {
                reject(err);
            }

            resolve(match);
        });
    });
};

module.exports = {
    checkPassword: checkPassword,
    hashPassword: hashPassword
};