class FlyingAnimal {
    fly() {
        console.log(`A ${this.type} can fly.`);
    }
}

class SwimmingAnimal {
    swim() {
        console.log(`A ${this.type} can swim.`);
    }
}

class Bird extends FlyingAnimal {
    constructor() {
        super();
        this.type = 'Bird'
    }

    lay() {
        console.log(`A ${this.type} lays eggs.`)
    }
}

class Bat extends FlyingAnimal {
    constructor() {
        super();
        this.type = 'Bat';
    }

    feed() {
        console.log(`A ${this.type} feeds milk.`)
    }
}

class Whale extends SwimmingAnimal {
    constructor() {
        super();
        this.type = 'Whale';
    }

    feed() {
        console.log(`A ${this.type} feeds milk.`)
    }
}

class Fish extends SwimmingAnimal {
    constructor() {
        super();
        this.type = 'Fish';
    }

    lay() {
        console.log(`A ${this.type} lays eggs.`)
    }
}
var bird = new Bird();
bird.fly();
bird.lay();

var bat = new Bat();
bat.fly();
bat.feed();

var whale = new Whale();
whale.swim();
whale.feed();

var fish = new Fish();
fish.swim();
fish.lay();