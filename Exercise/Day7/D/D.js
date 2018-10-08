class Monster {
    //initialize the status of the monster
    constructor(option) {
        this.health = 100;
        this.name = option.name;
        this.isDead = option.isDead;
    }
    //reduce the monster's health by the value
    wounded(damage) {
        this.health -= damage;
        if(this.health <= 0 && this.isDead == false) {
            console.log('monster dead');
            this.isDead = true;
        }
    }

}

function hero (monster) {
    monster.wounded(Math.random()*16+5);
}
var status = {name: 'D', isDead: false};
var dragon = new Monster(status);
var hitCount=0;
do {
hero(dragon);
hitCount++;
} while (dragon.isDead == false)
console.log(`The hero hit ${dragon.name} ${hitCount} times to kill it.`);