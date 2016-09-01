//Initiate handshake
console.log("Games.js is sourced");
var playerOneInput;
var playerTwoInput;
var games=0;
var computerChoice;
var rocksChosen = 0;
var papersChosen = 0;
var scissorsChosen =  0;
var hideSinglePlayer = function(){
  $("#singlePlayer").hide();
}; //hide singlePlayer

//Run single player game
 var playGameSolo = function(){
  console.log("Inside PlayGame");
//Show Single Player game
// get user input
playerOneInput = document.getElementById('playerOneIn').value;
console.log(playerOneInput);
// create computer choice
computerInput();
compareInputs(playerOneInput, computerInput);
};//end play game

//run two player game
var playGameTwo = function(){};

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
//Single Player onClick
 $('#soloPlay').on("click", function(){
   console.log('in soloPlay OnClick');
   $('#singlePlayer').show();
 });

 //run single player mode
  $("#gamesPlayed").on('click', function(){
    games++;
    console.log(games);
    $("#outcomesDiv").html("<p id='totalGames'> You have played " + games +" game(s).</p>");
    // store user choices functionand append to div
    choicesTally(playerOneInput);
  });
  $("#twoPlay").on('click', function(){
    console.log('In twoPlay onClick');
    $("#playerSelection").append('<div id="twoPlay">TEST</div>');
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
