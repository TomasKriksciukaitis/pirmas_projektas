console.log("Labas");

// 1 UZDUOTIS
// sukurti 2 kintamuosius "vardas" lygius skirtingoms reiksmemes: "tomas" ir "Jurgis"
// f-jos printName() viduje pabandyti abu atspausdinti i KONSOLE

var vardas = "Tomas";
function printName() {
  var vardas2 = "Jurgis"
  console.log(vardas);
  console.log(vardas2);
}
printName();

// 2 UZDUOTIS
// parasyti f-ja "getPelnas(pajamos, mokesciai, mokesciai2)", kuri:
// pelna is parduotu pajamu atimdama mokescius ir po to atimdama mokescius2
// pajamos 1500, mokesciai 2.5%, mokesciai2 1.5%

function getPelnas(pajamos, mokesciai, mokesciai2) {
  var pelnas = 0;
  var pajamos = 1500;
  var mokesciai = (pajamos * mokesciai)/100;
  var mokesciai2 = (pajamos * mokesciai2)/100;
  pelnas = pajamos - mokesciai - mokesciai2
  console.log("musu pelnas butu - ", pelnas);
}
getPelnas(1500, 2.5, 1.5);

// kita formule su RETURN funkcija:

function getPelnas(pajamos, mokesciai3, mokesciai4) {
  var pelnas = 0;
  var pajamos = 3000;
  var mokesciai = (pajamos * mokesciai3)/100;
  var mokesciai2 = (pajamos * mokesciai4)/100;
  pelnas = pajamos - mokesciai3 - mokesciai4
  return pelnas;
}
var x = getPelnas(3000, 20, 1.5);
console.log("pelnas su RETURN funkcija yra - ", x);

// IF TRUMPESNIS BUDAS:
// (salyga) ? jei TRUE : jei FALSE;
// (salyga)? printVardas() : printError();

var x = 10;
(x==10) ? console.log("ivestas tinkamas skaicius") : console.log("blogas skaicius");

// ===== SCOPE =================================================================
// 1 UZDUOTIS
// sukurti f-ja "printDuomenys()"
// f-joje sukurti kintamaji: var vardas = "Tomas"
// kuri atspausdina i konsole kintamaji "vardas"
// iskviesti funkcija

var f = 5; // global reiksme
function printPvarde() {
  var pavarde = "Tomasius"; // local reiksme
  console.log("F: ", f); // print 5
  console.log("Pavarde: ", pavarde); // print "Tomasius"
  indai = "5 puodai"; // !!! jeigu be zodelio "var" tai sis kintamasis yra globalus
}
console.log(pavarde); //print Error: udefined variable pavarde




// ===== TEKSTO ISVEDIMAS ===================================

// 1.1 UZDUOTIS
// sukurti f-ja printAntraste(x),
// kuri atspausdina i DOM-a (ekrana) "x" reiksme
// iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas antrastes: "BMW pinga, nes daugeja",
// "Greit pageres orai", "Vasaros vis salteja"



// 1.2 UZDUOTIS
// sukurti f-ja printStraipsnis(x),
// kuri atspausdina i DOM-a (ekrana) reiksmemes

// 1.3 UZDUOTIS
// iskviesti f-ja 3 kartus, kad atspausdintu 3 skirtingas antrastes IR 3 straipsnius:
// "Lorem1.....", "Lorem2....", "Lorem3...."


// ============================================================
