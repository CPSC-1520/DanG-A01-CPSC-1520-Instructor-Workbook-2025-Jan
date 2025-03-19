import { generatePrimes, generatePrimesAsync } from './long-running';

// Normal function - runs synchronously
function getNumbers() {
    let numbers = generatePrimes(2_000_000);
    // The console.log doesn't happen
    // until generatePrimes() returns
    console.log('Got the numbes');
}

// getNumbers();

async function getNumbersAsync() {
    let arr = await generatePrimesAsync(2_000_000);
    console.log('Done async calls');
}

/* Despite the presence of the async keyword on the function, all such calls are still blocking calls because JavaScript is a single-threaded language.
    However, most modern browsers support something called "Web Workers" which we can create and use if we truely want some code of ours to run asynchronously.
*/
getNumbersAsync();





// =======================

const apiHost = 'https://deckofcardsapi.com/api/deck';
const getDeckUrl = (deckId = 'new') => `${apiHost}/${deckId}/shuffle/?deck_count=1`;
const getDrawUrl = (deckId, count) => `${apiHost}/${deckId}/draw/?count=${count}`;

// This function illustrates calling the fetch API using async/await
// Internally, this function is still a blocking function because it's using await.
const callApi = async function(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

// TODO: Follow these steps to use the deckofcardsapi using the callApi.

// 1) Get the deck ID from a new shuffled deck (and show in element with id="deck-identifier")
// By using `await`, our code will wait for the callApi() to return its result.
let deck = await callApi(getDeckUrl());
console.log(deck);
const deckId = deck.deck_id;

// 2) Draw a single card (and append to the HTML of the element with `id="hand"`)
//    e.g.: let html = `<img src="${card.image}" alt="${card.value} of ${card.suit}" />`;
let result = await callApi(getDrawUrl(deckId, 4));
console.log(result);

const addCard = function(card) {
    let section = document.getElementById('hand');
    let html = `<img src="${card.image}" alt="${card.value} of ${card.suit}" />`;
    section.innerHTML += html;
}

result.cards.forEach(addCard);

// 3) Add the button listener for drawing more cards
document.getElementById('draw-card')
        .addEventListener('click', async function(evt) {
            let drawnCard = await callApi(getDrawUrl(deckId, 1));
            addCard(drawnCard.cards[0]);
        });
