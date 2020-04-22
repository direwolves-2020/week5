import Service from './service';


export default class App {
    constructor() {
        this.userScore = 0;
        this.computerScore = 0;

        this.service = new Service();
    }

    handleUserInput(userChoice) {
        let computerChoice = 'rock';

        // Calculate winner
        let winner = this.calculateWinner(userChoice, computerChoice);

        // Calculate score
        this.updateScores(winner);

        // Store results
        let servicePromise = this.service.saveGameScores({
            "userScore": this.userScore, 
            "computerScore": this.computerScore
        });

        servicePromise
            .then(() => {
                this.updateView(winner);

                console.log("Really done");
            })
        
        console.log("Done");
    }

    updateScores(winner) {
        if(winner === "User") {
            this.userScore += 1
        } else {
            this.computerScore += 1;
        } 
    }

    updateView(winner) {
        this.updateResults(winner);
        this.updateScoresView();
    }

    updateResults(winner) {
        let resultElem = document.getElementById('action-message');
        resultElem.innerText = `${winner} Wins !!`;
    }

    updateScoresView() {
        let userScoreElem = document.getElementById('user-score');
        userScoreElem.innerText = this.userScore;

        let computerScoreElem = document.getElementById('computer-score');
        computerScoreElem.innerText = this.computerScore;
    }

    calculateWinner(userChoice, computerChoice) {
        let result = {
            "winner": ""
        };
        if (userChoice === "rock" && computerChoice == "scissors") {
            result.winner = "User";
        } else if (userChoice == "paper" && computerChoice == "rock") {
            result.winner= "User";
        } else {
            result.winner = "Computer";
        }

        return result;
    }
}