// It's common practice to have import statements at the top of a file
import MarkdownIt from 'markdown-it';
import '@picocss/pico/css/pico.green.css';

console.log('Loaded main.js');

const handleResponse = function(resp) {
    console.log(resp);
    return resp.text(); // I would use .json() if the endpoint was serving JSON data
}

const processContent = function(markdown) {
    console.log(markdown);

    // Create the markdown rendering engine object
    let md = new MarkdownIt();
    // Tell the rendering engine to convert markdown into HTML
    let markup = md.render(markdown);
    console.log(markup);

    // <section id="content"></section>
    let container = document.getElementById('content');
    container.innerHTML = markup;
}

// Grab the Markdown content
// As an asynchronous call (Promise<Response>), we can chain our calls in a fluent fashion.

fetch('./content/ReadMe.md')
    .then(handleResponse)
    .then(processContent)


// btw, we can do an import
import { buildFooter } from './page-ui';
let footer = buildFooter(2018, 'NAIT');
document.body.appendChild(footer);
