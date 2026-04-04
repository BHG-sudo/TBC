<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tbc";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM items";
$result = mysqli_query($conn, $sql);
$items = [];
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $items[] = $row;
    }
}

$sql = "SELECT * FROM spells";
$result = mysqli_query($conn, $sql);
$spells = [];
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $spells[] = $row;
    }
}
chdir("../../Assets/Enemy/");
$enemy = [];
$mappa = opendir(".");
while (($fajl = readdir($mappa)) != false) {
    if ($fajl != "." and $fajl != "..") {
        $enemy[] = "../../Assets/Enemy/" . $fajl;
    }
}
closedir($mappa);

chdir("../../Assets/Transition/");
$transition = [];
$mappa = opendir(".");
while (($fajl = readdir($mappa)) != false) {
    if ($fajl != "." and $fajl != "..") {
        $transition[] = "../../Assets/Transition/" . $fajl;
    }
}
closedir($mappa);

chdir("../../Assets/Room/");
$room = [];
$mappa = opendir(".");
while (($fajl = readdir($mappa)) != false) {
    if ($fajl != "." and $fajl != "..") {
        $room[] = "../../Assets/Room/" . $fajl;
    }
}
closedir($mappa);

chdir("../../Assets/Boss/");
$boss = [];
$mappa = opendir(".");
while (($fajl = readdir($mappa)) != false) {
    if ($fajl != "." and $fajl != "..") {
        $boss[] = "../../Assets/Boss/" . $fajl;
    }
}
closedir($mappa);
?>


<script>
    const phpItemData = <?php echo json_encode($items); ?>;
    const phpSpellsData = <?php echo json_encode($spells); ?>;
    const phpEnemyIMG = <?php echo json_encode($enemy); ?>;
    const phpTransIMG = <?php echo json_encode($transition); ?>;
    const phpRoomIMG = <?php echo json_encode($room); ?>;
    const phpBossIMG = <?php echo json_encode($boss); ?>;
    console.log();
</script>
<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/style.css">
    <title>TBC</title>
</head>

<body>
    <header>
        <h1>TBC</h1>
        <h3>Turn-Based-Combat</h3>
    </header>
    <main>
        <div id="menu" class="menu ">
            <div id="mainM" class="mainM">
                <ul>
                    <li value="1">Játék</li>
                    <li value="2">Kreditek</li>
                    <li value="3">Kilépés</li>
                </ul>
            </div>
            <div id="kred" class="kred disabled">
                <h3>Weboldalt készítette: BHG</h3>
                <h3>Rajzokat készítette: BF</h3>
                <p id="kredVissza">Vissza</p>
            </div>
            <div id="diffM" class="diffM disabled">
                <ul>
                    <li value="4">Könnyű</li>
                    <li value="5">Közepes</li>
                    <li value="6">Nehéz</li>
                    <li value="7">Lehetetlen</li>
                    <li style="margin-top: 30px;" value="8">Vissza</li>
                </ul>
            </div>
        </div>
        <div id="story" class="story disabled">
            <img src="../../Assets/story.png" alt="Story">
            <ul>
                <li id="folyt">Folytatás</li>
                <li id="megsem">Mégsem</li>
            </ul>
        </div>
        <div id="transition" class="transition disabled"></div>
        <div id="deathscreen" class="deathscreen disabled"></div>
        <div id="battle" class="battle disabled">
            <div id="EnemyContainer" class="EnemyContainer">
                <p id="EnemyHP" class="EnemyHP"></p>
                <img alt="Enemy" id="enemy" class="enemy">
            </div>
            <img src="../../Assets/karakter.png" alt="Player" id="player" class="player">
            <div id="battleUI" class="battleUI">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <p id="attack">Támadás</p>
                <p id="spell">Varázslat</p>
                <p id="defend">Védekezés</p>
                <p id="inventory">Leltár</p>
                <p id="spellOne" class="disabled"></p>
                <p id="spellTwo" class="disabled"></p>
                <p id="spellThree" class="disabled"></p>
                <p id="vissza" class="disabled">vissza</p>
            </div>
        </div>
    </main>
    <script src="../JS/core.js"></script>
    <script src="../JS/battle.js"></script>
</body>

</html>