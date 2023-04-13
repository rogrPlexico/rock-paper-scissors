// duck beats ninja
// ninja beats apple
// apple beats duck

/* program flow:
    var playerscore
    var compscore
    
    click startGame button
        call startGame()
            addeventlistenerS to choice buttons
            set playerscore = 0
            set computerscore = 0 
     
        click choice button
            call round()
                var compchoice = getcompchoice()
                    return compchoice
                var playerchoice = this.value
                determine winner
                display playerchoice
                display compchoice
                display round result text
                update playerscore or compscore
                if player OR compscore == 5
                    display final winner text
                    remove event listeners from choice buttons
*/

let playerScore = 0;
let computerScore = 0;

function getComputerChoice (e) {
    let randomNumber = Math.floor((Math.random() * (3)));   // generate random number from 0-2
    let computerChoice;
    
    if (randomNumber == 0) {
        computerChoice = "duck";
    } else if (randomNumber == 1) {
        computerChoice = "apple";
    } else if (randomNumber == 2) {
        computerChoice = "ninja";
    } else {
        console.error('error generating random number')
    }

    return computerChoice;
}

function playRound(e) {   
    let computerSelection = getComputerChoice();    // call getComputerChoice function
    let playerSelection = this.value;
    let winner;

    // DRAW outcomes:
    if (playerSelection == "duck" && computerSelection == "duck") {
        playerChoiceEl.textContent = "Duck";
        computerChoiceEl.textContent = "Duck";
        resultTextEl.textContent = `Ducks are extreme pack animals who are completely biased toward their own kind. Rarely will they fight one another. THIS ROUND IS A DRAW`;
        winner = 'tie';
    } else if (playerSelection == "apple" && computerSelection == "apple") {
        playerChoiceEl.textContent = "Apple";
        computerChoiceEl.textContent = "Apple";
        resultTextEl.textContent = `Two apples hurtle toward eachother at breakneck speed. Two deafening booms rattle the earth as each apple breaks the sound barrier, and a roaring CRUNCH is heard as they crash into one another and instantly vaporize into a fine mist. THIS ROUND IS A DRAW`;
        winner = 'tie';
    } else if (playerSelection == "ninja" && computerSelection == "ninja") {
        playerChoiceEl.textContent = "Ninja";
        computerChoiceEl.textContent = "Ninja";
        resultTextEl.textContent = `Two ninjas fight to the death in a forest. We have no way of knowing who wins. THIS ROUND IS A DRAW`;
        winner = 'tie';
        // PLAYER WIN outcomes:
    } else if (playerSelection == "duck" && computerSelection == "ninja" ) {
        playerChoiceEl.textContent = "Duck";
        computerChoiceEl.textContent = "Ninja";
        resultTextEl.textContent = `Duck walks. Duck swims. Duck flies. Ninja can only run for his life. YOU WIN THIS ROUND`;
        winner = 'player';
    } else if (playerSelection == "apple" && computerSelection == "duck" ) {
        playerChoiceEl.textContent = "Apple";
        computerChoiceEl.textContent = "Duck";
        resultTextEl.textContent = `Wow your aim is good! Knocked that bird right outta the sky with that thing. YOU WIN THIS ROUND`;
        winner = 'player';
    } else if (playerSelection == "ninja" && computerSelection == "apple" ) {
        playerChoiceEl.textContent = "Ninja";
        computerChoiceEl.textContent = "Apple";
        resultTextEl.textContent = `The Ninja mercenary you hired on the dark web nonchalantly takes a bite out of enemy apple. You're paying this guy 40 bucks an hour? Guess it was worth it. YOU WIN THIS ROUND`;
        winner = 'player';
        // COMPUTER WIN outcomes:
    } else if (playerSelection == "apple" && computerSelection == "ninja" ) {
        playerChoiceEl.textContent = "Apple";
        computerChoiceEl.textContent = "Ninja";
        resultTextEl.textContent = `You chose an inanimate object. Ninja picks up apple and throws it in the trash or feeds it to a goat or something. Of course, YOU LOSE THIS ROUND`;
        winner = 'computer';
    } else if (playerSelection == "ninja" && computerSelection == "duck" ) {
        playerChoiceEl.textContent = "Ninja";
        computerChoiceEl.textContent = "Duck";
        resultTextEl.textContent = `The sound of fevered squacking is all that can be heard as ninja's motionless body continues to be pecked. YOU LOSE THIS ROUND`;
        winner = 'computer';
    } else if (playerSelection == "duck" && computerSelection == "apple" ) {
        playerChoiceEl.textContent = "Duck";
        computerChoiceEl.textContent = "Apple";
        resultTextEl.textContent = `Apple comes hurtling out of the sky toward your duck and explodes his head. YOU LOSE THIS ROUND`;
        winner = 'computer';
    } else {
        console.error('error evaluating winner');
    }

    // score update
    if (winner == "player") {
        playerScore++;
        playerScoreEl.textContent = `${playerScore}`;
    } else if (winner == "computer") {
        computerScore++;
        computerScoreEl.textContent = `${computerScore}`;        
    }
    
    // check for end-of-game
    if (playerScore == 5) {
        finalResultEl.textContent = "AND YOU WON THE GAME!!!!!!!!!!!!!!!!!!!!!!!!!!";
        buttons.forEach(button => button.removeEventListener('click', playRound));
    } else if (computerScore == 5) {
        finalResultEl.textContent = "and Duckgarnit YOU LOST THE GAME!!!";
        buttons.forEach(button => button.removeEventListener('click', playRound));
    } else if (playerScore == 6 && computerScore == 6) {
        finalResultEl.textContent = "EVERYONE GETS A TROPHY. NO LOSERS THIS GAME!!!!";
    };
}

function newGame(e) {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = `${playerScore}`;
    computerScoreEl.textContent = `${computerScore}`;        

    buttons.forEach(button => button.addEventListener('click', playRound));
}

const startGame = document.querySelector('.start-game');
startGame.addEventListener('click', newGame);

const buttons = document.querySelectorAll('.choice');
const playerChoiceEl = document.querySelector('.player-choice');
const computerChoiceEl = document.querySelector('.computer-choice');
const resultTextEl = document.querySelector('.result');
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score')
const finalResultEl = document.querySelector('.final-result')





