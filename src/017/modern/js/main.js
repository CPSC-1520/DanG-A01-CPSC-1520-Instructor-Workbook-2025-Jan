console.log('Loaded main.js');
// To use code from another JavaScript module...
import { Course, EvaluationItem } from './course-marks';

// Demo
let demo = new Course('CPSC-1520', 'Client Side Scripting for JavaScript');
demo.evaluations.push(new EvaluationItem('Lab 1', 5, null, null));
console.log(demo);