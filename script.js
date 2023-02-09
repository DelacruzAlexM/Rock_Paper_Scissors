let PlayerPoint = 0;
let ComputerPoint = 0;
//get user input
function getPlayerChoice(){
    let choice = window.prompt("Rock, Paper, or Scissors?");
    choice.toLowerCase();
    return choice;
}

//randomly returns computers move rock, paper, or scissors
function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    computerChoice.random();
    return computerChoice;

}
//Determines if the player or computer wins
function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "You drew"
        }
        else if(computerSelection == "paper"){
            return "You lost!";
        }
        else{
            return "You won this round!";
        }    
    } else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return "You won this round!";
        }
        else if(computerSelection == "paper"){
            return "You drew!";
        }
        else{
            return "You lost this round";
        }    
    } else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return "You lost this round";
        }
        else if(computerSelection == "paper"){
            return "You won this round!";
        }
        else{
            return "You drew";
        }
    }


}
//keeps track of the points for the game
function game(){

}
