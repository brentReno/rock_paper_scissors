//Initiate handshake
console.log("Games.js is sourced");
var userInput;
var computerChoice;
 var playGame = function(){
  console.log("Inside PlayGame");
// get user input
userInput = document.getElementById('userInput').value;
console.log(userInput);
// create computer choice
computerInput();
compareInputs(userInput, computerInput);
};//end play game

  //compare user and computer inputs
    //alert win, loss tie
  var compareInputs = function(userInput, computerInput){
    if(userInput === computerChoice){
      alert("It's a tie! Play again?");
    }
    else if(userInput == "Rock" && computerChoice == "Paper"){
      alert("Paper beats rock, you lose! Try again?");
    }
    else if( userInput == "Rock" && computerChoice =="Scissors"){
      alert("Rock beats Scissors, you win!!!!! Horaayyyy!!");
    }
    else if( userInput =="Paper" && computerChoice =="Scissors"){
    alert("Scissors beats Paper, you lose! Try again?");
    }
    else if( userInput == "Paper" && computerChoice == "Rock"){
      alert("Paper covers rock, you win!!!!!!! Horaayyyy!!");
    }
    else if(userInput == "Scissors" && computerChoice =="Rock"){
      alert("Rock beats Scissors, you lose! Try again?");
    }
    else if(userInput == "Scissors" && computerChoice =="Paper"){
      alert("Scissors cut Paper, you win!!!!! Horaayyyy!!");
    }
  };

  //alert win, loss tie
var computerInput =function(){
  //create random number
  var randomNumber = function(){
    return Math.random();
  };
    //set random number  to rock, paper, scissors

  if ( randomNumber() >= 0 && randomNumber() <= 0.33 ){
    console.log(randomNumber());
    computerChoice = "Rock";
    console.log(computerChoice);
  }
  else if(randomNumber() >=0.33 && randomNumber() <= 0.66){
    console.log(randomNumber());
    computerChoice ="Paper";
    console.log(computerChoice);
  }
  else{
    console.log(randomNumber.value);
    computerChoice = "Scissors";
    console.log(computerChoice);
  }
};
