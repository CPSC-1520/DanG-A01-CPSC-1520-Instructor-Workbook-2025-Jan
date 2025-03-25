/**
 * Rectangle is a class representing a simple shape.
 * @param {number} height The height of the rectangle
 * @param {number} width The width of the rectangle
 */
const Rectangle = class {
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

    /**
     * Outputs the time at which this rectangle was created.
     */
    report() {
        console.log(`This box was made on ${this.#created.toLocaleTimeString()}`);
    }

    /**
     * Calculates the area of the rectangle
     */
    get area() {
        return this.width * this.height;
    }

    /**
     * Calculates the permiter of the rectangle
     */
    get perimeter() {
        return (this.width + this.height) * 2;
    }
}

const shapes = [];

document.querySelector('button').addEventListener('click', (evt) => {
    evt.preventDefault();
    const w = 10;
    const h = 5;
    const box = new Rectangle(h, w);
    shapes.push(box);
    console.log('box created:', box);
    box.report(); // call my method/function of my Rectangle instance
    console.log(`There are ${Rectangle.count} boxes so far.`);
})