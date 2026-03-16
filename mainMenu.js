let battStats = document.getElementById("battStats");

// Player class
class Player {
  constructor(maxHP, HP, ATK, DF) {
    this.maxHP = maxHP;
    this.HP = HP;
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
  constructor(maxHP, HP, ATK, DF) {
    this.maxHP = maxHP;
    this.HP = maxHP;
    this.ATK = ATK;
    this.DF = DF;
  }
}

let tran = document.getElementById("transition");
let difficulty = 0;
const player = new Player(0, 0, 0, 0);
const enemy = new Enemy(0, 0, 0, 0);

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
      console.log(difficulty);
      setPlayer(difficulty);
      player.renewStats();
      setEnemy(difficulty);
      console.log(player.HP, player.ATK);
      console.log(enemy.HP, enemy.ATK);
      break;
    case "Mégsem":
      toggleDisabled("story");
      toggleDisabled("deathScreen");
      window.setTimeout(byebye, 5000);
      break;
    case "Könnyű":
      difficulty = 0;
      document.getElementById("mainBgr").classList.toggle("mainBgr");
      toggleDisabled("difMenu");
      toggleDisabled("story");
      break;
    case "Közepes":
      difficulty = 1;
      toggleDisabled("difMenu");
      toggleDisabled("story");
      break;
    case "Nehéz":
      difficulty = 2;
      toggleDisabled("difMenu");
      toggleDisabled("story");
      break;
    case "Lehetetlen":
      difficulty = 3;
      toggleDisabled("difMenu");
      toggleDisabled("story");
      break;
  }
}
function toggleDisabled(x) {
  document.getElementById(x).classList.toggle("disabled");
}
function transition() {
  tran.classList.toggle("transition11");
  tran.classList.toggle("transition12");
}
function battle() {
  clearInterval(tranInterval);
  toggleDisabled("transition");
  toggleDisabled("battContainer");
}
function byebye() {
  window.location.href = ".";
}
function setEnemy(diff) {
  switch (diff) {
    case 0: {
      enemy.maxHP = 20;
      enemy.HP = 20;
      enemy.ATK = 3;
      enemy.DF = 2;
      break;
    }
    case 1: {
      enemy.maxHP = 20;
      enemy.HP = 20;
      enemy.ATK = 4;
      enemy.DF = 2;
      break;
    }
    case 2: {
      enemy.maxHP = 20;
      enemy.HP = 20;
      enemy.ATK = 5;
      enemy.DF = 2;
      break;
    }
    case 3: {
      enemy.maxHP = 20;
      enemy.HP = 20;
      enemy.ATK = 6;
      enemy.DF = 2;
      break;
    }
  }
}
function setPlayer(diff) {
  switch (diff) {
    case 0: {
      player.maxHP = 20;
      player.HP = 20;
      player.ATK = 7;
      player.DF = 2;
      break;
    }
    case 1: {
      player.maxHP = 20;
      player.HP = 20;
      player.ATK = 6;
      player.DF = 2;
      break;
    }
    case 2: {
      player.maxHP = 20;
      player.HP = 20;
      player.ATK = 5;
      player.DF = 2;
      break;
    }
    case 3: {
      player.maxHP = 20;
      player.HP = 20;
      player.ATK = 2;
      player.DF = 2;
      break;
    }
  }
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
  switch (target.innerText) {
    case "Támadás":
      classHandler(1, player.ATK);
      classHandler(2, enemy.ATK);
      console.log(player.HP, player.ATK);
      console.log(enemy.HP, enemy.ATK);
      break;
    case "Varázslatok":
      classHandler(1, player.ATK);
      classHandler(2, enemy.ATK);
      break;
    case "Védekezés":
      classHandler(2, enemy.ATK - player.DF);
      break;
    case "Leltár":
      break;
  }
}

function classHandler(what, change) {
  /*
  name = object/class name
  change = amount of change in something 
  what: 1 = 'enemy' HP gets lowered by 'change' variable
        2 = 'player' HP gets lowered by 'change' variable
  */
  if (what == 1) {
    enemy.HP = enemy.HP - change;
    if (enemy.HP <= 0) {
      document.getElementById("battContainer").innerHTML = "Győztél!";
    }
  } else if (what == 2) {
    player.HP = player.HP - change;
    battStats.children[0].innerText = "HP: " + player.maxHP + "/" + player.HP;
    if (player.HP <= 0) {
      toggleDisabled("battContainer");
      toggleDisabled("deathScreen");
      window.setTimeout(byebye, 5000);
    }
  }
}

let battUI = document.querySelectorAll("td");
for (let k = 0; k < battUI.length; k++) {
  battUI[k].addEventListener("click", battHandler);
}
