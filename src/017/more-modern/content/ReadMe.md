# Ad-Hoc Markdown Parsing

## Setup Notes

- Created an `index.html`
- Created a node project with `pnpm init`
- Added vite for development with `pnpm add -D vite`
- Edited [`package.json`](../package.json) to add a script command: `"dev": "vite",`
- Added a `main.js`

I plan on using this library: [Markdown-It](https://github.com/markdown-it/markdown-it). I am adding it as a regular dependency in my node project: `pnpm add markdown-it`.

For the styling, we'll use the PicoCSS as a Node project: `pnpm add @picocss/pico`.

> *Emmet for the win!*
>
> `nav>ul>li>strong^^ul>li*3>a`
