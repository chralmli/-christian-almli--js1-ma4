const gamesUrl = "https://api.rawg.io/api/games";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + gamesUrl;

async function createGames() {
    try {
        const games = await response.json();
        displayGames(games);
    } catch (error) {
        console.log(error);
    }
}

createGames();

function displayGames(games) {
    console.log(games);
    const results = document.querySelector(".results");
}