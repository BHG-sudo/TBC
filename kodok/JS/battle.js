class entity {
  constructor(maxHP, HP, ATK, DF, Items, Spells) {
    this.maxHP = maxHP;
    this.HP = HP;
    this.ATK = ATK;
    this.DF = DF;
    this.Items = Items;
    this.Spells = Spells;
  }
  setStats(maxHP, ATK, DF) {
    this.maxHP = maxHP;
    this.HP = maxHP;
    this.ATK = ATK;
    this.DF = DF;
  }
  setItems(Items) {
    this.Items = Items;
  }
  setSpells(Spells) {
    this.Spells = Spells;
  }
  renewUIStats() {
    playerUIStats[0].innerHTML = "HP " + this.maxHP + "/" + this.HP;
    playerUIStats[1].innerHTML = "ATK " + this.ATK;
    playerUIStats[2].innerHTML = "DF " + this.DF;
  }
  renewSpells(){
    console.log(this.Spells[0]["spell_name"]);
    document.getElementById("spellOne").innerHTML = this.Spells[0]["spell_name"];
    document.getElementById("spellTwo").innerHTML = this.Spells[1]["spell_name"];
    document.getElementById("spellThree").innerHTML = this.Spells[2]["spell_name"];
  }
}
const Player = new entity(0, 0, 0, 0);
const Enemy = new entity(0, 0, 0, 0);

function transition1() {
  transition.classList.toggle("transition11");
  transition.classList.toggle("transition12");
}
function clInt1() {
  clearInterval(tranInterval1);
  transition.classList.toggle("disabled");
  battle.classList.toggle("disabled");
  if (transition.classList.contains("transition11")) {
    transition.classList.toggle("transition11");
  }
  if (transition.classList.contains("transition12")) {
    transition.classList.toggle("transition12");
  }
}
function transition2() {
  transition.classList.toggle("transition21");
  transition.classList.toggle("transition22");
}
function clInt2() {
  clearInterval(tranInterval2);
  transition.classList.toggle("disabled");
  if (transition.classList.contains("transition21")) {
    transition.classList.toggle("transition21");
  }
  if (transition.classList.contains("transition22")) {
    transition.classList.toggle("transition22");
  }
}
function enemyHPRenew() {
  document.getElementById("EnemyHP").innerHTML = Enemy.maxHP + "/" + Enemy.HP;
}
function transitionBattle(x) {
  transition.classList.toggle("disabled");
  switch (x) {
    case 1:
      transition.classList.toggle("transition11");
      tranInterval1 = setInterval(transition1, 500);
      setTimeout(clInt1, 2000);
      break;
    case 2:
      transition.classList.toggle("transition21");
      tranInterval2 = setInterval(transition2, 500);
      setTimeout(clInt2, 2000);
      break;
  }
}

// EnemySprite
let enemyIMG = document.getElementById("enemy");
function makeEnemy(number) {
  switch (number) {
    case 0:
      enemyIMG.src = phpEnemyIMG[0];
      break;
    case 1:
      enemyIMG.src = phpEnemyIMG[1];
      break;
    case 2:
      enemyIMG.src = phpEnemyIMG[2];
      break;
    case 3:
      enemyIMG.src = phpEnemyIMG[3];
      break;
    case 4:
      enemyIMG.src = phpEnemyIMG[4];
      break;
    case 5:
      enemyIMG.src = phpEnemyIMG[5];
      break;
    case 6:
      enemyIMG.src = phpEnemyIMG[6];
      break;
    case 7:
      enemyIMG.src = phpEnemyIMG[0];
      break;
    case 8:
      enemyIMG.src = phpEnemyIMG[1];
      break;
    case 9:
      enemyIMG.src = phpEnemyIMG[2];
      break;
  }
}

let defPlayer = false;
let defEnemy = false;

// EnemyAction
function enemyAction() {
  console.log("enemy köre");
  let randNum = Math.floor(Math.random() * 10);
  switch (randNum) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      console.log("Támad");
      if (defPlayer == true) {
        if (Enemy.ATK > Player.DF) {
          Player.HP = Player.HP - (Enemy.ATK - Player.DF);
          Player.renewUIStats();
          defPlayer = false;
        } else {
          defPlayer = false;
        }
      } else {
        Player.HP -= Enemy.ATK;
        Player.renewUIStats();
      }
      if (Player.HP <= 0) {
        battle.classList.toggle("disabled");
        death();
      }
      break;
    case 5:
    case 6:
      console.log("Gyógyít");
      Enemy.HP = Enemy.HP + parseInt(phpSpellsData[3]["spell_stat"]);
      if (Enemy.HP > Enemy.maxHP) {
        Enemy.HP = Enemy.maxHP;
        enemyHPRenew();
      }
      break;
    case 7:
    case 8:
    case 9:
      console.log("Védekez");
      defEnemy = true;
      break;
    default:
      console.log("Mi történik");
      break;
  }
  console.log("Player HP: " + Player.HP + "\nEnemy HP: " + Enemy.HP);
}

// PLayerDefend
let defend = document.getElementById("defend");
defend.addEventListener("click", defendPlayer);
function defendPlayer() {
  defPlayer = true;
  enemyAction();
}
/*
// KÉSÖBB!!!
// Ha védekezel meg kell csináljál egy minigame-et 
*/

// PlayerInventory
let inventoryLength;
function createInventory(){
  inventoryLength = 0
  for (let i = 0; i < Player.Items.length; i++) {
    let para = document.createElement("p");
    para.classList.toggle("disabled");
    para.id = "item"+i;
    para.classList.toggle(Player.Items[i]["id"]);
    para.innerText = Player.Items[i]["item_name"];
    para.addEventListener("click", inventoryM);
    battleUI.appendChild(para);
    inventoryLength++;  
  }
  let vissza = document.createElement("p");
  vissza.innerText = "Vissza";
  vissza.classList.toggle("disabled")
  vissza.id = "visszaI";
  vissza.addEventListener("click", function(){
    document.getElementById("attack").classList.toggle("disabled");
    document.getElementById("spell").classList.toggle("disabled");
    document.getElementById("defend").classList.toggle("disabled");
    document.getElementById("inventory").classList.toggle("disabled");
    document.getElementById("visszaI").classList.toggle("disabled");
    for (let i = 0; i < inventoryLength; i++) {
      if(!(document.getElementById("item"+i).classList.contains("used"))){
        document.getElementById("item"+i).classList.toggle("disabled");
      }
    }
  });
  battleUI.appendChild(vissza);
}

function toggleInventoryON(){
  createInventory()
  document.getElementById("attack").classList.toggle("disabled");
  document.getElementById("spell").classList.toggle("disabled");
  document.getElementById("defend").classList.toggle("disabled");
  document.getElementById("inventory").classList.toggle("disabled");
  document.getElementById("visszaI").classList.toggle("disabled");
  for (let i = 0; i < inventoryLength; i++) {
      if(!(document.getElementById("item"+i).classList.contains("used"))){
        document.getElementById("item"+i).classList.toggle("disabled");
      }
    }
}
let inventory = document.getElementById("inventory");
inventory.addEventListener("click", toggleInventoryON);
function inventoryM(event) {
  target = event.target;
  if(target.classList.contains(1)){
    Player.setStats(Player.maxHP, Player.ATK+parseInt(Player.Items[(target.classList[0]-1)]["item_bonus"]), Player.DF);
    target.classList.toggle("disabled");
    target.classList.toggle("used");
  }
  if(target.classList.contains(2) || target.classList.contains(3) || target.classList.contains(4)){
    Player.setStats(Player.maxHP, Player.ATK, Player.DF+parseInt(Player.Items[(target.classList[0]-1)]["item_bonus"]));
    target.classList.toggle("disabled");
    target.classList.toggle("used");
  }
  Player.renewUIStats();
}

// PlayerAttack
let attack = document.getElementById("attack");
attack.addEventListener("click", attackPlayer);
function attackPlayer() {
  if (Enemy.HP <= 0) {
    battle.classList.toggle("disabled");
    transitionBattle(2);
  } else {
    if (defEnemy == true) {
      if (Player.ATK > Enemy.DF) {
        Enemy.HP = Enemy.HP - (Player.ATK - Enemy.DF);
        enemyHPRenew();
        defEnemy = false;
      }else{
        defEnemy = false;
      }
    } else {
      Enemy.HP -= Player.ATK;
      enemyHPRenew();
    }
    if (Enemy.HP <= 0) {
      battle.classList.toggle("disabled");
      transitionBattle(2);
    } else {
      enemyAction();
    }
  }
}

// PLayerSpell
let spell = document.getElementById("spell");
let vissza = document.getElementById("vissza");
spell.addEventListener("click", toggleSpells);
vissza.addEventListener("click", toggleSpells);
function toggleSpells(){
  document.getElementById("attack").classList.toggle("disabled");
  document.getElementById("spell").classList.toggle("disabled");
  document.getElementById("defend").classList.toggle("disabled");
  document.getElementById("inventory").classList.toggle("disabled");
  document.getElementById("spellOne").classList.toggle("disabled");
  document.getElementById("spellTwo").classList.toggle("disabled");
  document.getElementById("spellThree").classList.toggle("disabled");
  document.getElementById("vissza").classList.toggle("disabled");
}
let spellOne = document.getElementById("spellOne");
spellOne.addEventListener("click", spellAttack);
let spellTwo = document.getElementById("spellTwo");
spellTwo.addEventListener("click", spellAttack);
let spellThree = document.getElementById("spellThree");
spellThree.addEventListener("click", spellAttack);
function spellAttack(event){
  let target = event.target;
  if (target.id == "spellOne"){
      Enemy.HP -= Player.Spells[0]["spell_stat"];
      enemyHPRenew();
      if (Enemy.HP <= 0) {
      battle.classList.toggle("disabled");
      transitionBattle(2);
    }
  }
  if (target.id == "spellTwo"){
      Enemy.HP -= Player.Spells[1]["spell_stat"];
      enemyHPRenew();
      if (Enemy.HP <= 0) {
      battle.classList.toggle("disabled");
      transitionBattle(2);
    }
  }
  if (target.id == "spellThree"){
      Enemy.HP -= Player.Spells[2]["spell_stat"];
      enemyHPRenew();
      if (Enemy.HP <= 0) {
      battle.classList.toggle("disabled");
      transitionBattle(2);
    }
  }
}