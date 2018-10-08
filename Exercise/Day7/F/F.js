class Person {
    constructor (options) {
        this.age = options.age;
        this.name = options.name;
    }

    info() {
        console.log(`The person is called ${this.name} and is ${this.age} years old`)
    }

}

class Student extends Person {
    constructor(options) {
        super(options);
        this.gpa = options.gpa;
    }

    info() {
        console.log(`The person is called ${this.name} and is ${this.age} years old. He has an overall GPA of ${this.gpa} in the university.`);
    }

}
const person = new Student( {age: 44, name: 'Tom', gpa: '4.0'});
person.info() // The student is called Tom and is 44 years old and his GPA is 4.0
