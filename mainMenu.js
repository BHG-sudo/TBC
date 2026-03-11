let battStats = document.getElementById("battStats");

// Player class
class Player {
  constructor(maxHP, ATK, DF) {
    this.maxHP = maxHP;
    this.HP = maxHP;
    this.ATK = ATK;
    this.DF = DF;
  }
  renewStats() {
    battStats.children[0].innerText = "HP: " + this.maxHP + "/" + this.HP;
    battStats.children[1].innerText = "ATK: " + this.ATK;
    battStats.children[2].innerText = "DF: " + this.DF;
  }
}
// Enemy class
class Enemy {
  constructor(HP, ATK, DF) {
    this.HP = HP;
    this.ATK = ATK;
    this.DF = DF;
  }
}

let tran = document.getElementById("transition");
let difficulty = 0;
let action = 1;
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
      toggleDisabled("story");
      toggleDisabled("transition");
      tranInterval = setInterval(transition, 500);
      setTimeout(battle, 2000);
      break;
    case "Mégsem":
      toggleDisabled("story");
      toggleDisabled("deathScreen");
      window.setTimeout(byebye, 5000);
      break;
    case "Könnyű": {
      document.getElementById("mainBgr").classList.toggle("mainBgr");
      toggleDisabled("difMenu");
      toggleDisabled("story");
      action = 2;
      player.maxHP = 20;
      player.HP = player.maxHP;
      player.ATK = 4;
      player.DF = 3;
      player.renewStats();
      break;
    }
    case "Közepes": {
      difficulty = 1;
      toggleDisabled("difMenu");
      toggleDisabled("story");
      action = 2;
      break;
    }
    case "Nehéz": {
      difficulty = 2;
      toggleDisabled("difMenu");
      toggleDisabled("story");
      break;
    }
    case "Lehetetlen": {
      difficulty = 3;
      toggleDisabled("difMenu");
      toggleDisabled("story");
      break;
    }
  }
}
function toggleDisabled(x) {
  document.getElementById(x).classList.toggle("disabled");
}
function transition() {
  tran.classList.toggle("transition1");
  tran.classList.toggle("transition2");
}
function battle() {
  clearInterval(tranInterval);
  toggleDisabled("transition");
  toggleDisabled("battContainer");
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

function battHandler(event) {
  target = event.target;
  if (action > 0) {
    switch (target.innerText) {
      case "Támadás":
        action--;
        classHandler(monster, 1, 10);
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

function classHandler(name, what, change) {
  /*
  name = object/class name
  change = amount of change in something 
  what: 1 = 'name' HP gets lowered by 'change' variable
        2 = 
  */
  switch (what) {
    case 1: {
      name.HP = name.HP - change;
      battStats.children[0].innerText = "HP: " + name.maxHP + "/" + name.HP;
    }
  }
}

let battUI = document.querySelectorAll("td");
for (let k = 0; k < battUI.length; k++) {
  battUI[k].addEventListener("click", battHandler);
}
