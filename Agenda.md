# Agenda

> ***NOTE:** This agenda is copied from the previous term and needs to be adjusted to this semester. Otherwise, the topics are generally in the correct order.*

> These are my notes on what I plan to teach in each [**upcoming class**](#apr-01-w12).
>
> ###### *... Warn those who are idle ..., encourage the disheartened, help the weak, be patient with everyone.*
>
> > My philosophy of teaching, taken from [the source](https://www.bible.com/bible/111/1TH.5.14.NIV)


> ## Starter Kits
>
> To grab a starting point for any in-class demos or practices, you can use [**tiged**](https://github.com/tiged/tiged) (based on [`degit`](https://github.com/Rich-Harris/degit) by Rich Harris, creator of Svelte). It will allow you to grab a copy of the starter kit folder to put into your student workbook.
> 
> You will need to have `pnpm` installed and working on your computer. Run the following code in the terminal from the **root** of your repository:
>
> ```bash
> pnpm dlx tiged --disable-cache --force dgilleland/CPSC-1520-Workbook/sk/-how-to- ./src/-how-to-
> ```
>
> ***Note:** You may need to <kbd>ctrl</kbd>+<kbd>c</kbd> to stop the `pnpm tlx tiged` command after it has finished downloading the demo folder.*

----

## Jan-Apr 2025 Schedule

## Jan 08

- **Today** *(Online)*
- Course Introduction
- GitHub Account Setup
- Software Setup
  - Complete instructions on my *new* [ad-hoc website](https://dgilleland.github.io/CPSC-1520/tutorials/0010/)
- Workbook Setup
  - [000](./src/000/ReadMe.md)

## Jan 10

- Workbook Lesson
  - [001](./src/001-StartHere/ReadMe.md)
- **Homework**
  - Read [**Mastering Markdown**](https://guides.github.com/features/mastering-markdown/) (includes GFM - *GitHub-Flavored-Markdown*)
  - Complete the [Practice Version Control](https://dgilleland.github.io/CPSC-1520/tutorials/0020/) tutorial
  - Complete [001](./src/001-StartHere/ReadMe.md#editing-your-github-profile) by changing your GitHub Profile.
  - Complete the [002](./src/002/ReadMe.md) lesson on your own

> **NOTE:** Be sure to commit and push what you do in your Student Workbook

----

## Jan 14 (W02)

- **Announcements**
  - **Quiz Readings** - Links for readings for individual quizzes can be found under the individual topics that the quizzes relate to. For convenience, I have posted a [*Summary of Quiz Readings*](./docs/QuizReadings.md). 
  - **Brightspace Content** - Topics on Brightspace were in the wrong order at the start of the term. The order has been corrected.
- **Today**
  - Practice Assignment (see Brightspace)
  - [003](./src/003/ReadMe.md) Intro to JavaScript
    - HTML & Emmet in VS Code
- **Homework**
  - Tutorial: [Querying the DOM](https://dgilleland.github.io/CPSC-1520/tutorials/0030/)
    - Put it in your student workbook under `~/src/query-dom/`
  - Tutorial: [Using Script Tags](https://dgilleland.github.io/CPSC-1520/tutorials/0040/)
    - Put it in your student workbook under `~/src/script-tags/`
  - Bookmark and read the docs on [Semantic HTML](https://developer.mozilla.org/en-US/curriculum/core/semantic-html/)

## Jan 15

- **Today** *(Online)*
  - [ ] Characteristics of JavaScript
    - case-sensitive
    - **not** a type-safe language
    - looks a lot like C#, but has a number of differences
    - string literals can be wrapped in double or single quotes
    - string interpolation is performed with text inside a pair of back-ticks (`` ` ``)
      - placeholders in the form of `${expression}`
      - e.g.: `` `The count is ${count}` ``
  - [ ] ***Variables***
  - [ ] The browser's dev tools provides a **console** that is a REPL (Read-Eval-Print-Loop) environment for JavaScript
  - [ ] Node also provides/is a REPL for JavaScript
  - [ ] **Demo:** Combine the main points of [003](./src/003/ReadMe.md) and [004](./src/004/ReadMe.md)
    - Find and modify DOM elements with `document.querySelector()`
    - Link a JavaScript file
    - Create and use variables
- **Homework**
  - *Reminder to keep up with Quiz readings and completing the quizzes before their cutoff date.*
  - [ ] Review the [003 LOGs](./src/003/LOGs.md) and the [004 LOGs](./src/004/LOGs.md)
  - [ ] Read the following articles:
    - [Why JavaScript?](https://dgilleland.github.io/CPSC-1520/explanations/0010/)
    - [JavaScript as a Language](https://dgilleland.github.io/CPSC-1520/explanations/0020/)

## Jan 17

- **Today**
  - [ ] Lab 1 released/due **today**

----

## Jan 21 (W03)

- **Today**
  - Notice the `LOGs.md` files under each lesson - pay attention to these
  - Fast-Track [005](./src/005/ReadMe.md)
  - Math Review
    - In JavaScript, all numbers are floating point
  - Quick review on yesterday's code: What are *keywords* and what are *not* keywords.
  - What are *functions* in JavaScript?
  - [**006**](./src/006/ReadMe.md) intro
  - [**007**](./src/007/ReadMe.md) - Creating JavaScript Functions
- **Homework**
  - [ ] Do the [**Learn by Play** portion of the `005/ReadMe.md`](./src/005/ReadMe.md#learn-by-play)
  - [ ] Review the new [Finding DOM Elements](https://dgilleland.github.io/CPSC-1520/guides/0030/) guide.
  - [ ] Review [006 LOGs](./src/006/LOGs.md)
  - [ ] Complete [practice in `007`](./src/007/ReadMe.md#practice-agreement)
  - [ ] Review [007 LOGs](./src/007/LOGs.md)
  - [ ] **Optional** - Styling Challenge (CSS only - no JavaScript)

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/005.5 ./src/005.5
    ```


## Jan 22

- [ ] Housekeeping Tasks:
  - [ ] Getting the most out of ***LOGs** (Learning Outcome Guides)*
  - [ ] Version Control: Updating Your Workbook (commit & push)
  - [ ] [Downloading Starter Kits](#starter-kits)
  - [ ] Filling the Gaps: Self-study is the only way to fill in the gaps between what you do and don't know about HTML.

![HTML Iceberg](./docs/images/html-iceberg.jpg)

- **Today** *(Online)*
  - [**008**](./src/008/ReadMe.md) - Form Input and Handling Events

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/demo-events ./src/008/demo-events
    ```

    - Review [its LOGs](./src/008/LOGs.md)
      - Demo creating an event handler
      - Demo adding an event listener
      - Demo **mouse** events such as `click`, `dblclick`, `mouseenter`, `mouseleave`, `mousemove`
      - Demo adding and removing CSS classes programmatically (from `.classList`)
      - Demo an anonymous handler for an event listener
- **Homework**
  - Make notes on the LOGs for this lesson
  - Research mouse events on MDN (Mozilla Develop Network)


## Jan 24

- **Today**
  - [ ] **In-Class Lab 2**
  - [ ] A *soft review* of Events and Event Handling in web pages.

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/soft-intro ./src/008/soft-intro
      ```

- **Homework**
  - *TBD*

----

## Jan 28 (W04)

  <!-- - Revisit the "soft-intro" to explore `.stopPropagation()` -->

- **Today**
  - [x] Recap about [mouse events](./src/008/demo-events/js/main.js) + browsing events
  - [x] Start the demo-text-manipulation
    - `.trim()` (plus left/right trim), `.toUpperCase()`/`.toLowerCase()`, `.padStart()`/`.padEnd()`, `.repeat()`, `.replace()` + `.replaceAll()`, `.substr()` vs. `.substring()`

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/demo-text-manipulation ./src/008/demo-text-manipulation
    ```

  - [ ] **`~/src/008/event-listener/`** - Class time to complete the [Event Listener tutorial](https://dgilleland.github.io/CPSC-1520/tutorials/0070/)
    - Discuss `.stopPropagation()` and `.preventDefault()`
  - [ ] **`~/src/008/dom-styling/`** - Class time to complete the [DOM Interactions tutorial](https://dgilleland.github.io/CPSC-1520/tutorials/0080/)
- **Homework**
  - [ ] Complete the remaining TODO items from the demo-text-manipulation


## Jan 29

- **Today** *(Online)*
  - [ ] For an ad-hoc exploration of strings and numbers, see the [sample code I posted today](./src/007/ad-hoc/js/main.js).
  - [ ] [Form Processing](./src/008/) Starter Kit:

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/form-processing ./src/008/form-processing
    ```


- **Homework**


## Jan 31

- **Today**
  - [ ] **In-Class Lab 3** (Functions and Events)

> ### Lab 3 Spec Notes
> 
> - **Step 2** - The first point is somewhat vague - which element (there are two)? But, from reading the rest of the steps and seeing the sample screenshot, it would seem that the element is the `divElement`
> - **Step 3** - The instructions are somewhat vague, but get a bit clearer when you look closely at the HTML. One of the parts of this step refers to the "div list group", and that appears to be the same element as the first `divElement` selected in Step 1 (though we selected it by the class '.javascript-resources' and not '.list-group' as somewhat inferred by these instructions).
> - **Step 4** - The instructions mention "the list", and that is (once again), the `divElement`. However, since it's talking about it as "the list", I will look for it by the class `'.list-group'`.

----

## Feb 04 (W05)

- **Today**
  - [ ] **(20-25 min)** - If-Else
    - [ ] [Notes](./src/012/demo-grammar/ReadMe.md)
    - [ ] Repl Starter Kit *(installs to [`~/src/012/node-repl/`](./src/012/node-repl/ReadMe.md))*

        ```ps
        pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/012/node-repl ./src/012/node-repl
        ```

  - [ ] **(20+)** Ad-hoc If-Else demo
    - [ ] Starter Kit *(installs to [`~/src/012/course-marks/`](./src/012/course-marks/ReadMe.md))*

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/012/course-marks ./src/012/course-marks
      ```

    - [ ] Commentary on the usefulness of JSDoc comments
- **Homework**
  - [ ] Review my notes on [Conditional Expressions](https://dgilleland.github.io/CPSC-1520/reference/0020/#conditional-expressions)
  - [ ] Review my notes on [JSDoc](https://dgilleland.github.io/CPSC-1520/reference/0030/#jsdoc) comments


## Feb 05

- **Today** *(Online)*
  - [ ] **Assignment 1** available (since Monday, Feb 3)
  - [ ] **(20+)** Continue [course-marks](./src/012/course-marks/)
    - [ ] Track if form is valid
    - [ ] Clear form after processing
    - [ ] Check for Total and Earned Points
    - [ ] Calculate percent on evaluation item
    - [ ] Calculate earned weight towards final mark (out of attempted)
    - [ ] Calculate average of attempted
    - [ ] Calculate remaining average required to pass
  - [ ] **()** [013 If-Else in Form Processing](./src/013/ReadMe.md)
    - [ ] Demo Shipping Calculator
    - Starter Kit *(installs to `~/src/013/`)*

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/013 ./src/013
      ```

- **Homework**
  - [ ] Do the [form-processing-2](./src/013/form-processing/ReadMe.md) practice on your own


## Feb 07

- **Today**
  - [ ] **In-Class Lab 4** (Forms and Validation)
    - You should know
      - **Form processing**
        - The `submit` event for `<form>` elements
        - How to stop the default behaviour of forms (i.e.: sending data to the web server)
        - How to identify form controls from the `.elements` property of the form object.
          - indexed on the `name` attribute value
      - **Flow Control**
        - `if/else` statements
        - Boolean logic
- **Homework**

### Lab 4 Spec Notes

- Focus on attaching and building the event handler for the form.
- Within the event handler function, make use of the validation functions provided in the starter kit.

----

## Feb 11 (W06)

- **Today**
  - [ ] Browser-less Script Files - to learn the JS language
    - Starter Kit *(installs to `~/src/014/`)*

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/014 ./src/014
      ```

  - [ ] Intro to Looping
- **Homework**


## Feb 12

- **Today** *(Online)*
  - [ ] More looping & flow-control
    - Build a Fibonacci Sequence
    - Finish dice game
    - Brief into re: Objects
      - Object literal example
      - Date object
      - Node's `process` object
    - Intro to Arrays
- **Homework**  


## Feb 14

- **Today**
  - [ ] 🗝️ **Understanding Types** - The *key* to coding with confidence!

    ```js
    const dataType = function (value) {
        let result;
        if(value == undefined || value == null) {
            result = `The value is ${value}`;
        } else {
            result = `The data type is ${value.constructor.name}`;
        }
        return result;
    }
    ```

  - [ ] Looping and Array Demos - *(to be done over several classes)*
    - Starter Kit *(installs to [`~/src/015/`](./src/015/ReadMe.md))*

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/015 ./src/015
      ```

    - Starter Kit *(installs to [`~/src/016/`](./src/016/ReadMe.md))*

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/016 ./src/016
      ```

- **Homework**
  - *See the Practice items under the 015/016*

----

## Feb 25 (W07)

- **Today**
  - [ ] **Lab 4 Solution**
  - [ ] Continue/Complete Looping and Array Demos - *(to be done over several classes)*
    - *(See starter Kit [`~/src/015/`](./src/015/ReadMe.md))*
    - *(See starter Kit [`~/src/016/`](./src/016/ReadMe.md))*
- **Homework**
  - *See the Practice items under the 015/016*


## Feb 26

- **Today** *(Online)*
  - [ ] ***TBD:** New items*
  - [ ] Continue/Complete Looping and Array Demos - *(to be done over several classes)*
    - *(See starter Kit [`~/src/015/`](./src/015/ReadMe.md))*
    - *(See starter Kit [`~/src/016/`](./src/016/ReadMe.md))*
- **Homework**
  - *See the Practice items under the 015/016*


## Feb 28

- **Today**
  - [ ] **In-Class Lab 5** (Loops and Arrays)
- **Homework**

----

## Mar 04 (W08)

- **Today**
  - [ ] [`about-objects.js`](./src/017/about-objects.js)
  - [ ] [`about-object-constructors.js`](./src/017/about-object-constructors.js)
- **Homework**


## Mar 05

- **Today** *(Online)*
  - [ ] Modern JavaScript
    - [ ] Node Projects
    - [ ] JS Modules
  - [ ] JSON
- **Homework**


## Mar 07

- **Today**
  - [ ] [Arrow Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ([sample image](./docs/images/arrow-function-expression-light.png))
  - [ ] Array Functions
    - [ ] `.forEach()`
    - [ ] `.map()`
    - [ ] `.filter()`
    - [ ] `.find()`
  - [ ] Intro to Fetch API

    ```js
    fetch('https://randomuser.me/api/?results=10')
      .then(x => x.json())
      .then(x => console.log(x))
      .catch(err => console.log(err));
    ```
- **Homework**
  - [ ] Review [Dana's CPSC-1520 Topic Summary](https://dmarshnait.github.io/cpsc1520/QuickReference)

----

## Mar 11 (W09)

- **Today**
  - [ ] Ad-Hoc Demo - Fetch, CSS Packages, and DOM API
    - Starter Kit *(installs to [`~/src/017/more-modern`](./src/017/more-modern/ReadMe.md))*

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/017/more-modern ./src/017/more-modern
      ```

    - [ ] Using Fetch for non-JSON requests (see [issue #4](https://github.com/CPSC-1520/DanG-A05-CPSC-1520-Instructor-Workbook-2025-Jan/issues/4))
    - [ ] Dyamically adding CSS as a Node package (`pnpm add @picocss/pico` with `import "@picocss/pico/css/pico.css";`
    - [ ] DOM API for fine-grained control of creating and arranging DOM elements
      - [ ] `document.createElement()`
      - [ ] `document.createTextNode()`
      - [ ] `document.appendChild()`
    - [ ] Recall from lesson 008 about how to programmatically open and close a `<dialog>` element

        ```html
        <dialog>
          <h3>Greetings, one and all!</h3>
          <p>I am the (fairly new) <code>&lt;dialog&gt;</code> element. I have been triggered by your mouse moving out of the image on this page.</p>
          <p>You can click the button below to close this dialog, or press the <kbd>Esc</kbd> key on your keyboard.</p>
          <form method="dialog">
            <button>OK</button>
          </form>
        </dialog>
        ```

        ```js
        Let's listen for the dialog's close event.
        //    Learn more about this close event here:
        //      https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement#events
        let myDialog = document.querySelector('dialog');
        myDialog.addEventListener('close', function () {
            console.log('dialog closed');
            featureImage.classList.remove('image-blur');
        });
        ```

  - [ ] Setup the [Student Marks example/tutorial](./sk/020/Tutorial.md)
    - Starter Kit *(installs to [`~/src/020/student-marks`](./src/020/student-marks/ReadMe.md))*

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/020/student-marks ./src/020/student-marks
      ```

- **Homework**
  - [ ] Fill the `courses.json` file with your current marks


## Mar 12

- **Today** *(Online)*
  - [ ] Begin the [Student Marks example/tutorial](./src/020/Tutorial.md)
- **Homework**


## Mar 14

- **Today**
  - [ ] Continue the [Student Marks example/tutorial](./src/020/Tutorial.md)
- **Homework**

----

## Mar 18 (W10)

- **Today**
  - [ ] Complete the [Student Marks example/tutorial](./src/020/Tutorial.md)
- **Homework**


## Mar 19

- **Today** *(Online)*
  - [ ] Creating `async` functions
  - [ ] Using `async` and `await` with the fetch API
  - [ ] Complete the **await-fetch** example/tutorial
    - Starter Kit *(installs to [`~/src/020/await-fetch`](./src/020/await-fetch/js/main.js))*

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/020/await-fetch ./src/020/await-fetch
      ```

- **Homework**
  - [ ] Read the following:
    - [Introducing asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing)
    - [How to Use Promises](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises)


## Mar 21

- **Today**
  - [ ] **In-Class Lab 6**
    - You should know
      - Fetch API
      - Objects
      - JSON
- **Homework**

----

## Mar 25 (W11)

- **Today**
  - [ ] Lab 6 Solution
  - [ ] Timers and Intervals in JavaScript
    - Starter Kit *(installs to [`~/src/024`](./src/024/ReadMe.md))*

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/024 ./src/024
      ```

  - [ ] Classes in JavaScript
    - Starter Kit *(installs to [`~/src/026`](./src/026/ReadMe.md))*

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A01-CPSC-1520-Instructor-Workbook-2025-Jan/sk/026 ./src/026
      ```

- **Homework**


## Mar 26

- **Today** *(Online)*
  - [ ] Complete unfinished demos
- **Homework**


## Mar 28

- **Today**
  - Lab Time
- **Homework**

----

## Apr 01 (W12)

- **Today**
  - [ ] Solution to Assignment 2
- **Homework**


## Apr 02

- **Today** *(Online)*
  - [ ] Q'n'A Period
- **Homework**


## Apr 04

> This lab will be the first one that requires you to use a Node project (instead of Live Server). The packages that we will be using are a bit different from the ones I used in our demos, but the principles are still the same. Also, anything from prior topics (e.g.: loops, arrays, if/else) may also be in that lab (as everything in this course is cumulative).
> 
> When marking, I will be doing a code review in addition to the automated tests, so you will need to demonstrate the use of Node and Node Packages as outlined in the lab specs.
>
> A Node project is one where there is a `package.json` file that identifies aspects of a JavaScript project (including the third-party libraries listed in the `"dependencies"` and `"devDependencies"` sections).
> 
> So, `vite` is an example of a Node package. Thursday's lab will use a different package in place of `vite`, as well as other packages for CSS and validation. Along with this is the whole idea of JavaScript **modules** (where we can have JavaScript code in separate files and we are using `import` and `export` wherever necessary).

- **Today**
  - [ ] **In-Class Lab 7**
    - You should know
      - Load script files as modules
      - Set up a Node project
        - add Parcel
        - add Other packages
        - import CSS
        - set up/run package.json scripts
- **Homework**

----

## Apr 08 (W13)

- **Today**
- **Homework**


## Apr 09

- **Today** *(Online)*
- **Homework**


## Apr 11

- **Today**
- **Homework**

----

## Apr 15 (W14)

- **Today**
- **Homework**


## Apr 16

- **Today** *(Online)*
- **Homework**

----

## Apr 22 (W15)

- **Today**
- **Homework**


## Apr 23

- **Today** *(Online)*
- **Homework**


## Apr 25

- **Today**
  - [ ] **In-Class Lab 8**
    - You should know
      - JavaScript classes
        - Constructor function
        - Member functions
      - setInterval() and clearInterval()
- **Homework**


----
