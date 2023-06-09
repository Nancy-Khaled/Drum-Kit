var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


document.addEventListener("keydown", function(e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});


function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('assets/sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('assets/sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('assets/sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('assets/sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('assets/sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('assets/sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('assets/sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(key);
  }
}


function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);
}
