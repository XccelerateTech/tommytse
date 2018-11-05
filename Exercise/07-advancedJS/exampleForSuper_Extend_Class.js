class Car {
    constructor(options) {
        this.type = options.type;
        this.color = options.color;
    }

    drive() {
        return 'vroom'
    }
}

class Toyota extends Car {
    constructor(options, speed) {
        super(options); // calling the constructor in class Car
        this.speed = speed; // calling the constructor in class Toyota
    }

    drive() {
        return 'beep';
    }
}

const toyota = new Toyota({color: 'blue', type: 'pickup'}, 5);
console.log(toyota.drive()); // 'beep'
console.log(toyota.color) // blue
console.log(toyota.type) // pickup
console.log(toyota.speed) //5