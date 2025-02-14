console.log("script file loaded");

/**
 * Displays HTML in the `<code id="output">` element.
 * @param {string} htmlMarkup A string value that can include HTML markup
 * @param {boolean} replace False if you wish to append the HTML, true if you wish to replace it
 */
const outputLine = function (htmlMarkup, replace) {
  const out = document.getElementById("output");
  htmlMarkup += "<br />";
  if (replace) {
    out.innerHTML = htmlMarkup;
  } else {
    out.innerHTML += htmlMarkup;
  }
};

/**
 * Builds the HTML for a form that will allow editing evaluation items and marks.
 * @param {string} evalName Name of evaluation item
 * @returns {string} HTML markup of a form
 */
const buildFormHtml = function (evalName) {
  return `
  <form>
    <fieldset class="grid">
        <label>Name
            <input type="text" name="evalName" placeholder="Evaluation Name" value="${evalName}">
        </label>
        <label>Weight (%)
            <input type="number" name="weight" step="1" min="1" max="100" />
        </label>
        <label>Total Points
            <input type="number" name="totalPoints" step="0.5" min="1" />
        </label>
        <label>Earned Points
            <input type="number" name="earnedPoints" step="0.5" min="0" />
        </label>
        <label>
            &nbsp;
            <button type="submit">Update</button>
        </label>
    </fieldset>
</form>
`;
}

/**
 * Generates additional forms for individual evaluation items in the course
 * @param {SubmitEvent} evt The event generated when the form is submitted
 */
const createForms = function (evt) {
  // TODO: Part 1 - Build forms and append to the <section id="evaluations">
  evt.preventDefault();
  const elements = evt.target.elements;
  const inputCategory = elements.category;
  const inputQuantity = elements.quantity;
  outputLine(`Create ${inputQuantity.value} forms for '${inputCategory.value}' items`, true);
}

/**
 * Modifies evaluation items and displays the results in the output using @see `outputLine()`
 * @param {SubmitEvent} evt The event generated when the form is submitted
 */
const editEvalItem = function (evt) {
  evt.preventDefault();
  // TODO: Part 2 - Update information on the current evaluation item
  outputLine("User feedback on editing the evaluation item", true);
};

/**
 * Reviews all the recorded weights/marks in the `<section id='evaluations'>`
 * forms and outputs recalculated summaries of marks
 * @param {SubmitEvent} evt The event generated when the form is submitted
 */
const calculateGradeStatus = function (evt) {
  evt.preventDefault();
  // TODO: Part 3 - Explore all the marks recorded and update grade status
}

// Register the form event handlers
const form = document.querySelector('form#addInputs');
form.addEventListener('submit', createForms);

const evaluations = document.getElementById('evaluations');
evaluations.addEventListener('submit', editEvalItem);

const gradeStatus = document.querySelector('form#status');
gradeStatus.addEventListener('submit', calculateGradeStatus);
