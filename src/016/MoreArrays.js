// Assuming you're working in src/016
//    ctrl + shift + c
//    cd src/016

// node --watch MoreArrays.js "Stew Dent" "Anna Lyst" "Al Ignment" "Phil Osophy" "Phe Nominial"
// The instruction above will tell Node to run the MoreArrays.js script file and watch for changes. In addition, it will pass in a bunch of names as arguments to the script. These can be accessed through the process object.
console.log('Running MoreArrays.js');
console.log('\n(This script is intended to be run inside the Node JavaScript engine)\n');

// The .argv property is an array of values passed in to the Node process.
for(let index = 0; index < process.argv.length; index++) {
    let item = process.argv[index];
    console.log(`[${index}] - ${item}`);
}

// strip off the items passed in through the terminal
let args = process.argv.splice(2);
console.log('\nThese items were passed in:');
console.table(args);

// Let's add to the array.
args.push(42);
args.unshift(true);
console.table(args);
// I can remove items from the array
let removed = args.pop();
console.log(`I removed ${removed}`);
removed = args.shift();
console.log(`I removed ${removed}`);

console.log('\n... back to the original values...');
console.table(args);

// The process object has lots of other info.
console.table(process.platform);
console.log(); // blank line


// Time to hire junior devs.
const hireEmail = function(info) {
    console.log(`Hello ${info}! You've been selected to join our team. Show up for work on Monday!`);
}

// hireEmail is a "callback" function
args.forEach(hireEmail);

// Let's find something in our array.
let found = args.find(function(name) {
    return name.endsWith(' Dent');
});

console.log(`\n\nWelcome to ${found}, who is the boss's son.`);

const calcWage = function() {
    let min = 15;
    let max = 22.25;
    let diff = max - min;
    let wage = Math.random() * diff + min;
    return '$ ' + wage.toFixed(2);
}

let employees = args.map(function(name) {
    let parts = name.split(' ');
    return {
        firstName: parts[0],
        lastName: parts[1],
        wage: calcWage()
    }
});

console.table(employees);

// Time to fire someone
removed = employees.splice(3, 1);
//                         |  |- # of items
//                         | starting at index position
console.log(`I fired ${removed[0].firstName}.`);
console.table(removed);
console.table(employees);

// see https://dgilleland.github.io/CPSC-1520/reference/0060/
