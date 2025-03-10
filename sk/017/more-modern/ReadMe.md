# More Modern Development

This starter kit contains these key files that you should review.

- `~/index.html` - A simple HTML page.
- `~/content/ReadMe.md` - Some Markdown content that will be fetched, converted to HTML, and injected into our page - all via JavaScript.

## Project Setup

Run the following in the terminal at the root of this folder:

```ps
pnpm init
pnpm add -D vite
pnpm add markdown-it
pnpm add @picocss/pico
```

Edit the `package.json` file to have a script to launch the web server.

```json
  "scripts": {
    "dev": "vite"
  },
```

Start the webserver by running `pnpm dev` in the terminal. You can then press <kbd>o</kbd> + <kbd>Enter</kbd> from that terminal to open the web page.

----

## JavaScript

We'll need to include the JavaScript file in our HTML:

```html
<script type="module" src="./js/main.js"></script>
```

For the code, we'll use the following.

```js
// It's common practice to import any 3rd-party libraries
// at the top of your script file.
import markdownit from 'markdown-it';
import '@picocss/pico/css/pico.css';

console.log('Loaded main.js');

// <section id="content"></section>

const handleReponse = function(resp) {
    console.log(resp);
    return resp.text(); // instead of .json(), because we loaded a Markdown file
}

const handleContent = function(markdown) {
    console.log(markdown);

    // Convert Markdown to HTML
    const md = markdownit()
    const result = md.render(markdown);
    console.log(result);

    // Add to the page
    let section = document.getElementById('content');
    section.innerHTML = result;
}

fetch('./content/ReadMe.md')    // fetch() returns a Promise<Response>
    .then(handleReponse)        // We need to handle the response from the web server
    .then(handleContent);       // Next, we process the content of the response


// Browsers supply a DOM API that allows for a more fine-grained control when manipulating
// HTML. With it, you can create HTML Elements, move elements around, or just about anything
// you want to do to the web page.

// Create a <footer><div>&copy; 2025 - Dan Gilleland</div></footer>
let foot = document.createElement('footer');
let div = document.createElement('div');
let text = document.createTextNode(' 2025 - Dan Gilleland');

div.innerHTML = '&copy; ';
div.appendChild(text);
foot.appendChild(div);

document.body.appendChild(foot);
```
