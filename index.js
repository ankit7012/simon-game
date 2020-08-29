
var buttonColours = ["red","blue","green","yellow"];
var userClickedPattern = [];
var gamePattern = [];
var started = false;
var level = 0;


  $(document).keypress(function(){
    if (!started) {
      $("#level-title").text("level "+level);
      nextSequence();
      started = true;

    }
   });

  


$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } 
  else {
    var audio1 = new Audio("sounds/wrong.mp3");
    audio1.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
      
    }, 300);
    $("h1").text("Game over. press any key to restart");
    startOver();

    

  }

}

function nextSequence(){
  userClickedPattern = [];

    level++;
    $("#level-title").text("level "+level);

    var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
 $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
 var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
 audio.play();

 
}

function playSound(name) {
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentcolour) {
  $("#"+currentcolour).addClass("pressed");
  setTimeout(function(){$("#"+currentcolour).removeClass("pressed");},100);
  }
function startOver() {
  started = false;
  level = 0;
  gamePattern  = [];
  
}
  

