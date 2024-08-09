function saveGame() {
    let savedGames = JSON.parse(localStorage.getItem('savedGames')) || [];
    const currentGame = { url: window.location.href, 
        chapterTitle: document.querySelector('.center h2').innerText,
        timestamp: new Date().toISOString() };

    // Add current game to the beginning of the array
    savedGames.unshift(currentGame);

    // Ensure we only keep the last 10 saved games
    if (savedGames.length > 10) {
        savedGames = savedGames.slice(0, 10);
    }

    // Store updated saved games array in localStorage
    localStorage.setItem('savedGames', JSON.stringify(savedGames));

    document.getElementById("savegame").innerHTML = "Saved";
    document.getElementById("savegame").style.color = "red";
}

function loadGame() {
    const savedGames = JSON.parse(localStorage.getItem('savedGames'));

    if (!savedGames || savedGames.length === 0) {
        alert("No saved games found.");
        return;
    }

    let loadConfirmed = false;
    let gameToLoad = null;

    // Prompt user to choose a saved game
    while (!loadConfirmed) {
        const gameList = savedGames.map((game, index) => `${index + 1}. ${(game.chapterTitle)} | ${new Date(game.timestamp).toLocaleString()}`).join('\n');
        const choice = prompt(`Choose a saved game to load:\n${gameList}\nEnter the number (1-${savedGames.length}):`);

        if (choice === null) {
            return; // User canceled prompt
        }

        const index = parseInt(choice) - 1;

        if (!isNaN(index) && index >= 0 && index < savedGames.length) {
            gameToLoad = savedGames[index];
            loadConfirmed = confirm(`Load the game saved on ${new Date(gameToLoad.timestamp).toLocaleString()}?`);
        } else {
            alert("Invalid choice. Please enter a number from the list.");
        }
    }

    if (gameToLoad) {
        window.location.href = gameToLoad.url;
    } else {
        alert("No saved game chosen.");
    }
}