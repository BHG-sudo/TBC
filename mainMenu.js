let battStats = document.getElementById("battStats");
// Player class
class Player{
  constructor(maxHP, ATK, DF){
    this.maxHP = maxHP;
    this.HP = maxHP;
    this.ATK = ATK;
    this.DF = DF;
  }
  function renewStats(){
    battStats.children[0].innerText = "HP: "+this.maxHP+"/"+this.HP;
    battStats.children[1].innerText = "ATK: "+this.ATK
    battStats.children[2].innerText = "DF: "+this.DF
  }
}
// Enemy class
class Enemy{
  constructor(HP, ATK, DF){
    this.HP = HP;
    this.ATK = ATK;
    this.DF = DF; 
  }
}

let difficulty = 0;
let action  = 1;
const player = new Player(0, 0, 0);
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
      window.location.href = ".";
      break;
    case "Folytatás":
      toggleDisabled("transition");
      toggleDisabled("battContainer");
      break;
    case "Mégsem":
      toggleDisabled("transition");
      toggleDisabled("deathScreen");
      window.setTimeout(byebye, 5000);
      break;
    case "Könnyű":{
      toggleDisabled("difMenu");
      toggleDisabled("transition");
      action = 2;
      player.maxHP, player.HP = 20;
      player.ATK = 4;
      player.DF = 3;
      break;
    }
    case "Közepes":{
      difficulty = 1;
      toggleDisabled("difMenu");
      toggleDisabled("transition");
      action = 2;
      break;
    }
    case "Nehéz":{
      difficulty = 2;
      toggleDisabled("difMenu");
      toggleDisabled("transition");
      break;
    }
    case "Lehetetlen":{
      difficulty = 3;
      toggleDisabled("difMenu");
      toggleDisabled("transition");
      break;
    }

  }
}
function toggleDisabled(x) {
  document.getElementById(x).classList.toggle("disabled");
}
function byebye() {
  window.location.href = ".";
}
let menu = document.getElementsByClassName("menuList");
for (let j = 0; j < menu.length; j++) {
  for (let i = 0; i < menu[j].children.length; i++) {
    menu[j].children[i].addEventListener("click", menuHandler);
  }
}



//Battle Handling

console.log(action);
function battHandler(event) {
  target = event.target;
  if(action > 0){
    switch (target.innerText) {
      case "Támadás":
        action--;
        classHandler(player, 1, 10);
        break;
      case "Varázslatok":
        action--;
        break;
      case "Védekezés":
        action--;
        break;
      case "Leltár":
        break;
    }
    
  }

}

function classHandler(name, what, change){
  switch(what){
    case 1:{
      console.log(change, name.HP)
      player.HP = player.HP - change;
      console.log(name.HP)
      battStats.children[0].innerText = "HP: "+name.HP;
    }
  }
}
console.log(battStats.children[0])

let battUI = document.querySelectorAll("td");
for (let k = 0; k < battUI.length; k++) {
  battUI[k].addEventListener("click", battHandler);
}


