import { describe, it, expect } from 'vitest';
import { Course, EvaluationItem } from '../js/course-marks';

/*
  it.todo("", () => {
    // Arrange
    // Act
    // Assert
  });
*/


describe("EvaluationItem should", () => {
    /*
    preserve name
    preserve weight
    preserve earned points
    preserve total points

    calculate percent
    calculate weighted percent

    reject invalid name
    reject invalid weight
    reject invalid earned points
    reject invalid total points
    */
  it.todo("preserve name", () => {
    // Arrange
    let name = 'Lab 1';
    // Act
    let actual = new EvaluationItem(name, 20);
    // Assert
    expect(actual.name).toBe(name);
  });

  it.todo("preserve weight", () => {
    // Arrange
    let weight = 15;
    // Act
    let actual = new EvaluationItem('Quiz 1', weight);
    // Assert
    expect(actual.weight).toBe(weight);
  });
  
  it.todo("preserve earned points", () => {
    // Arrange
    let earned = 12;
    // Act
    let actual = new EvaluationItem('Lab 2', 10, earned, 20);
    // Assert
    expect(actual.earned).toBe(earned);
  });

  it.todo("preserve total points", () => {
    // Arrange
    let possible = 20;
    // Act
    let actual = new EvaluationItem('Lab 3', 10, 15, possible);
    // Assert
    expect(actual.possible).toBe(possible);
  });

  it.todo.each([
    { earned: 12, possible: 20, expected: 60 },
    { earned: null, possible: 20, expected: null }
  ])
  ("calculate $expected percent from $earned / $possible", ({earned, possible, expected}) => {
    // Arrange
    // Act
    let actual = new EvaluationItem('Quiz 2', 10, earned, possible);
    // Assert
    expect(actual.getPercent()).toBe(expected);
  });

  it.todo.each([
    { weight: 10, earned: 12, possible: 20, expected: 6 },
    { weight: 10, earned: null, possible: 20, expected: null }
  ])
  ("calculate $expected weighted percent from $earned / $possible on weight $weight", ({weight, earned, possible, expected}) => {
    // Arrange
    // Act
    let actual = new EvaluationItem('Quiz 3', weight, earned, possible);
    // Assert
    expect(actual.getWeightedPercent()).toBe(expected);
  });

  it.todo("reject invalid name", () => {
    // Arrange
    // Act
    // Assert
  });


  it.todo.each([
    { given: undefined, expected: null },
    { given: null, expected: null }
  ])
  ("treat $given as $expected for earned points", ({given, expected}) => {
    // Arrange
    let item = new EvaluationItem('Quiz 1', 15, given, null);
    // Act
    let actual = item.earned;
    // Assert
    expect(actual).toBe(expected);
  });

  it.todo.each([
    { given: undefined, expected: null },
    { given: null, expected: null },
  ])("treat $given as $expected for possible points", ({ given, expected }) => {
    // Arrange
    let item = new EvaluationItem("Quiz 1", 15, null, given);
    // Act
    let actual = item.earned;
    // Assert
    expect(actual).toBe(expected);
  });


  it.todo("reject invalid weight", () => {
    // Arrange
    // Act
    // Assert
  });
  it.todo("reject invalid earned points", () => {
    // Arrange
    // Act
    // Assert
  });
  it.todo("reject invalid total points", () => {
    // Arrange
    // Act
    // Assert
  });
});
