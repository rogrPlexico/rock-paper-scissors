// duck beats ninja
// ninja beats apple
// apple beats duck

function getComputerChoice () {
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

// Plays one round
function playRound() {   
    let playerSelection = prompt('enter your choice: ').toLowerCase();
    // ****MAY NEED IF STATEMENT HERE TO CHECK FOR CANCELED PROMPT OR BAD ENTRIES TO PROMPT
    let computerSelection = getComputerChoice();    // call getComputerChoice function
    let resultArray = [playerSelection, computerSelection];
    
    // DRAW
    if (playerSelection == "duck" && computerSelection == "duck") {
        console.log(`Computer chose: DUCK
            Duck v Duck -- Ducks are extreme pack animals who are completely biased toward their own kind. Rarely will they fight one another. THIS ROUND IS A DRAW`);
    } else if (playerSelection == "apple" && computerSelection == "apple") {
        console.log(`Computer chose: APPLE
            Apple v Apple -- Two apples hurtle toward eachother at breakneck speed. Two deafening booms rattle the earth as each apple breaks the sound barrier, and a roaring CRUNCH is heard as they crash into one another and instantly vaporize into a fine mist. THIS ROUND IS A DRAW`);
    } else if (playerSelection == "ninja" && computerSelection == "ninja") {
        console.log(`Computer chose: NINJA
            Ninja v Ninja -- Two ninjas fight to the death in a forest. We have no way of knowing who wins. THIS ROUND IS A DRAW`);
    // PLAYER WIN
    } else if (playerSelection == "duck" && computerSelection == "ninja" ) {
        console.log(`Computer chose: NINJA
            Duck v Ninja -- Duck walks. Duck swims. Duck flies. Ninja can only run for his life. YOU WIN THIS ROUND`);
    } else if (playerSelection == "apple" && computerSelection == "duck" ) {
        console.log(`Computer chose: DUCK
            Apple v Duck -- Wow your aim is good! Knocked that bird right outta the sky with that thing. YOU WIN THIS ROUND`);
    } else if (playerSelection == "ninja" && computerSelection == "apple" ) {
        console.log(`Computer chose: APPLE
            Ninja V Apple -- Your sketchily-hired Ninja mercenary nonchalantly takes a bite out of enemy apple. You're paying this guy 40 bucks an hour? Guess it was worth it. YOU WIN THIS ROUND`);
    // COMPUTER WIN
    } else if (playerSelection == "apple" && computerSelection == "ninja" ) {
        console.log(`Computer chose: NINJA
            Apple v Ninja -- You chose an inanimate object. Ninja picks up apple and throws it in the trash or feeds it to a goat or something. Of course, YOU LOSE THIS ROUND`);
    } else if (playerSelection == "ninja" && computerSelection == "duck" ) {
        console.log(`Computer chose: DUCK
            Ninja v Duck -- The sound of fevered squacking is all that can be heard as ninja's motionless body continues to be pecked. YOU LOSE THIS ROUND`);
    } else if (playerSelection == "duck" && computerSelection == "apple" ) {
        console.log(`Computer chose: APPLE
            Duck v Apple -- Apple comes hurtling out of the sky toward your duck and explodes his head. YOU LOSE THIS ROUND`);
    
    } else {
        console.error('error evaluating winner');
    }

    return resultArray;
}

// Calls round() 5 times
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tiedRounds = 0;
      
    for (i = 1; i <= 5; i++) {
        let roundResult = playRound();
        let playerChoice = roundResult[0];
        let computerChoice = roundResult[1];
        
        if (playerChoice == computerChoice) {
            tiedRounds++;
            
            console.log(
            `Player Score: ${playerScore}
            Computer Score: ${computerScore}
            Rounds Tied: ${tiedRounds}`);
        } else if ((playerChoice == "duck" && computerChoice == "ninja") || 
            (playerChoice == "apple" && computerChoice == "duck") ||
            (playerChoice == "ninja" && computerChoice == "apple")) {
            
            playerScore++;
            
            console.log(
            `Player Score: ${playerScore}
            Computer Score: ${computerScore}
            Rounds Tied: ${tiedRounds}`);
        } else if ((playerChoice == "ninja" && computerChoice == "duck") || 
            (playerChoice == "duck" && computerChoice == "apple") ||
            (playerChoice == "apple" && computerChoice == "ninja")) {
            
                computerScore++;
            console.log(
            `Player Score: ${playerScore}
            Computer Score: ${computerScore}
            Rounds Tied: ${tiedRounds}`);
        } else {
            console.error("round evaluation error (in game() function")
        }
    }

    if (playerScore > computerScore) {
        console.log("YOU WON THE GAME!!!!!!!!!!!!!!!!!!!!!!!!!!")
    } else if (computerScore > playerScore) {
        console.log("Duckgarnit YOU LOST THE GAME!!!");
    } else if (playerScore == computerScore) {
        console.log("EVERYONE GETS A TROPHY. NO LOSERS THIS GAME!!!!")
    }

}





