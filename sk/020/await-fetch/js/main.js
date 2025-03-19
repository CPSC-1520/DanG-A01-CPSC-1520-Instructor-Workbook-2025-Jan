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

// 2) Draw a single card (and append to the HTML of the element with `id="hand"`)
//    e.g.: let html = `<img src="${card.image}" alt="${card.value} of ${card.suit}" />`;
