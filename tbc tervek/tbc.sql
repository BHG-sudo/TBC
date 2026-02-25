-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Feb 25. 12:06
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
  `name` varchar(100) NOT NULL,
  `item_type` int(10) NOT NULL,
  `bonus` int(100) NOT NULL,
  `description` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `items`
--

INSERT INTO `items` (`id`, `name`, `item_type`, `bonus`, `description`) VALUES
(1, 'kard', 1, 2, 'Ez egy kard, biztos láttál már ilyet'),
(2, 'bőr mellvért', 3, 1, 'Lehetne jobb is'),
(3, 'kézi fejsze', 1, 1, 'Ennél nem lesz rosszabb'),
(4, 'bőr nadrág', 4, 1, 'Nem vagy te egy rocker'),
(5, 'kucsma', 2, 1, 'Stílusos!'),
(6, 'íj', 1, 2, 'Te nem tudsz hátrafele nyilazni'),
(7, 'lánc mellvért', 3, 2, 'Olyan láncos'),
(8, 'pajzs egy tüskével az elejében', 1, 2, 'Szúros'),
(9, 'lánc nadrág', 4, 2, 'Hát ez is egészen láncos'),
(10, 'harci balta', 1, 3, 'Alig bírod el'),
(11, 'fém sisak', 2, 2, 'Nem nagyon ütés álló'),
(12, 'vívótör', 1, 4, 'Nagyon urias fegyver, nem illik hozzád'),
(13, 'vas sisak', 2, 2, 'Nagy a súlya és gyorsan bele melegszel'),
(14, 'vas mellvért', 3, 3, 'Nem ergonómikus és nehéz'),
(15, 'vas nadrág', 4, 2, 'Bizonyos dolgokat az illesztésen könnyen becsíp'),
(16, 'long sword', 1, 4, 'Fun fact: akármennyire is a középkort ezzel a fegyverrel azonosítják a harcok során nem használták nehéz kezelhetősége miatt'),
(17, 'dobókés', 1, 3, 'Nem tudsz serintem nagyon jól dobni'),
(18, 'shuriken', 1, 3, 'Olyan mint a dobókés csak nagyon SUGOI mert にほん'),
(19, 'nyílpuska', 1, 3, 'Elég rossz'),
(20, 'lándzsa', 1, 3, 'Hoszzú'),
(21, 'ólom sisak', 2, 3, 'Megvéd a sugárzástól'),
(22, 'ólom mellvért', 3, 4, 'Vékony lap van rád kötve'),
(23, 'ólom nadrág', 4, 3, 'Nem leszel steril egy adag U-238-tól'),
(24, 'great sword', 1, 4, 'Olyan mint a LONG SWORD csak másmilyen'),
(25, 'katana', 1, 4, 'Sokkal SUGOI-abb mint egy kard'),
(26, 'kiélezet ásó', 1, 4, 'Egy indító rendszerrel még hatékonyabb'),
(27, 'kasza', 1, 4, 'Nagyon távolra elér'),
(28, 'korbács', 1, 4, 'Tudom hogy élveznéd'),
(29, 'volfrám sisak', 2, 4, 'Miért vennéd ezt fel?'),
(30, 'volfrám mellvért', 3, 5, 'Miért kínzod magad ekkora súllyal?'),
(31, 'volfrám nadrág', 4, 4, 'Meg vagy őrülve ezen a ponton'),
(32, 'Glock-19 9mm mauser', 1, 5, 'Klafa osztrák fegyver'),
(33, 'Beretta-93', 1, 5, 'Klafa olasz fegyver'),
(34, 'Colt 1911', 1, 5, '2. alkotmányi jogod a szabad fegyver tartás'),
(35, 'H&K USP', 1, 5, 'Klafa német fegyver'),
(36, 'PZ-9', 1, 5, 'Klafa cseh fegyver'),
(37, 'arany sisak', 2, 5, 'Nagyon csillog'),
(38, 'arany mellvért', 3, 6, 'Kivagy pimp-elve'),
(39, 'arany nadrág', 1, 5, 'Felhívja a figyelmet'),
(40, 'robbanószer', 1, 6, 'Kinda robban'),
(41, 'kalapács,szög,sörétes lőszer', 1, 6, 'Veszélyes az ellenségre és rád is');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT a táblához `spells`
--
ALTER TABLE `spells`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
