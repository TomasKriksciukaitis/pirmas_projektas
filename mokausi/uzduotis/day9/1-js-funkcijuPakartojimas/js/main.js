console.log("Labas");

// ===== if TEORIJA ===============================
// if (salyga) {
// ....... ---> jei TRUE
// ....... vykdom
// else
// ....... ---> jei FALSE
// }


// if (salyga) {
  // ...... jei salyga tenkinama
// }


// if (salyga) {
  // ..... jei salyga tenkinama
// } else {
  // ..... jei salyga netenkinama / priesingu atveju
// }


// if (salyga) {
  // .....
// } else if (salyga) {
  // .....
// } else {
  // .....
// }


// A UZDUOTIS pasipraktykavymui
// susikurti du vardus (vardas1, vardas2)
// patikrinti ar vardai su tampa ar nea, ir pranesti i konsole
// "vardai sutampa" arba "vardai nesutampa"

var vardas1 = "Tomas";
var vardas2 = "Algis";
if (vardas1 == vardas2) {
  console.log("vardai sutampa");
} else {
  console.log("vardai nesutampa");
}

// B UZDUOTIS
// papildomai patikrinti uzdavini A, Jei vardas yra "Tomas", pasisveikinti su juo

if (vardas1 == "Tomas") {
  console.log("Sveikas Tomai");
} else if (vardas2 == "Tomas") {
  console.log("Sveikas Tomai");
} else {
  console.log("Tokio vardo nerasta");
}
// C UZDUOTIS
// Patikrinti ar vardas1 yra "Tomas", IR butinai vardas2 yra Juozas

// zymejimas: || arba == lygu && ir

var vardas1 = "Tomas";
var vardas2 = "Juozas";
if (vardas1 == "Tomas" && vardas2 == "Juozas") {
  console.log("vardai atitinka salyga");
} else {
  console.log("salyga netenkinama, pateikti vardai neatitinka duotuju");
}

// D UZDUOTIS
// Patikrinti ar abu vardai yra "Tomas"

var vardas1 = "Tomas";
var vardas2 = "Tomas";
if (vardas1 == "Tomas" || vardas2 == "Tomas") {
  console.log("abu vardai yra Tomas");
}

// =============================================================================
// 1 UZDUOTIS
// turesime vartotojo amziu
// var age = 24
// pagal ji turesime isvesti tam tikra reklama

// SALYGOS :

// iki 7 metu --> "Pliusines varles"
// nuo 7 iki 14 --> "Mini telefonai"
// nuo 14 iki 18 --> "New Music App"
// nuo 18 iki 24 --> "Stoki Sauliu sajunga"
// nuo 24 iki 65 --> "Pensijos kaupimas"
// nuo 65 --> "Kelione i Birstona"
// iki 7 metu ir po 65 metu papildomai pritaikyti 20% nuolaida "Sokoladiniams zuikuciams"

var age = 19;
if (age <= 7) {
  console.log("pliusines varles + 20% nuolaida sokoladiniams zuikuciams");
} else if (age <= 14) {
  console.log("mini telefonai");
} else if (age <= 18) {
  console.log("new music app");
} else if (age <= 24) {
  console.log("stok i sauliu sajunga");
} else if (age <= 65) {
  console.log("pensiju kaupimas");
} else if (age > 65) {
  console.log("kelione i birstona + 20% nuolaida sokoladiniams zuikuciams");
}
// kitas budas kaip priskirti 20% nuolaida sokoladinimas zuikuciams:

// if (age < 7 || age > 65) {
  // console.log("20% nuolaida sokoladinimas zuikuciams");
    // if (age > 65) {
    // console.log ("kelione i birstona")
  // } else {
  //console.log("pliusines varles");
//}
// }

// 2 UZDUOTIS
// sukurti 3 vardus: "Tomas", "Paulius", "Airidas"
// kai "if-ui" paduodame Toma- isvesti "Masinom 10% nuolaida"
// kai "if-ui" paduodame Pauliu - isvesti "Buitinei technikai 30% nuolaida"
// kai "if-ui" paduodame bet ka kita - isvesti "5% nuolaida kelionems"




// 3.0
// isvesti straipsni


// 3 UZDUOTIS
// paleisti f-ja printX 12 kartu ir atspausdinti <img...>

// 4 UZDUOTIS
// sukurti f-ja piestiEilute(x); spausdintiStulpeli(x); i konsole
