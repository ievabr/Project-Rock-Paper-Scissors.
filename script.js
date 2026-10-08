console.log("JavaScript loaded");
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

    function playRound2(humanChoise, computerChoise){
        let scoreComputerObject = document.getElementById("computer");
        let scoreComputerText = Number(scoreComputerObject.textContent);
        let scoreHumanObject = document.getElementById("human");
        let box = document.getElementById("who-wins");
        let scoreHumanText = Number(scoreHumanObject.textContent);
        let roundsDiv = document.querySelector(".rounds");

        humanChoise = humanChoise.toLowerCase();
        computerChoise = computerChoise.toLowerCase();

        roundsDiv.textContent = `TOTAL ROUNDS: ${rounds + 1}`;

        if((humanChoise == computerChoise)){
                console.log("its a tie!");
                box.textContent = "It's a tie!";}

        else if((humanChoise == "rock" && computerChoise == "scissors") ||
                    (humanChoise == "paper" && computerChoise == "rock") ||
                    (humanChoise == "scissors" && computerChoise == "paper")){
                const box = document.getElementById('who-wins');
                box.textContent = "You win!";        
                console.log(scoreHumanText);
                scoreHumanObject.textContent = `${scoreHumanText + 1}`;
                }

                    
        else {
                const box = document.getElementById('who-wins');
                box.textContent = "You lost!";
                scoreComputerObject.textContent = `${scoreComputerText + 1}`;
                }   
    }



let btns = document.querySelectorAll("button");
let rounds = 0;

btns.forEach(button => {
    button.addEventListener('click', function() {
    let humanChoise;
    let computerChoise;
    humanChoise = this.textContent;
    computerChoise = getComputerChoise();
    playRound2(humanChoise, computerChoise);
    rounds += 1;   
    let roundsDiv = document.querySelector(".rounds");
    let Computer = document.getElementById("computer");
    let scoreComputer = Computer.textContent;
    let Human = document.getElementById("human");
    let scoreHuman = Human.textContent;
    if(rounds == 5){
        roundsDiv.textContent = `Game is over! Result: ${scoreHuman}-${scoreComputer}`
        Computer.textContent = "0";
        Human.textContent = "0";
        rounds = 0;
    }
       })
    });

