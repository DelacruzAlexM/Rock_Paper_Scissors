let PlayerPoint = 0;
let ComputerPoint = 0;
let gameRound = 0;

//get user input
function getPlayerChoice(){
    let choice = window.prompt("Rock, Paper, or Scissors?").toLowerCase();
    return choice;
}

//randomly returns computers move rock, paper, or scissors
function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];

}
//Determines if the player or computer wins
function playRound(playerSelection, computerSelection){
    while(gameRound < 6){
        if(playerSelection == "rock"){
         if(computerSelection == "rock"){
              return "You drew"
         }
         else if(computerSelection == "paper"){
                return "You lost!" + (ComputerPoint = ComputerPoint + 1);
            }
            else{
                return "You won this round!" + (PlayerPoint = PlayerPoint + 1);
         }    
        } else if(playerSelection == "paper"){
            if(computerSelection == "rock"){
             return "You won this round!" + (PlayerPoint = PlayerPoint + 1);
         }
         else if(computerSelection == "paper"){
             return "You drew!";
         }
         else{
             return "You lost this round" + (ComputerPoint = ComputerPoint + 1);
          }    
         } else if(playerSelection == "scissors"){
         if(computerSelection == "rock"){
             return "You lost this round" + (ComputerPoint = ComputerPoint + 1);
         }
         else if(computerSelection == "paper"){
              return "You won this round!" + (PlayerPoint = PlayerPoint + 1);
         }
         else{
                return "You drew";
         }
        }

    }
}
//Plays the game and keeps track of the points
function game(){
    while(gameRound < 6){   
        playRound(getPlayerChoice(), getComputerChoice());
        console.log(playRound);
        console.log("You have this many points: " + PlayerPoint);
        console.log("The computer has " + ComputerPoint + " points");
        gameRound++;
}
    if(PlayerPoint > ComputerPoint){
        return "You have won the game!";
    } else if(PlayerPoint < ComputerPoint){
        return "You have lost the game";
    } else{
        return "It is a tie";
    }
}
