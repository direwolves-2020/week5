export default class Service {

    constructor() {
        this.saveScoresUrl = "/api/savescores";
    }

    saveGameScores(results) {
        let url = this.saveScoresUrl + `?user=${results.userScore}&computer=${results.computerScore}`;

        return fetch(url)
            .then((response) => {
                console.log(`Fetch response ${response}`);
            });
    }
}