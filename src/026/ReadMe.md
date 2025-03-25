# JavaScript Classes

[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) are yet another way to generate objects in JavaScript. The `class` keyword is used to declare a "template" for objects.

> *"In JavaScript, classes are mainly an abstraction over the existing prototypical inheritance mechanism — all patterns are convertible to prototype-based inheritance."* - [*Using Classes* on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)

There are two ways to declare a class in JavaScript: Using a [*Class **Expression***](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class) or using a [*Class **Declaration***](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class). They are effectively the same, just semantically different.

Here's an example taken from the [MDN reference guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). This example represents one of the simplest kinds of classes, having only a *`constructor()`* function.

```js
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

Classes are used as the basis for creating (or *instantiating*) **objects**. They effectively act as a "template" for what the object *looks like* (the data it holds) and *how it behaves* (the methods it exposes). Once you have defined your class, the process of instantiating an object is to use the [**`new`** operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new). The beauty of this process is that with a single class you can create as many instances as you want or need.

```js
const blueBox = new Rectangle(25, 40);
const greenBox = new Rectangle(15, 20);
```

## Class Members

Classes can have fields, methods, getters, setters, and a constructor. You can have as many fields, methods, getters, and setters that you want, but JavaScript allows at most a *single* constructor. There are additional variations you can have regarding the fields/methods/getters/setters:

- They can be *static* or *instance* based.
- They can be *public* or *private*.

You will usually see class members as being *instance based* and *public*. Instance based members are directly associated with the *object* that is created. If you want the member to be *private*, then you would need to use the [hash (`#`) prefix](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties). If you want the member to *only* be associated with the *class definition*, you can use the [`static` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static).

Here's an example illustrating public, private based on the prior `Rectangle` class.

```js
const Rectangle = class{
  #created;
  height;
  width;

  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.#created = new Date();
    Rectangle.#count++;
  }

  static #count = 0;
  
  static get count() {
    return Rectangle.#count;
  }
}
```

## Demo

Check out the [shapes demo](./demos/shapes/main.js) for a very simple example of a JavaScript class. Expand on the demo by making the following enhancements.

- Calculate the `area` and `perimiter` of the `Rectangle`.
- Make additional shape classes for
  - `Circle`
  - `Triangle`
