// main.js
import '@picocss/pico/css/pico.css';
import { populateAbout } from './about-ui';
import { populateCourseContent } from './course-marks-ui';

// Load in the ReadMe.md
fetch('./ReadMe.md').then(x => x.text()).then(populateAbout);

fetch('./data/courses.json')
    .then(x => x.json())
    //         \______/
    //             |
    //            \|/
    .then(populateCourseContent);
