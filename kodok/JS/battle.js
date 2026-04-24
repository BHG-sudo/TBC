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
  renewSpells() {
    document.getElementById("spellOne").innerHTML =
      this.Spells[0]["spell_name"];
    document.getElementById("spellTwo").innerHTML =
      this.Spells[1]["spell_name"];
    document.getElementById("spellThree").innerHTML =
      this.Spells[2]["spell_name"];
  }
}
const Player = new entity(0, 0, 0, 0);
const Enemy = new entity(0, 0, 0, 0);

let freezeClick = false;

document.addEventListener(
  "click",
  (e) => {
    if (freezeClick) {
      e.stopPropagation();
      e.preventDefault();
    }
  },
  true
);

document.getElementById("csata").addEventListener("click", function () {
  lada.classList.toggle("disabled");
  battle.classList.toggle("disabled");
  let randomEnemy = Math.floor(Math.random() * phpEnemyIMG.length);
  makeEnemy(randomEnemy);
});
lada = document.getElementById("lada");
function transition1() {
  transition.classList.toggle("transition11");
  transition.classList.toggle("transition12");
}
let fisrt = 0;
function clInt1() {
  clearInterval(tranInterval1);
  transition.classList.toggle("disabled");
  if (fisrt == 0) {
    lada.classList.toggle("disabled");
    fisrt++;
  } else {
    battle.classList.toggle("disabled");
  }
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
  battle.classList.toggle("disabled");
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
  enemyIMG.src = phpEnemyIMG[number];
  if (number == 2) {
    audio.src = "../../Assets/zenek/hexen_fight.mp3";
    audio.volume = 0.2;
    console.log("HEXEN "+number);
  } else {
    audio.src = "../../Assets/zenek/fight.mp3";
    audio.volume = 0.2;
    console.log("NORMAL "+number);
  }
  audio.load();
  audio.play();
}
function makeBoss(number) {
  enemyIMG.src = phpBossIMG[number];
  audio.src = "../../Assets/zenek/boss_fight.mp3";
  audio.volume = 0.2;
  audio.load();
  audio.play();
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
          enemyAnim();
          defPlayer = false;
        } else {
          defPlayer = false;
        }
      } else {
        Player.HP -= Enemy.ATK;
        enemyAnim();
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
let exist = false;
function createInventory() {
  inventoryLength = 0;
  for (let i = 0; i < Player.Items.length; i++) {
    let para = document.createElement("p");
    para.id = "item" + i;
    para.classList.toggle(Player.Items[i]["item_type"]);
    para.innerText = Player.Items[i]["item_name"];
    para.addEventListener("click", inventoryM);
    battleUI.appendChild(para);
    inventoryLength++;
  }
  let vissza = document.createElement("p");
  vissza.innerText = "Vissza";
  vissza.classList.toggle("disabled");
  vissza.id = "visszaI";
  vissza.addEventListener("click", function () {
    document.getElementById("attack").classList.toggle("disabled");
    document.getElementById("spell").classList.toggle("disabled");
    document.getElementById("defend").classList.toggle("disabled");
    document.getElementById("inventory").classList.toggle("disabled");
    document.getElementById("visszaI").classList.toggle("disabled");
    itemDeleter();

    for (let i = 0; i < inventoryLength + 1; i++) {
      battleUI.removeChild(battleUI.lastElementChild);
    }
  });
  battleUI.appendChild(vissza);
}

function toggleInventoryON() {
  createInventory();
  document.getElementById("attack").classList.toggle("disabled");
  document.getElementById("spell").classList.toggle("disabled");
  document.getElementById("defend").classList.toggle("disabled");
  document.getElementById("inventory").classList.toggle("disabled");
  document.getElementById("visszaI").classList.toggle("disabled");
}
let inventory = document.getElementById("inventory");
inventory.addEventListener("click", toggleInventoryON);
function inventoryM(event) {
  console.log(Player.Items);
  target = event.target;
  console.log(target.innerText);
  if (target.classList.contains(1)) {
    Player.setStats(
      Player.maxHP,
      Player.ATK + parseInt(itemStat(target.innerText)),
      Player.DF
    );
    target.classList.toggle("disabled");
    target.classList.toggle("used");
  }
  if (
    target.classList.contains(2) ||
    target.classList.contains(3) ||
    target.classList.contains(4)
  ) {
    Player.setStats(
      Player.maxHP,
      Player.ATK,
      Player.DF + parseInt(itemStat(target.innerText))
    );
    target.classList.toggle("disabled");
    target.classList.toggle("used");
  }
  Player.renewUIStats();
}
function itemDeleter() {
  let indexs = [];
  let used = document.getElementsByClassName("used");
  let usedItems = [];
  for (let i = 0; i < used.length; i++) {
    usedItems.push(used[i].innerText);
  }
  if (usedItems.length === Player.Items.length) {
    Player.Items.splice(0, Player.Items.length);
  } else if (usedItems.length < Player.Items.length) {
    for (let i = 0; i < usedItems.length; i++) {
      for (let j = 0; j < Player.Items.length; j++) {
        if (usedItems[i] === Player.Items[j]["item_name"]) {
          indexs.push(j);
        }
      }
    }
    indexs
      .sort((a, b) => b - a)
      .forEach((idx) => {
        if (idx >= 0 && idx < Player.Items.length) {
          Player.Items.splice(idx, 1);
        }
      });
  }
  console.log(Player.Items);
}
function itemStat(x) {
  for (let i = 0; i < Player.Items.length; i++) {
    if (Player.Items[i]["item_name"] == x) {
      return Player.Items[i]["item_bonus"];
    }
  }
}

// PlayerAttack
let attack = document.getElementById("attack");
attack.addEventListener("click", attackPlayer);
function attackPlayer() {
  if (Enemy.HP <= 0) {
    freezeClick = true;
    victoryDance();
    setTimeout(Victory, 3000);
  } else {
    if (defEnemy == true) {
      if (Player.ATK > Enemy.DF) {
        Enemy.HP = Enemy.HP - (Player.ATK - Enemy.DF);
        playerAnim();
        defEnemy = false;
      } else {
        defEnemy = false;
      }
    } else {
      Enemy.HP -= Player.ATK;
      playerAnim();
    }
    if (Enemy.HP <= 0) {
      freezeClick = true;
      setTimeout(victoryDance, 500);
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
function toggleSpells() {
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
function spellAttack(event) {
  let target = event.target;
  if (target.id == "spellOne") {
    Enemy.HP -= Player.Spells[0]["spell_stat"];
    playerAnim();
  }
  if (target.id == "spellTwo") {
    Enemy.HP -= Player.Spells[1]["spell_stat"];
    playerAnim();
  }
  if (target.id == "spellThree") {
    Enemy.HP -= Player.Spells[2]["spell_stat"];
    playerAnim();
  }
  if (Enemy.HP <= 0) {
    freezeClick = true;
    setTimeout(victoryDance, 500);
  } else {
    enemyAction();
  }
}
let lootedItems = [];
let victoryScreen = document.getElementById("victory");
async function Victory() {
  freezeClick = false;
  console.clear();
  battles++;
  let randNum = Math.floor(Math.random() * 10);
  let loot = document.getElementById("loot");
  loot.innerText = "Zsákmány:";
  battle.classList.toggle("disabled");
  victoryScreen.classList.toggle("disabled");
  if (randNum < 5) {
    victoryScreen.style.backgroundImage = "url('../../Assets/Room/szoba.png')";
  } else if (randNum >= 5) {
    victoryScreen.style.backgroundImage =
      "url('../../Assets/Room/sotetszoba.png')";
  }

  if (
    localStorage.getItem("difficulty") == 1 ||
    localStorage.getItem("difficulty") == 2
  ) {
    for (let i = 0; i < 2; i++) {
      let randomLoot = Math.floor(Math.random() * (phpItemData.length - 1));
      console.log(randomLoot);
      console.log(phpItemData[randomLoot]);
      if (lootedItems.includes(randomLoot)) {
        loot.innerText += " semmi ";
      } else {
        loot.innerText += " " + phpItemData[randomLoot]["item_name"] + "  ";
        Player.Items.push(phpItemData[randomLoot]);
        lootedItems.push(randomLoot);
      }
    }
  } else if (
    localStorage.getItem("difficulty") == 3 ||
    localStorage.getItem("difficulty") == 4
  ) {
    let randomLoot = Math.floor(Math.random() * (phpItemData.length - 1));
    if (lootedItems.includes(randomLoot)) {
      loot.innerText += " semmi ";
    } else {
      loot.innerText += " " + phpItemData[randomLoot]["item_name"];
      Player.Items.push(phpItemData[randomLoot]);
      lootedItems.push(randomLoot);
    }
  }
  console.log(Player.Items);
  let toBattle = document.createElement("p");
  toBattle.innerText = "Csatába!";
  toBattle.id = "toBattle";
  toBattle.addEventListener("click", continueToBattle);
  victoryScreen.appendChild(toBattle);
}
let tower = 0;
let battles = 0;
function continueToBattle() {
  console.log(battles);
  if (battles < 5) {
    Player.HP = Player.maxHP;
    Enemy.setStats(
      20 + battles * 2,
      battles + Math.floor(Player.ATK / 2),
      battles + Math.floor(Player.DF / 2)
    );
    let randomEnemy = Math.floor(Math.random() * phpEnemyIMG.length);
    makeEnemy(randomEnemy);
    enemyHPRenew();
    Player.renewUIStats();
    victoryScreen.classList.toggle("disabled");
    transitionBattle(1);
  } else if (battles >= 5 && battles <= 9) {
    Player.HP = Player.maxHP;
    Enemy.setStats(20 + battles * 2, battles + Player.ATK, battles + Player.DF);
    let randomEnemy = Math.floor(Math.random() * phpEnemyIMG.length);
    makeEnemy(randomEnemy);
    enemyHPRenew();
    Player.renewUIStats();
    victoryScreen.classList.toggle("disabled");
    transitionBattle(2);
  } else if (battles === 10) {
    Player.HP = Player.maxHP;
    Enemy.setStats(
      100 + battles * 2,
      battles + Math.floor(Player.ATK / 3),
      battles + Math.floor(Player.DF / 3)
    );
    makeBoss(tower);
    enemyHPRenew();
    Player.renewUIStats();
    victoryScreen.classList.toggle("disabled");
    transitionBattle(2);
  }
}
function damage(who) {
  const element = document.getElementById(who);
  const anim = element.animate(
    [
      { offset: 0, transform: "translateY(0)" },
      { offset: 1, transform: "translateY(-40px)" },
    ],
    {
      duration: 50,
      easing: "ease-in-out",
      direction: "alternate",
      iterations: 2,
    }
  );
}
function victoryDance() {
  const element = document.getElementById("player");
  const anim = element.animate(
    [
      { offset: 0, transform: "translateY(0)" },
      { offset: 0.2, transform: "translateY(-40px)" },
      { offset: 0.4, transform: "translateY(0)" },
      { offset: 0.6, transform: "translateY(0)" },
      { offset: 0.8, transform: "translateY(-40px)" },
      { offset: 1, transform: "translateY(0)" },
    ],
    {
      duration: 1500,
      easing: "ease-in-out",
      direction: "alternate",
      iterations: 2,
    }
  );
  setTimeout(Victory, 3000);
}
function playerAnim() {
  const element = document.getElementById("player");
  const anim = element.animate(
    [
      { offset: 0, transform: "translateX(0) translateY(0)" },
      { offset: 0.5, transform: "translateX(300px) translateY(-60px)" },
      { offset: 1, transform: "translateX(500px) translateY(-180px)" },
    ],
    {
      duration: 280,
      easing: "ease-in-out",
      direction: "alternate",
      iterations: 1,
    }
  );
  setTimeout(function () {
    const element = document.getElementById("enemy");
    const anim = element.animate(
      [
        { offset: 0, transform: "translateY(0)" },
        { offset: 1, transform: "translateY(-40px)" },
      ],
      {
        duration: 50,
        easing: "ease-in-out",
        direction: "alternate",
        iterations: 2,
      }
    );
    enemyHPRenew();
  }, 300);
}
function enemyAnim() {
  const element = document.getElementById("enemy");
  const anim = element.animate(
    [
      { offset: 0, transform: "translateX(0) translateY(0)" },
      { offset: 0.5, transform: "translateX(-300px) translateY(60px)" },
      { offset: 1, transform: "translateX(-500px) translateY(180px)" },
    ],
    {
      duration: 280,
      easing: "ease-in-out",
      direction: "alternate",
      iterations: 1,
    }
  );
  setTimeout(function () {
    const element = document.getElementById("player");
    const anim = element.animate(
      [
        { offset: 0, transform: "translateY(0)" },
        { offset: 1, transform: "translateY(-40px)" },
      ],
      {
        duration: 50,
        easing: "ease-in-out",
        direction: "alternate",
        iterations: 2,
      }
    );

    Player.renewUIStats();
  }, 300);
}
