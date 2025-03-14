// main.js
import '@picocss/pico/css/pico.css';
import { populateAbout } from './about-ui';

// Load in the ReadMe.md
fetch('./ReadMe.md').then(x => x.text()).then(populateAbout);

fetch('./data/courses.json')
    .then(x => x.json())
    .then(data => { console.log(data); });
