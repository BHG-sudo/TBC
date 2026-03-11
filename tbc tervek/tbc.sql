-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Már 11. 11:11
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `tbc`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `item_type` int(11) NOT NULL,
  `item_name` varchar(1000) NOT NULL,
  `item_bonus` int(11) NOT NULL,
  `item_desc` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `items`
--

INSERT INTO `items` (`id`, `item_type`, `item_name`, `item_bonus`, `item_desc`) VALUES
(1, 1, 'tőr', 2, 'Ez egy kard, biztos láttál már ilyet'),
(2, 2, 'bőr sisak', 1, 'Lehetne jobb is'),
(3, 3, 'bőr mellvért', 2, 'Hasított bőrből van'),
(4, 4, 'bőr nadrág', 1, 'Szoros mindenhol'),
(5, 1, 'harci fejsze', 3, 'Közelre jó és nagyon nehéz'),
(6, 1, 'kovás pisztoly', 4, 'Nagyon ponttatlan'),
(7, 1, 'vivó szablya', 4, 'Nagyon urias'),
(8, 2, 'lánc sisak', 2, 'Vágás ellen egészen jó'),
(9, 3, 'lánc mellvért', 3, 'Nagyon ergonómikus'),
(10, 4, 'lánc nadrág', 2, 'Kényelmetlen'),
(11, 1, 'muskéta', 5, 'Nagyon hosszú és nehéz'),
(12, 1, 'nyílpuska', 3, 'Nem ergonómilus'),
(13, 2, 'acél sisak', 3, 'Nagyon nehéz'),
(14, 3, 'acél mellvért', 4, 'Kényelmetlen'),
(15, 4, 'acél nadrág', 3, 'Nagyon nagyon kényelmetlen'),
(16, 1, 'sárkány gyilkos', 6, 'Hatalmas nagy, egybe acél kard'),
(17, 1, 'muramasa', 6, 'Minden gazdájának lelkét magában hordozza'),
(18, 2, 'adamantin sisak', 4, 'Nagyon erős anyagból van'),
(19, 3, 'adamantin mellvért', 5, 'Vér vörös színe van és egyenetlen felülete'),
(20, 4, 'adamantin nadrág', 4, 'Nagyon kevés levegőt engedbe ezért könnyű benne túlmelegedni'),
(21, 2, 'platina sisak', 5, 'Ki van fényesítve'),
(22, 3, 'platina mellvért', 6, 'Felülete majdnem teljesen fehér'),
(23, 4, 'platina nadrág', 5, 'Minden fontos részt megvéd odalent'),
(24, 1, 'debug bot', 9999, 'FAAAAAAAAAAHHH');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `spells`
--

CREATE TABLE `spells` (
  `id` int(11) NOT NULL,
  `spell_type` int(10) NOT NULL,
  `spell_name` varchar(1000) NOT NULL,
  `spell_stat` int(255) NOT NULL,
  `spell_description` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `spells`
--

INSERT INTO `spells` (`id`, `spell_type`, `spell_name`, `spell_stat`, `spell_description`) VALUES
(1, 1, 'eldritch blast', 2, 'Sötét energiák összegyűjtve egy gyenge lövésbe'),
(2, 1, 'elektromos sokk', 2, 'Ha megérintesz valakit egy pillanatra 450V csapja meg'),
(3, 1, 'tűzgolyó', 3, '10 lábon belül mindent lángba borít'),
(4, 2, 'alap gyógyítás', 2, 'Nagyon kicsi sebeket képes csak ellátni'),
(5, 1, 'jeges csapás', 3, 'Egy bizonyos idő után a varázslat használója is fagyási sérülést szenved'),
(6, 1, 'savas köpet', 4, 'A gyomrodban generálódik és végig marja a nyelőcsöved'),
(7, 2, 'közepes gyógyítás', 4, 'Nagyobb sebeket is begyógyít'),
(8, 1, 'energia lövedék', 5, 'Egyszerű kinetikus energiát sűrít egy lövésbe'),
(9, 1, 'isteni csapás', 5, 'Az ég megnyílik és lecsap a bűnösre'),
(10, 2, 'gyógyítás', 5, 'Minden sebet meggyógyít'),
(11, 1, 'fekete fal', 6, 'Az ellenség agyában egy fekete fal jelenik meg ami lassan ketté vágja az elméjét és fizikai testét'),
(12, 1, 'debug', 9999, 'Nem kellene ezt birtokolnod');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `spells`
--
ALTER TABLE `spells`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT a táblához `spells`
--
ALTER TABLE `spells`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
