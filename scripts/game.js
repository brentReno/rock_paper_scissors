/////Global Variables\\\\\\
var playerOneInput;
var playerTwoInput;
var computerInput;
var rock ="<button id ='rock'>Rock</button>";
var paper="<button id ='paper'>Paper</button>";
var scissors="<button id ='scissors'>Scissors</button>";

$(document).ready(function(){

  //One player vs the computer
  $("#soloPlay").on('click', function(){
  console.log('In soloPlay on CLick');
  var soloText = "<h3>Which will you choose?</h3>"+ rock + paper + scissors;
  $('<div id= "onePlayerGame"></div>').hide().html(soloText).appendTo('#playerSelection').fadeIn('slow)');
});//end one player

  //Two palyer game
  $('#twoPlay').on('click', function(){
  console.log('In two Play on Click.');
  var twoText ="<div id='playerOneInput'><h3>Player One which will you choose?</h3>"+rock + paper +scissors +"</div><div id='playerTwoInput'><h3>Player Two which will you choose?</h3>"+rock + paper +scissors +"</div>";
  $('<div id= "twoPlayerGame"></div>').hide().html(twoText).appendTo('#playerSelection').fadeIn('slow)');
});//end two player
});//end documetn ready
