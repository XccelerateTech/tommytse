function calculator (operator, value1, value2) {
    switch (operator) {
        case '+':
            return value1 + value2;
            break;
        case '-':
            return value1 - value2;
            break;
        case '*':
            return value1 * value2;
            break;
        case '/':
            return value1 / value2;
            break;

    }
}

console.log(caculator('+', 5, 9)); // 14
console.log(caculator('-', 7, 3)); // 4
console.log(caculator('*', 5, 5)); // 25
console.log(caculator('/', 9, 3)); // 3
