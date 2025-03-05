# Node Projects, Objects, JSON and Fetch

## Node Projects

To create an empty Node project, open a terminal window and navigate to the folder where you want the project. (In this case, it was [`~/src/017/modern/`](./modern/) folder.)

In the terminal, we run the command `pnpm init` (or `npm init -y`). This creates the [`package.json`](./modern/package.json) file.

There is a Node package called [`vite`](https://vite.dev/) that is a build tool for front-end applications. It works well for developers (DX - Developer Experience) because it offer such things as *hot-module reload* (hmr). To add `vite` to a "vanilla-html/css/js" site, run the following.

```ps
pnpm add -D vite
```

The `-D` flag tells pnpm to add in this `vite` package as a *developer dependency*. After adding it, you should see the `package.json` updated.

```json
  "devDependencies": {
    "vite": "^6.2.0"
  }
```

Vite has the nice effect of defaulting to delivering HTML files (with `index.html` as the default page) with a web server. It includes a *developer* webserver. We can add a script to our `package.json` that will launch the development server when we run `pnpm dev` in the terminal.

```json
  "scripts": {
    "dev": "vite"
  },
```

> *You can tell how user-friendly an application/website is by how friendly the user feels after working with it.* - (UX)

### Modern JavaScript Applications use Modules

To make use of JavaScript **Modules** in our web page, we load the core script file with the `type="modules"` attribute.

```html
<script type="module" src="./js/main.js"></script>
```

JavaScript modules are *deferred by default*.

----

## JavaScript Objects

We can create JavaScript objects in a few ways:

- [x] Object Literal syntax
- [x] Constructor Functions
- [ ] Classes

## JSON - JavaScript Object Notation

Two functions on the global `JSON` object:

- `JSON.stringify()` - Converts an object into a JSON string
- `JSON.parse()` - Convert a JSON string into a JavaScript object

JSON files have the following characteristics:

- use the file extension `.json`
- has either a **single** object or a **single** array as the "root" item
- data-only (no functions)
- all the property names are in double-quotes
- all the property values are either
  - strings (in double-quotes)
  - numbers
  - boolean (`true` or `false`)
  - arrays (`[]`)

### Task

- Create a new file in your workbook: `~/src/017/courses.json` to hold all the evaluation details for all your current courses.
