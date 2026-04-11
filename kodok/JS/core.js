let battle = document.getElementById("battle");
let battleUI = document.getElementById("battleUI");
let mainM = document.getElementById("mainM");
let kred = document.getElementById("kred");
let playerUIStats = battleUI.children[0].children;
let randomNumber = Math.floor(Math.random() * 10);
let diffM = document.getElementById("diffM");
let transition = document.getElementById("transition");
let story = document.getElementById("story");
let deathscreen = document.getElementById("deathscreen");

let mainli = mainM.children[0].children;
for (let i = 0; i < mainli.length; i++) {
  mainli[i].addEventListener("click", menu);
}

let diffli = diffM.children[0].children;
for (let j = 0; j < diffli.length; j++) {
  diffli[j].addEventListener("click", menu);
}

let folyt = document.getElementById("folyt");
folyt.addEventListener("click", function () {
  story.classList.toggle("disabled");
  transitionBattle(1);
});
let megsem = document.getElementById("megsem");
megsem.addEventListener("click", function () {
  story.classList.toggle("disabled");
  death();
});

let kredVissza = document.getElementById("kredVissza");
kredVissza.addEventListener("click", function () {
  kred.classList.toggle("disabled");
  mainM.classList.toggle("disabled");
});

const defaultItems = [
  phpItemData[0],
  phpItemData[1],
  phpItemData[2],
  phpItemData[3],
];
const defaultSpells = [
  phpSpellsData[0],
  phpSpellsData[1],
  phpSpellsData[2],
]

function difficulty(x) {
  localStorage.setItem("difficulty", x);
  diffM.classList.toggle("disabled");
  diffM.parentNode.classList.toggle("disabled");
  story.classList.toggle("disabled");
  Player.setStats(20 - x, 1, 0);
  Enemy.setStats(20+battles*2,battles+Math.floor(Player.ATK/4),battles+Math.floor(Player.DF/4));
  Player.setItems(defaultItems);
  Player.setSpells(defaultSpells);
  Player.renewUIStats();
  Player.renewSpells();
  enemyHPRenew();
  let randomEnemy = Math.floor(Math.random()*phpEnemyIMG.length); 
  makeEnemy(randomEnemy);
}

function death() {
  deathscreen.classList.toggle("disabled");
  setTimeout(function () {
    window.location = ".";
  }, 5000);
}

function menu(event) {
  target = event.target;
  switch (target.value) {
    case 1:
      mainM.classList.toggle("disabled");
      diffM.classList.toggle("disabled");
      break;
    case 2:
      mainM.classList.toggle("disabled");
      kred.classList.toggle("disabled");
      break;
    case 3:
      alert("Ez a funkció még nem működik kérlek zárd be magad az oldalt");
      break;
    case 4:
      difficulty(1);
      break;
    case 5:
      difficulty(2);
      break;
    case 6:
      difficulty(3);
      break;
    case 7:
      difficulty(4);
      break;
    case 8:
      diffM.classList.toggle("disabled");
      mainM.classList.toggle("disabled");
      break;
    default:
      break;
  }
}
