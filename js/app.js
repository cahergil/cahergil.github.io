const elementMemoryGame = document.querySelector('.memory-game');
elementMemoryGame.onclick = handleMemoryGame;

const elementFrogger = document.querySelector('.arcade-game');
elementFrogger.onclick = handleArcadeGame;

const feedReader = document.querySelector('.feed-reader');
feedReader.onclick = handleFeedReader;

function handleMemoryGame(){
    window.open('https://cahergil.github.io/memorygame/');
}

function handleArcadeGame() {
    window.open('https://cahergil.github.io/froggergame/');
}

function handleFeedReader() {
    window.open('https://cahergil.github.io/feedreader/index.html');
}
