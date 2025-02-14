# Loops ![Docs](https://img.shields.io/badge/Documentation%20Status-10--40%25%20Rough%20Outline-red?logo=Read%20the%20Docs)

This lesson covers the various ways we can code using looping logic. It also makes use of [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) when producing HTML that can be injected into the DOM.

## Looping Statements in JavaScript

The ability to run a piece of code over and over again is a powerful feature of programming. This is called [**looping**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).

In JavaScript, there are several ways to do looping. All loops involve a *decision* that controls whether or not to continue looping. The [**while**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement), [**do-while**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_statement) and [**for**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement) statements in JavaScript have that decision as an *explicit* part of the statement.

> You shouldn't loop forever; that's called an *infinite loop*, and it bogs down your computer. Infinite loops are the result of a *logical error* in your code.

There are also ways to do looping where the decision to continue with looping is *implicit*. These are the [**for-in**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement) and [**for-of**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) statements.

----

## Loops Intro

The [loops-intro](./demos/loops-intro/js/main.js) demo shows how to do the while, do-while and for statements. It does so by building a string of HTML markup and placing it in the `.innerHTML` of a `<div>` element in the DOM.

----

## Course Marks (V2)

> *Instructions TBD - this is a walkthrough together in class*

----

## Loops and NodeList *(Practice)*

See the [instructions](./practice/ReadMe.md) for this practice assignment.
