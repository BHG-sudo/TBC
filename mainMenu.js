var difficulty = 0;

function menuHandler(event) {
  target = event.target;
  switch (target.innerText) {
    case "Kezdjük":
      toggleDisabled("startMenu");
      toggleDisabled("difMenu");
      break;
    case "Kreditek":
      toggleDisabled("startMenu");
      toggleDisabled("credMenu");
      break;
    case "Kilépés":
      window.location.href = "//localhost/";
      break;
    case "Folytatás":
      toggleDisabled("transition");
      toggleDisabled("battContainer");
      break;
    case "Mégsem":
      window.location.href = "//localhost/";      
      break;
    case "Könnyű":
      toggleDisabled("difMenu");
      toggleDisabled("transition");
      break;
    case "Közepes":
      difficulty = 1;
      toggleDisabled("difMenu");
      toggleDisabled("transition");
      break;
    case "Nehéz":
      difficulty = 2;
      toggleDisabled("difMenu");
      toggleDisabled("transition");
      break;
    case "Lehetetlen":
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
