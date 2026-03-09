var difficulty = 0;

function menuHandler(event) {
  target = event.target;
  switch (target.innerText) {
    case "Play":
      toggleDisabled("startMenu");
      toggleDisabled("difMenu");
      break;
    case "Credits":
      toggleDisabled("startMenu");
      toggleDisabled("credMenu");
      break;
    case "Quit":
      window.location.href = "//localhost/";
      break;
    case "Continue":
      toggleDisabled("transition");
      toggleDisabled("battContainer");
      break;
    case "Easy":
      toggleDisabled("difMenu");
      toggleDisabled("transition");
      break;
    case "Medium":
      difficulty = 1;
      toggleDisabled("difMenu");
      toggleDisabled("transition");
      break;
    case "Hard":
      difficulty = 2;
      toggleDisabled("difMenu");
      toggleDisabled("transition");
      break;
    case "Impossible":
      difficulty = 3;
      toggleDisabled("difMenu");
      toggleDisabled("transition");
      break;
  }
  function toggleDisabled(x) {
    document.getElementById(x).classList.toggle("disabled");
  }
}
function battleHandler(x) {
  
}
var menu = document.getElementsByClassName("menuList");
for (var j = 0; j < menu.length; j++) {
  for (var i = 0; i < menu[j].children.length; i++) {
    menu[j].children[i].addEventListener("click", menuHandler);
    console.log(i);
  }
}
