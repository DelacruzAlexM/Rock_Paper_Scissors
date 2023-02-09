let PlayerPoint = 0;
let ComputerPoint = 0;
let gameRound = 0;

//get user input
function getPlayerChoice(){
    let choice = window.prompt("Rock, Paper, or Scissors?");
    choice.toLowerCase();
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
                return "You lost!" + (ComputerPoint += 1);
            }
            else{
                return "You won this round!" + (PlayerPoint += 1);
         }    
        } else if(playerSelection == "paper"){
            if(computerSelection == "rock"){
             return "You won this round!" + (PlayerPoint += 1);
         }
         else if(computerSelection == "paper"){
             return "You drew!";
         }
         else{
             return "You lost this round" + (ComputerPoint += 1);
          }    
         } else if(playerSelection == "scissors"){
         if(computerSelection == "rock"){
             return "You lost this round" + (ComputerPoint += 1);
         }
         else if(computerSelection == "paper"){
              return "You won this round!" + (PlayerPoint += 1);
         }
         else{
                return "You drew";
         }
        }

    }
}
//keeps track of the points for the game
function game(){
    for(i = gameRound; i < 6; i++){
        gameRound += 1;
    }
}
//runs the other functions to play the game
function playGame(){
    while(game < 6){
        playRound(getPlayerChoice(), getComputerChoice());
        console.log(playRound());
        game();
    }
     if(PlayerPoint < ComputerPoint){
        return "You Lost";
     } else {
        return "You won!!";
     }
     
}
