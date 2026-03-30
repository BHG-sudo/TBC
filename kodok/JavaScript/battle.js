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
}
const Player = new entity(0, 0, 0, 0);
const Enemy = new entity(0, 0, 0, 0);

console.log(phpItemData[0]["item_bonus"]);
function transition1() {
  transition.classList.toggle("transition11");
  transition.classList.toggle("transition12");
}
function clInt1() {
  clearInterval(tranInterval1);
  transition.classList.toggle("disabled");
  battle.classList.toggle("disabled");
}
function transition2() {
  transition.classList.toggle("transition21");
  transition.classList.toggle("transition22");
}
function clInt2() {
  clearInterval(tranInterval2);
  transition.classList.toggle("disabled");
  battle.classList.toggle("disabled");
}

function transitionBattle(x) {
  transition.classList.toggle("disabled");
  switch (x) {
    case 1:
      tranInterval1 = setInterval(transition1, 500);
      setTimeout(clInt1, 2000);
      break;
    case 2:
      tranInterval2 = setInterval(transition2, 500);
      setTimeout(clInt2, 2000);
      break;
  }
}

let enemyIMG = document.getElementById("enemy");
function makeEnemy(number) {
  switch (number) {
    case 0:
      enemyIMG.src = phpEnemyIMG[2];
      break;
    case 1:
      enemyIMG.src = phpEnemyIMG[3];
      break;
    case 2:
      enemyIMG.src = phpEnemyIMG[4];
      break;
    case 3:
      enemyIMG.src = phpEnemyIMG[5];
      break;
    case 4:
      enemyIMG.src = phpEnemyIMG[6];
      break;
    case 5:
      enemyIMG.src = phpEnemyIMG[7];
      break;
    case 6:
      enemyIMG.src = phpEnemyIMG[2];
      break;
    case 7:
      enemyIMG.src = phpEnemyIMG[3];
      break;
    case 8:
      enemyIMG.src = phpEnemyIMG[4];
      break;
    case 9:
      enemyIMG.src = phpEnemyIMG[5];
      break;
  }
}

let defPlayer = false;
let defEnemy = false;

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
        deathscreen.classList.toggle("disabled");
      }
      break;
    case 5:
    case 6:
      console.log("Gyógyít");
      Enemy.HP = Enemy.HP + parseInt(phpSpellsData[3]["spell_stat"]);
      if (Enemy.HP > Enemy.maxHP) {
        Enemy.HP = Enemy.maxHP;
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

let defend = document.getElementById("defend");
defend.addEventListener("click", defendPlayer);
function defendPlayer() {
  defPlayer = true;
  enemyAction();
}
/*
// kevesebb sebzést kapsz plusz matathatsz a leltárodban

// KÉSÖBB!!!
// Ha védekezel meg kell csináljál egy minigame-et 

let inventory = document.getElementById("inventory");
inventory.addEventListener("click", inventory);

// alabból vannak tárgyak a leltárodba és azokat használhatod

*/
let attack = document.getElementById("attack");
attack.addEventListener("click", attackPlayer);
function attackPlayer() {
  if (Enemy.HP <= 0) {
    console.log("Victory");
    battle.classList.toggle("disabled");
  } else {
    if (defEnemy == true) {
      if (Player.ATK > Enemy.DF) {
        Enemy.HP = Enemy.HP - (Player.ATK - Enemy.DF);
      }
    } else {
      Enemy.HP -= Player.ATK;
    }
    if (Enemy.HP <= 0) {
      console.log("Victory");
      battle.classList.toggle("disabled");
    } else {
      enemyAction();
    }
  }
}
/*
let spell = document.getElementById("spell");
spell.addEventListener("click", spellPlayer);

// Kell egy alap spell és azt lehessen kiválasztani (deltarune)
*/
