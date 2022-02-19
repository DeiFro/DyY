function mycLICK() {
  var image = document.getElementById("main-image");
  image.classList.remove("rotate");
  image.offsetWidth;
  image.classList.add("rotate");
}

window.onload = function () {
  var image = document.getElementById("main-image");

  image.onclick = function () {
    mycLICK();

    var audio = document.querySelector("audio");

    if (audio.paused) {
      audio.currentTime = 0;
      audio.play();
      document.querySelector("h1").classList.add("textShineBlack");
    } else {
      audio.pause();
      document.querySelector("h1").classList.remove("textShineBlack");
    }
  };
};

function newStory() {
  var storyElement = document.querySelector(".our-story");
  var textInputContainer = document.querySelector(".textarea_container");
  var storyBtn = document.querySelector(".btn_newstory");

  storyElement.classList.add("hidden");
  storyBtn.classList.add("hidden");

  textInputContainer.classList.remove("hidden");
}

function replace() {
  var textInput = document.getElementById("myTextarea");
  console.log(textInput);
  var storyElement = document.querySelector(".our-story");
  var textInputContainer = document.querySelector(".textarea_container");
  var newStoryBtn = document.querySelector(".btn_newstory");

  storyElement.innerHTML = textInput.value;

  textInputContainer.classList.add("hidden");

  newStoryBtn.classList.remove("hidden");
  storyElement.classList.remove("hidden");

  textInput.value = "";
}

// That's what we will create together! xx Okie dokie
