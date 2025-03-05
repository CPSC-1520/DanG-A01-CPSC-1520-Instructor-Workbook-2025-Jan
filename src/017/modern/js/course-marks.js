// This holds the constructor functions for a Course and EvaluationItem.
/**
 * This constructor function creates a course with an empty array of evaluation items.
 * @param {string} courseCode The code in the course catalog (e.g.: CPSC-1520)
 * @param {string} name The name of the course (e.g.: Programming Fundamentals)
 */
const Course = function(courseCode, name) {
    // Properties
    /** @type { string } */
    this.code = courseCode;
    /** @type { string } */
    this.name = name;
    /** @type { EvaluationItem[] } */
    this.evaluations = [];
}

/**
 * Represents a single item worth marks in a course.
 * @param {string} name Name of the evaluation item
 * @param {number} weight The weight of the item towards the final course marks
 * @param {number | null} earned The number of points earned
 * @param {number | null} possible The total possible points that could be earned
 */
const EvaluationItem = function(name, weight, earned, possible) {
    /** @type {string} */
    this.name = name;
    /** @type {number} */
    this.weight = weight;
    /** @type {number | null} */
    this.earned = earned;
    /** @type {number | null} */
    this.possible = possible;
}

// Use the export keyword to share (expose) any objects or functions
export { Course, EvaluationItem }
