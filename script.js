function getComputerChoise() {
    randomInt = Math.floor(Math.random() * 3);
    let choise;
    if(randomInt === 0){
        choise = "Rock";
    }
    else if(randomInt === 1){
        choise = "Paper";
    }
    else {
        choise = "Scissors";
    }
    return choise;
}

function getHumanChoise() {
    const choiseHuman = prompt("Choose Rock, Scissors or Paper!", "Rock");
    return choiseHuman;
}

let scoreHuman = 0;
let scoreComputer = 0;



function playGame() {
    let humanChoise;
    let computerChoise;

    function playRound(humanChoise, computerChoise) {
        humanChoise = humanChoise.toLowerCase();
        computerChoise = computerChoise.toLowerCase();
        if((humanChoise == computerChoise)){
            console.log(`It's a tie! You both chose ${computerChoise}!`);
        }
        else if((humanChoise == "rock" & computerChoise == "scissors") ||
                (humanChoise == "paper" & computerChoise == "rock") ||
                (humanChoise == "scissors" & computerChoise == "paper")){
                    scoreHuman += 1;
                    console.log(`You won! ${humanChoise} beats ${computerChoise}! `)               
                }
        else {
            scoreComputer += 1;
            console.log(`You lost! ${computerChoise} beats ${humanChoise}!`);
        }

    }
    for(let i = 1; i <= 5; i++){
        humanChoise = getHumanChoise();
        computerChoise = getComputerChoise();
        console.log(`${humanChoise}, ${computerChoise}`)
        playRound(humanChoise, computerChoise);
    }
    console.log(`Human score: ${scoreHuman}, computer score: ${scoreComputer}`)
    if (scoreHuman > scoreComputer){
        console.log("You won!");
    }
    else if (scoreHuman < scoreComputer){
        console.log("You lost!");
    }
    else {
        console.log("It's a tie!");
    }

}

playGame();