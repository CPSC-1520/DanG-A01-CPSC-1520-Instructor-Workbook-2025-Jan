function buildDaySlot(date) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let textNode = document.createTextNode(date.getDate());
    div.appendChild(span);
    span.appendChild(textNode);
    return div;
}

let calendarContainer = document.getElementById('calendar');

let today = new Date();
for(let count = 0; count < 35; count++) {
    today.setDate(count);
    calendarContainer.appendChild(buildDaySlot(today));    
}
