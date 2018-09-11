const elementMemoryGame = document.querySelector('.memory-game');
elementMemoryGame.onclick = handleMemoryGame;

const elementFrogger = document.querySelector('.arcade-game');
elementFrogger.onclick = handleArcadeGame;

const feedReader = document.querySelector('.feed-reader');
feedReader.onclick = handleFeedReader;

const restaurants = documents.querySelector('.restaurant-reviews');
restaurants.onclick = handleRestaurants;

const myReads = document.querySelector('.book-app-tracking');
myReads.onclick = handleMyReads;

const neighborhood = document.querySelector('.neighborhood-map ')
neighborhood.onclick = handleNeighborhood;

function handleMemoryGame(){
    window.open('https://cahergil.github.io/memorygame/');
}

function handleArcadeGame() {
    window.open('https://cahergil.github.io/froggergame/');
}

function handleFeedReader() {
    window.open('https://cahergil.github.io/feedreader/index.html');
}

function handleRestaurants() {
    window.open('https://cahergil.github.io/rreviews/index.html');
}

function handleMyReads() {
    window.open('https://cahergil.github.io/myreads-book-tracking/');
}

function handleNeighborhood() {
    window.open('https://cahergil.github.io/neighborhood-map');

}
