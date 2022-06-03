var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userChosenColour;
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function () {
  if (started == false) {
    $("#level-title").text("Level : " + level);
    nextSequence();
    started = true;
  }
});
$(document).click(function () {
  if (started == false) {
    $("#level-title").text("Level : " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  level++;
  $("#level-title").text("Level : " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $(`.btn.${randomChosenColour}`).fadeOut(250).fadeIn(250);
  playSound(randomChosenColour);
  userClickedPattern = [];
}

$(".btn").click(function () {
  userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  //check answres
  var indx = userClickedPattern.length - 1;
  //console.log(indx+" required:" ,gamePattern, gamePattern[indx] +"\n user's: ", userClickedPattern);
  checkAnswer(indx);
});


function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length)
      setTimeout(() => {
        
        nextSequence();
      }, 1500);
  } else {
    console.log("wrong!");
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
      $("#level-title").text("Game Over, ur score: "+level+ " , Press A Key to Start");
      startOver();
    }, 200);
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
  console.log("Game Over, all value reset!! \n new game?");
}

function playSound(name) {
  switch (name) {
    case "blue":
      var activeBtnSound = new Audio("sounds/" + name + ".mp3");
      break;

    case "green":
      var activeBtnSound = new Audio("sounds/" + name + ".mp3");
      break;

    case "red":
      var activeBtnSound = new Audio("sounds/" + name + ".mp3");
      break;

    case "yellow":
      var activeBtnSound = new Audio("sounds/" + name + ".mp3");
      break;

    default:
      break;
  }
  activeBtnSound.play();
  //console.log(activeBtnSound);
}
function animatePress(currentColor) {
  var selectedBtn = $(`#${currentColor}`);
  selectedBtn.addClass("pressed");
  setTimeout(() => {
    selectedBtn.removeClass("pressed");
  }, 100);
}
