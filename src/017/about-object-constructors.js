// Launch in a terminal from this folder
// node --watch about-object-constructors.js
console.log('Creating objects with constructor functions\n');

// This is a constructor function.
// We use it to create objects through the `new` keyword.
// Then name of the function should be capitalized.
/**
 * Person() is a constructor function to create an object.
 * @param {string} fullName The full name, including any middle names
 * @param {Date} dateOfBirth The birthday of the person
 */
const Person = function(fullName, dateOfBirth) {
    // The job of a constructor is to ensure that all the properties have meaningful values
    // TODO: 0) Validate inputs...
    // 1) Preserve data
    let names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[names.length - 1];
    names.splice(0, 1); // remove 0
    names.splice(names.length - 1, 1); // remove last name
    this.middleNames = names;

    this.dob = dateOfBirth;

    // Behaviours
    this.sayHello = function(name) {
        let message = `Hello ${name}, my name is ${this.firstName}.`;
        return message;
    }
    this.getAge = function() {
        const today = new Date();
        let age = today.getFullYear() - this.dob.getFullYear();
        // to get more precise...
        let month = today.getMonth() - this.dob.getMonth();
        let dayOfMonth = today.getDate() - this.dob.getDate();

        if(month < 0 || (month === 0 && dayOfMonth < 0)) {
            age--;
        }
        return age;
    }
};

// Creating objects
let somebody = new Person('Guido Andropov Drozdowski', new Date('Nov 15, 2002'));
console.log('Created somebody:\n', somebody);
somebody = new Person('Stewart Andrew Nelson Dent', new Date('Jan 3, 2003'));
console.log(somebody);
let conversation = somebody.sayHello('Fred');
console.log(conversation);

conversation = `(${somebody.firstName} is ${somebody.getAge()} years old.)`;
console.log(conversation);