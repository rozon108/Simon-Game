var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userChosenColour;
var userClickedPattern = [];
var level = 0;
var started =false ;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  //select random color
  var randomChosenColour = buttonColours[randomNumber];
  //
  gamePattern.push(randomChosenColour);

  $(`.btn.${randomChosenColour}`).fadeOut(250).fadeIn(250);

  console.log(randomChosenColour);
  playSound(randomChosenColour);
  level++;
}


$(".btn").click(function () {
  userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  
});

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
    var selectedBtn= $(`#${currentColor}`);
    selectedBtn.addClass("pressed");
    setTimeout(() => {
        selectedBtn.removeClass("pressed")
    }, 100);
    
}

if(started==false){
    $(document).keypress(function () { 
       
    nextSequence();
    $('#level-title').text('Level : ' + level);
})
}
;


