function funcMenu(event) {
  target = event.target;
  console.log(target);

  if (target.innerText == "Play") {
    var playWindow = window.open("height=100,width=100");
  } else if (target.innerText == "Settings") {
    console.log("Settings");
  } else if (target.innerText == "Credits") {
    console.log("Credits");
  } else if (target.innerText == "Quit") {
    console.log("Quit");
  }
}

var menu = document.getElementById("menu");
for (var i = 0; i < menu.children.length; i++) {
  menu.children[i].addEventListener("click", funcMenu);
  console.log(i);
}
