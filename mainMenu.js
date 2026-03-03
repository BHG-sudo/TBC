var difficulty = 0;

function menuHandler(event) {
  target = event.target;
  switch (target.innerText) {
    case "Play":
      menuToggler("difMenu");
      break;
    case "Settings":
    case "Credits":
    case "Quit":
    case "Easy":
      menuToggler("difMenu");
      break;
    case "Medium":
      difficulty = 1;
      menuToggler("difMenu");
      break;
    case "Hard":
      difficulty = 2;
      menuToggler("difMenu");
      break;
    case "Impossible":
      difficulty = 3;
      menuToggler("difMenu");
      break;
  }
  console.log(difficulty);
}
function menuToggler(x){
  document.getElementById("startMenu").classList.toggle("disabled") 
  document.getElementById(x).classList.toggle("disabled")
}

var menu = document.getElementsByClassName("menuList");
for (var j = 0; j < menu.length; j++) {
  for (var i = 0; i < menu[j].children.length; i++) {
    menu[j].children[i].addEventListener("click", menuHandler);
    console.log(i);
  }
}
