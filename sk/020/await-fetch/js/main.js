const apiHost = 'https://deckofcardsapi.com/api/deck/';
const shuffle = `${apiHost}/shuffle/?deck_count=1`;
const getDrawUrl = (deckId, count) => `${apiHost}${deckId}/draw/?count=${count}`;

// This function illustrates calling the fetch API using async/await
const callApi = async function(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

// TODO: Follow these steps to populate the element with `id="hand"`

// 1) Get the deck ID from a new shuffled deck (and show in element with id="deck-identifier")

// 2) Draw a single card (and append to the HTML of the element with `id="hand"`)
//    e.g.: let html = `<img src="${card.image}" alt="${card.value} of ${card.suit}" />`;