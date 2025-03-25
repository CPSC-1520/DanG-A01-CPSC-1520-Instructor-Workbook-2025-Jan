let info = [4, 3, 87, 6, 10, 12];

// let evenNumbers = info.filter(item => item % 2 === 0);
// //                                    \__ boolean _/
/*
    let foundItems = [];
    for(let index = 0; index < info.length; index ++) {
        let item = info[index];
        if(item % 2 === 0) {
            foundItems.push(item);
        }
    }
    return foundItems;
*/
let evenNumbers = info.filter(function(item) {
    let result = item % 2 === 0; // true | false
    return result;
});


console.log('Even numbers', evenNumbers);

let squared = info.map(num => num * num);
//                           \_result_/

console.log('Squared numbers', squared);

let hasSix = info.includes(6);

const search = function(callback) {
    let results = [];
    for(let index = 0; index < this.length; index++) {
        let wanted = callback(this[index], index, this);
        if(wanted) {
            results.push(this[index]);
        }
    }
    return results;
}

info.search = search;

let threeFactorNumbers = info.search(function(item, index, array) {
    if(item % 3 === 0)
        return true;
    return false;
});

console.log(threeFactorNumbers);


// for complex items....
/*
    let found = info.filter(item => {
        let isFound = false;
        // some code to test
        return isFound; // true | false
    });
    if(found.length > 0) {
        // Yes, it exists
    }
*/
