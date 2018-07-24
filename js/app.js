const elementMemoryGame = document.querySelector('.memory-game');
elementMemoryGame.onclick = handleMemoryGame;

const elementFrogger = document.querySelector('.arcade-game');
elementFrogger.onclick = handleArcadeGame;


function handleMemoryGame(){
    window.open('https://cahergil.github.io/memorygame/');
}

function handleArcadeGame() {
    window.open('https://cahergil.github.io/froggergame/');
}