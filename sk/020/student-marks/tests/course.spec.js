import { describe, it, expect } from 'vitest';
import { Course, EvaluationItem } from '../js/course-marks';

/*
  it.todo("", () => {
    // Arrange
    // Act
    // Assert
  });
*/


describe("Course should", () => {
  it.todo("preserve course code", () => {
    // Arrange
    let name = 'JavaScript Fundamentals';
    let code = 'PROG-0101';
    // Act
    let actual = new Course(code, name);
    // Assert
    expect(actual.code).toBe(code);
  });

  it.todo("preserve course name", () => {
    // Arrange
    let name = 'JavaScript Fundamentals';
    let code = 'PROG-0101';
    // Act
    let actual = new Course(code, name);
    // Assert
    expect(actual.name).toBe(name);
  });
  /*
    preserve course code
    preserve course name

    be incomplete (no evaluations) when constructed
    add evaluation item
    calculate total course weight of evaluations
    be complete when course weight is 100%
    
    reject empty course code
    reject empty course name
    reconstruct from object
  */
    it.todo("be incomplete (no evaluations) when constructed", () => {
      // Arrange
      // Act
      let actual = new Course('PROG-1101', 'TDD With JavaScript');
      // Assert
      expect(actual.evaluations.length).toBe(0);
    });

    it.todo("add evaluation item", () => {
      // Arrange
      let course = new Course('PROG-1101', 'TDD With JavaScript');
      let item = new EvaluationItem('Lab 1', 15);
      // Act
      course.evaluations.push(item);
      // Assert
      expect(course.evaluations.length).toBe(1);
    });

    it.todo("calculate total course weight of evaluations", () => {
      // Arrange
      let course = new Course("PROG-1101", "TDD With JavaScript");
      course.evaluations.push(new EvaluationItem("Lab 1", 10));
      course.evaluations.push(new EvaluationItem("Lab 2", 15));
      course.evaluations.push(new EvaluationItem("Lab 3", 20));
      course.evaluations.push(new EvaluationItem("Lab 4", 25));
      // Act
      let actual = course.getTotalWeight();
      // Assert
      expect(actual).toBe(70);
    });

    it.todo("calculate total earned weight to date", () => {
      // Arrange
      let course = new Course("PROG-1101", "TDD With JavaScript");
      // All earned points work out to 50%, over 40% of the course
      let expected = 20; // 5 + 7.5 + 7.5
      course.evaluations.push(new EvaluationItem("Lab 1", 10, 12.5, 25));
      course.evaluations.push(new EvaluationItem("Lab 2", 15, 20, 40));
      course.evaluations.push(new EvaluationItem("Lab 3", 20));
      course.evaluations.push(new EvaluationItem("Lab 4", 25));
      course.evaluations.push(new EvaluationItem("Quiz 1", 15, 12.5, 25));
      course.evaluations.push(new EvaluationItem("Quiz 2", 15));
      // Act
      let actual = course.getTotalEarned();
      // Assert
      expect(actual).toBe(expected);
    })

    it.todo("calculate remaining (unmarked) weight to date", () => {
      // Arrange
      let course = new Course("PROG-1101", "TDD With JavaScript");
      // All earned points work out to 50%, over 60% of the course
      let expected = 40; // 25 + 15
      course.evaluations.push(new EvaluationItem("Lab 1", 10, 12.5, 25));
      course.evaluations.push(new EvaluationItem("Lab 2", 15, 20, 40));
      course.evaluations.push(new EvaluationItem("Lab 3", 20, 23, 46));
      course.evaluations.push(new EvaluationItem("Lab 4", 25));
      course.evaluations.push(new EvaluationItem("Quiz 1", 15, 12.5, 25));
      course.evaluations.push(new EvaluationItem("Quiz 2", 15));
      // Act
      let actual = course.getTotalUnmarked();
      // Assert
      expect(actual).toBe(expected);
    });

    it.todo("be complete when course weight is 100%", () => {
      // Arrange
      // Act
      // Assert
    });

  it.todo("reject empty course code", () => {
    // Arrange
    // Act
    // Assert
  });

  it.todo("reject empty course name", () => {
    // Arrange
    // Act
    // Assert
  });

  it.todo("have zero evaluations", () => {
    // Arrange
    // Act
    // Assert
  });

  it.todo("reconstruct from object", () => {
    // Arrange
    let given = {
        "code": "PROG-0101",
        "name": "JavaScript Fundamentals",
        "evaluations": [
            { "name": "Lab 1", "weight": 10, "earned": null, "possible": 1 },
            { "name": "Lab 2", "weight": 10, "earned": null, "possible": 1 },
            { "name": "Lab 3", "weight": 10, "earned": null, "possible": 1 },
            { "name": "Lab 4", "weight": 10, "earned": null, "possible": 1 },
            { "name": "Quiz 1", "weight": 20, "earned": null, "possible": 5 },
            { "name": "Quiz 2", "weight": 20, "earned": null, "possible": 5 },
            { "name": "Quiz 3", "weight": 20, "earned": null, "possible": 5 }
        ]
    }

    // Act
    let actual = Course.fromJsonObject(given);
    // Assert
    expect.soft(actual.code).toBe("PROG-0101");
    expect.soft(actual.name).toBe("JavaScript Fundamentals");
    expect.soft(actual.getTotalWeight()).toBe(100);
  });
});
