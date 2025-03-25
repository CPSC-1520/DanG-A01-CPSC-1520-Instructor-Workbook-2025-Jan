# Primitive Obsession

There's an *anti-pattern* which many beginner programmers fall into. It's called **primitive obsession**, and it is the tendency to create functions whose parameters are exclusively (*or almost so*) focused on holding *primitive* information.

For example, if you look at the following function you will see several parameters, each of which is concerned with representing a tiny piece of data: a *boolean* here, a *string* there, or a *number* or *date* somepace else.

```js
// sample function with all primitives as parameters
const processScholarshipApplicant = function(scholarship, studentName, age, gpa, isLocalResident) {
    // process the application
}

// elsewhere in your codebase
processScholarshipApplicant('Rutherford Scholarship', 'Stewart Dent', 19, 3.5, true);
```

There are several problems that come with this approach to writing functions:

- Whoever calls the function needs to ensure they *always* pass values in the correct order.
- Any changes to the function's parameters necessitates changes to all the places where this function is called, *even if it's just re-ordering the parameters (which can be the most subtle yet damaging change)*.

```js
// Can you spot the change from the previous version?
const processScholarshipApplicant = function(scholarship, studentName, gpa, age, isLocalResident) {
    // process the application
}

// elsewhere in your codebase
processScholarshipApplicant('Rutherford Scholarship', 'Stewart Dent', 19, 3.5, true);
```

These problems are not too worrysome when you just have one or two parameters. But as soon as the number of parameters begins to grow above two, it introduces maintenance complexity.

A better approach is to "bundle" your parameters together in an *object*. Here's another look at that code sample, but with the parameters wrapped in a pair of curly braces - `{ }`.

```js
// improved function parameters
const processScholarshipApplicant = function({scholarship, studentName, age, gpa, isLocalResident}) {
    // process the application
}

// elsewhere in your codebase
processScholarshipApplicant({
    scholarship: 'Rutherford Scholarship',
    studentName: 'Stewart Dent',
    age: 19,
    gpa: 3.5,
    isLocalResident: true
});
```

## Applying Object Parameters to Classes and Constructor Functions

- [ ] Use a [`@typedef`](https://jsdoc.app/tags-typedef) approach for intellisense warnings/errors
