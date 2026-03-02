function menuHandler(event) {
  target = event.target;
  switch (target.innerText) {
    case "Play":
      document.getElementById("startMenu").classList.toggle("disabled");
      document.getElementById("difMenu").classList.toggle("disabled");
    case "Settings":
    case "Credits":
    case "Quit":
    case "Easy":
    case "Medium":
    case "Hard":
    case "Impossible":
  }
}

var menu = document.getElementsByClassName("menuList");
for (var j = 0; j < menu.length; j++) {
  for (var i = 0; i < menu[j].children.length; i++) {
    menu[j].children[i].addEventListener("click", menuHandler);
    console.log(i);
  }
}
