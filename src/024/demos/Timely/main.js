/**
 * showDate() displays the current date in an element on the page
 * @param {HTMLElement} thisDate Container element to show the current date
 */
const showDate = function(thisDate) {
    const getDatePortion = function(/** @type {Date} */ someDate) {
        if(someDate instanceof Date) {
            // Build a string with just the date portion
            // YYYY-MM-DD
            let text = `${someDate.getFullYear()}-${someDate.getMonth() + 1}-${someDate.getDate()}`;
            return text;
        } else {
            // Not much I can do
            return undefined;
        }
    }

    let today = new Date(); // the point at which they have loaded the page
    thisDate.innerText = getDatePortion(today); // Let them know the date

    const logTime = function() {
        // TODO: figure out how to get the time portion
        // HINT: https://tecadmin.net/get-current-date-time-javascript/
    }

    console.log('main.js is loaded');
};

// Get the element & call showDate()
const output = document.getElementById('thisDate');
showDate(output);

// Event handler for the "Log Time" button.
document.querySelector('button').addEventListener('click', function(ev) {
    const rightNow = new Date();
    console.log("The current time is:", rightNow);
})