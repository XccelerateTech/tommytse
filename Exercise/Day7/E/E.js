class Person {
    constructor (option) {
        this.age = option.age;
        this.name = option.name;
    }

    info() {
        console.log(`The person is called ${this.name} and is ${this.age} years old`)
    }

}

const person = new Person( {age: 44, name: 'Tom' });
person.info() // The person is called Tom and is 44 years old