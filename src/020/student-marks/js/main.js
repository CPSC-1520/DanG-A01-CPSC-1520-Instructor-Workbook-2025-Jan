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

/*
    <footer>
      <div>
        <span>Styling by PicoCSS</span>
        |
        <span>Copyleft 2025 by Dan Gilleland</span>
        |
        <span>Buy Dan's course</span>
        <h4>This is extra info</h4>
      </div>
    </footer>
*/
let foot = document.querySelector('footer');

// TODO: Move this to the top
import { DomBuilder } from './dom-builder';
let footInfo = new DomBuilder();
footInfo.create('div')
        .add('span', 'Styling by PicoCSS')
        .addText(' | ')
        .add('span', 'Copyleft 2025 by Dan Gilleland')
        .addText(' | ')
        .add('span', 'Buy my course')
        .add('h4', 'This uses a Fluent API that I built');

foot.appendChild(footInfo.fragment);
