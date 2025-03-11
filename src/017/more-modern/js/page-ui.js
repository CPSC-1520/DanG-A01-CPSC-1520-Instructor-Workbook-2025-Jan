// ./js/page-ui.js

// The DOM API isn't just for finding elements on the page. We can also
// use it to build HTML elements as well as re-arrange and manipulate those
// elements. Essentially, the DOM API provides us with several methods for
// fine-grained control over the contents of our web page.

// We're going to use the DOM API to generate a <footer> with specific content.
/**
 * Generates an HTMLElement that is a `<footer>` with the provided information
 * @param {number} startingYear The year that the copyright begins
 * @param {string} copyrightHolder The person/company that holds the copyright
 * @returns {HTMLElement} The `<footer>` element
 */
const buildFooter = function(startingYear, copyrightHolder) {
    let currentYear = new Date().getFullYear();
    let copy = '\u00A9'; // this is the unicode character for the &copy; HTML entity character
    let copyrightText = `${copy} ${startingYear} - ${currentYear} by ${copyrightHolder}`;

    // Generate the HTML Elements
    let foot = document.createElement('footer');
    let div = document.createElement('div');
    div.setAttribute('class', 'card');
    let textNode = document.createTextNode(copyrightText);

    // Assemble the parts
    div.appendChild(textNode);
    foot.appendChild(div);

    return foot;
}

// export is how we make the code in this module public
export { buildFooter }
