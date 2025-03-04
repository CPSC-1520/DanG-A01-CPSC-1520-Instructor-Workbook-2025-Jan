// Launch in a terminal from this folder
// node --watch about-objects.js
console.log('Loaded the script...');

// Object literal syntax is the simplest ways to create objects "on-the-fly"
let person = {
    firstName: 'Fred',
    lastName: 'Flintstone',
    age: 32,
    isMarried: true,
    children: [
        'Pebbles'
    ],
    fullName: function() {
        // The `this` keyword becomes important
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person);

let address = {
    street: '123 Main St.',
    city: 'Bedrock',
    province: 'ON',
    postalCode: 'L2L 2L2'
}
console.table(address);

person.homeAddress = address;
console.log(person);
console.log(person.firstName, 'lives in', person.homeAddress.city);
address = {
    street: '789-12 Ave.',
    city: 'Bedrock',
    province: 'ON',
    postalcode: 'L2L 1R4'
}
console.log(person);
