class FlyingAnimal {
    constructor(type) {
        this.type = type;
    }

    fly() {
        console.log(`A ${this.type} can fly.`);
    }
}

class SwimmingAnimal {
    constructor(type) {
        this.type = type;
    }

    swim() {
        console.log(`A ${this.type} can swim.`);
    }
}

class FeedingAnimal {
    constructor(type) {
        this.type = type;
    }

    feed() {
        console.log(`A ${this.type} feeds milk.`)
    }
}

class LayingAnimal {
    constructor(type) {
        this.type = type;
    }

    lay() {
        console.log(`A ${this.type} lays eggs.`)
    }
}
class Bird{
    constructor() {
        this.flyer = new FlyingAnimal('Bird');
        this.layer = new LayingAnimal('Bird');
    }

    fly() {
        this.flyer.fly();
    }

    lay() {
        this.layer.lay();
    }
}

class Bat{
    constructor() {
        this.flyer = new FlyingAnimal('Bat');
        this.feeder = new FeedingAnimal('Bat');
    }

    fly() {
        this.flyer.fly();
    }

    feed() {
        this.feeder.feed();
    }
}

class Whale{
    constructor() {
        this.swimmer = new SwimmingAnimal('Whale');
        this.feeder = new FeedingAnimal('Whale');
    }

    swim() {
        this.swimmer.swim();
    }

    feed() {
        this.feeder.feed();
    }
}

class Fish{
    constructor() {
        this.swimmer = new SwimmingAnimal('Fish');
        this.layer = new LayingAnimal('Fish');
    }

    swim() {
        this.swimmer.swim();
    }

    lay() {
        this.layer.lay();
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