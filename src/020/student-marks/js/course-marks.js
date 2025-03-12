/**
 * Constructs a Course object with an empty array of evaluations.
 * @param {string} code The course code (e.g.: 'PROG-0101')
 * @param {string} name The course name (e.g.: 'JavaScript Fundamentals')
 */
const Course = function(code, name) {
    this.code = code;
    this.name = name;
    this.evaluations = [];

    this.getTotalWeight = function() {
        let total = 0;
        for(let index = 0; index < this.evaluations.length; index++) {
            let item = this.evaluations[index];
            total += item.weight;
        }
        return total;
    }

    this.getTotalEarned = function() {
        let total = 0;
        let marked = this.evaluations.filter(x => x.getWeightedPercent() !== null);
        for(let index = 0; index < marked.length; index ++) {
            total += marked[index].getWeightedPercent();
        }
        return total;
    }

    this.getTotalUnmarked = function() {
        let unmarked = this.evaluations.filter(x => x.getWeightedPercent() === null);
        // The .reduce() function of arrays allow you to produce a single aggregate value from the entire array
        let total = unmarked.reduce(
            // Callback
            (sum, item) => sum += item.weight,
            // Initial value
            0);
        return total;
    }
}

/**
 * This function is intended for converting a plain object (such as one parsed from a JSON string) into a Course object.
 * @param {object} obj An object expected to match the structure of Course objcts
 * @returns Course
 */
Course.fromJsonObject = function(obj) {
    let course = new Course(obj.code, obj.name);
    obj.evaluations.forEach(item => {
        course.evaluations.push(new EvaluationItem(item.name, item.weight, item.earned, item.possible));
    });
    return course;
}

/**
 * Constructs an EvaluationItem object with or without details on the earned/possible points.
 * @param {string} name The name of the evaluation item (e.g.: 'Lab 1')
 * @param {number} weight The weight of the evaluation item within the course
 * @param {number | null} earned The points earned on the marked evaluation item
 * @param {number | null} possible The total possible points that can be earned on the evaluation item
 */
const EvaluationItem = function(name, weight, earned, possible) {
    // Properties
    this.name = name;
    this.weight = weight;
    // ?? is the null coalescing operator
    this.earned = earned ?? null;
    this.possible = possible ? possible : null;

    // Methods
    this.getPercent = function() {
        let result = null;
        if(this.earned !== null) {
            result = this.earned / this.possible * 100;
        }

        return result;
    }

    this.getWeightedPercent = function() {
        let result = this.getPercent();
        if(result !== null) {
            result = result * this.weight / 100;
        }
        return result;
    }
} // EvaluationItem() constructor

export { Course, EvaluationItem }
