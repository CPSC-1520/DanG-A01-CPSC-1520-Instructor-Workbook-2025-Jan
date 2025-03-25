// I am re-starting the timer if the user does not enter the correct password
const getPassword = function() {
    let input = prompt('What is the password?');
    if(input === password) {
        alert('Access Granted');
        if(timeoutRef)
            clearTimeout(timeoutRef);
        timeoutRef = null;
        document.querySelector('button').disabled = true;
    } else {
        // Set up a nagging prompt
        timeoutRef = setTimeout(getPassword, 4000);
        // 8000 milliseconds is 8 seconds
        console.log('The timeout reference number is: ', timeoutRef);
    }
}
let timeoutRef = undefined;
let password = 'secret';

document.querySelector('button')
        .addEventListener('click', function(evt) {
            // anything other than null, undefined, false, 0 or an empty string '' is regarded as true
            if(timeoutRef) {
                clearTimeout(timeoutRef);
                timeoutRef = 0;
                alert('The timeout was cancelled');
            } else {
                console.log('There is no current timeout running');
            }
        });

getPassword(); // Run the function that sets this up...