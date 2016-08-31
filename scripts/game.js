//Initiate handshake
console.log("Games.js is sourced");
var userInput;
var games=0;
var computerChoice;
var rocksChosen = 0;
var papersChosen = 0;
var scissorsChosen =  0;

// Decide one or two player game
//if one player game


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
  //set random numbers to rock, paper, scissors
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

//display games played on DOM
$(document).ready(function(){
  console.log("Document is ready");
  $("#gamesPlayed").on('click', function(){
    games++;
    console.log(games);
    $("#outcomesDiv").html("<p id='totalGames'> You have played " + games +" game(s).</p>");
    // store user choices functionand append to div
    choicesTally(userInput);
  });
});

// tally the toal of each  selection type on the DOM type
var choicesTally = function(choice){
  console.log('in choicesTally');

  if (choice == "Rock"){
    rocksChosen++;
  }
  else if( choice == "Paper"){
    papersChosen++;
  }
  else if( choice == "Scissors"){
    scissorsChosen++;
  }
  $('#totalGames').append("<br><p'totalChoices'> You have chosen Rock " + rocksChosen + " times, Paper " + papersChosen +" times, and Scissors " + scissorsChosen +".</p>");
}; //end choicesTally
