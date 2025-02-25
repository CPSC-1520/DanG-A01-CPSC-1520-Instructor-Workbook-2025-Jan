// node --watch demo-maps.js "Dan Gilleland" "Bob" 32 more words
let args = process.argv.slice(2);
console.table(args);

// Add an item to the end of the array
let length = args.push(42);
console.log(`I added an item and the new size of the array is ${length}`);
console.table(args);

// Filter to get all the things that won't be numbers
let words = args.filter((item) => isNaN(item));
console.log('\nThese are the non-numeric items:');
console.table(words);

// Map function to transform items from one array into a different "shape" and a new array
let juniorDevs = words.map(function(item) {
    return {
        name: item,
        position: 'Jr. Dev',
        wage: 22.50
    }
});

console.table(juniorDevs);
let promoted = juniorDevs[0];
promoted.position = 'Sr. Dev';
promoted.wage = 35.75;
console.log(`${promoted.name} is now a ${promoted.position} earning $ ${promoted.wage}`);
console.table(juniorDevs);

