/* UI Notes:
    - Making some presumptions about styling being based on PicoCSS
    - <section id="courses">
        - The container to be populated with information on each course
    - <template id="course-shell">
        - A template for each course. This is "bare-bones" in that it contains a <details> element with placeholders for the course name and code. Individual evaluation items would need to be dynamically appended to this HTML.
        - For information on using this, see [A more involved example](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots#a_more_involved_example)

    Here's an advanced example of the template, but with slots.
    ```html
        <template id="course-shell">
            <details>
                <summary><span class="course-code"></span> <span class="course-name"></span> &mdash; <span class="summary-marks"></span></summary>
                <section class="grid grid-col-4"></section>
                <hr />
            </details>
        </template>
    ```
*/
import { Course } from './course-marks';

const populateCourseContent = function(courseData) {
    // get the container for our output
    let container = document.getElementById('courses');
    console.log(container);

    // Get the template itself; note that we're getting the stuff inside <template></template>
    let template = document.getElementById('course-shell').content;

    courseData.forEach(item => {
        item = Course.fromJsonObject(item);
        console.log(item);
        // When using a <template>'s content, you must clone that in order to
        // use it for adding into a web page.
        let copy = template.cloneNode(true);

        let span = copy.querySelector('.course-code');
        let textNode = document.createTextNode(item.code);
        span.appendChild(textNode);

        span = copy.querySelector('.course-name');
        textNode = document.createTextNode(item.name);
        span.appendChild(textNode);

        span = copy.querySelector('.summary-marks');
        let mark = document.createElement('mark');
        let earnedToDate = item.getTotalEarned();
        let text = `${earnedToDate.toFixed(1)} %`;
        textNode = document.createTextNode(text);
        mark.appendChild(textNode);
        span.appendChild(mark);
        
        // Put this into the container...
        container.appendChild(copy);
    });
}

export { populateCourseContent }
