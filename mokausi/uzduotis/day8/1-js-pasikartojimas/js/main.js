console.log("Labas");
// ===== PATARIMAI ===================================
// reiksme - kintamasis / variable
// "reiksme" - tekstas / reiksme / value
// reiksme() - f-ja paleidimas
// ===================================================

// ===== PASIKARTOTI funkcijas =======================

// 01 UZDUOTIS
// sukurti 3 Globalius kintamuosius: vardas, pavarde, klase (ir jiems priskirti reiksmes)
// atspausdinti visus kintamuosius

var vardas = "Tomas";
var pavarde = "Kriksciukaitis";
var klase = 12;
// isvedam i konsole:
console.log(vardas, pavarde, klase);
// arba (iskart isvardinti visus:)
// var vardas, pavarde, klase;
// vardas = "Tomas";
// pavarde = "Kriksciukaitis";
// klase = 12;

// ===== UZDRAUSTI ZODZIAI javaScript: var false true null

// 02 UZDUOTIS
// sukurti funkcijas:
// printName() printLName() printClass(),
// kurios atspausdina i konsole pirmos uzduoties kintamuosius

//function printName() {
  //console.log(vardas);
//}
//printName();
//function printLName() {
  //console.log(pavarde);
//}
//printLName();
//function printKlase () {
  //console.log(klase);
//}
//printKlase();

// kai rasome atskirai: print funcija galime rasyti pacioje apacioje:

// printKlase();
// printName();
// printLName(); --> kokia tvarka surasysim tokia tvarka ir atspausdins


//arba paprasciausiai vienoje funkcijoje:
function printVardasPavardeKlase() {
  console.log("vardas: ", vardas);
  console.log("pavarde: ", pavarde);
  console.log("klase: ", klase);
  // pridedam vieneta prie pirmos klase reiksmes (-- sumazina viena reiksme)
  // -- ar ++ prieky isveda jau sumazinta arba padidinta reiksme
  // -- ar ++ gale pirma isveda tikra reiksme o po to padidinta ar pamazinta reiksme
  console.log("klase", ++klase);
}
printVardasPavardeKlase();

// 03 UZDUOTIS
// parasyti f-ja printVardasPavardeKlase(name, Lname, klase)
// kuria iskviesti 3 kartus su skirtingais zmoniu vardais ir pavardems

function printVardasPavardeKlase(name, lname, klase) { // lokali reiksme
  // var angelas = "gabrielius" lokali reiksme taip pat nes funkcijos viduje sukurtas
  console.log(name, lname, klase);
}
printVardasPavardeKlase("Jonas", "Jonauskas", 12);
printVardasPavardeKlase("Aidas", "Adomaitis", 12);
printVardasPavardeKlase("Zala", "Zalumynas", 12);

// ==================================================






// ===== TEKSTO ISVEDIMAS ===========================
// UZDUOTIS
// ismeginti komandas:

// documen.write komanda isveda teksta toje vietoje kur HTML faile yra idetas java scriptas
//document.write("<b class='bg-info'>mano</b> tekstas <br>su js</br>");

// windows.alert("Labas");
// alert("labanaktis");

// paskutines dvi eilutes sukuria kintamaji (ka tu ivedi) ir isveda i konsole
// var ivestasTekstas = prompt("iveskite savo varda");
// console.log(ivestasTekstas);

// ==================================================
// 0 UZDUOTIS
// sukurti f-ja printKaina(x)
// kuri atspausdina i konsole x reiksme
// isveskite f-ja 3 kartus, kad atspausdintu 3 skirtingas kainas: 999.00, 13.49, 100.05
// ir vietoje x irasyti, koki nors teksta, pvz: printKaina(999.00);
function printKaina1(x) {
  console.log(x);
}
printKaina1(100);

// arba galime kurtis 3 kaintamuosius ir atskirai nurodyti kokius kintamuosius kada iskviesti

function printKaina() {
  var kaina1 = 999.00;
  var kaina2 = 13.49;
  var kaina3 = 100.05;

  console.log("kaina: ",kaina1);
  console.log("kaina: ",kaina2);
  console.log("kaina: ",kaina3);
}
printKaina();

// 1 UZDUOTIS
// parasyti f-ja pazymiuVidurkis(), kuri apskaiciuoja vidurki is   menesiu pazymiuVidurkis
// skaiciuoti pazymiu vidurki 5, 10, 8, 6, 8 (ir atspausdintu vidurki)

function pazymiuVidurkis() {
  var suma = 5 + 10 + 8 + 6 + 8;
  var vidurkis = suma / 5;
  console.log("pazymiu vidurkis - ", vidurkis);
}
 pazymiuVidurkis();

 // 1.1 UZDUOTIS
 // parasyti f-ja pazymiuVidurkis1(x1, x2, x3, x4, x5), kuriai galima paduoti 5 kintamuosius,
 // kuri apskaiciuoja vidurki is 5 menesiu pazymiu
 // suskaiciuoti pazymiu vidurki: 5, 10, 8, 6, 8 (ir atspausdinti vidurki ekrane konsoles)

 function pazymiuVidurkis1(x1, x2, x3, x4, x5) {
   var suma = x1 + x2 + x3 + x4 + x5;
   var vidurkis = suma / 5;
   console.log("pazymiu vidurkis - ", vidurkis);
 }
pazymiuVidurkis1(5, 10, 8, 6, 8);
pazymiuVidurkis1(9, 8, 7, 9, 10);
pazymiuVidurkis1(3, 4, 2, 3, 4);

// 1.2 UZDUOTIS
// parasyti f-ja getPazymiuVidurkis2(x1, x2, x3, x4, x5), kuriai galima paduoti 5 kaintamuosius
// kuri apskaiciuoja idurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atsakymas;")

function getPazymiuVidurkis2(x1, x2, x3, x4, x5) {
  var vidurkis = (x1 + x2 + x3 + x4 + x5) / 5;
  return vidurkis;
}
var x = getPazymiuVidurkis2(8, 6, 10, 3, 4);
console.log("musu vidurkis yra - ", x);

// kiti pavyzdziai:

function getAtlyginimas() {
  var alga = 5 * 8 * 21; // lokalus kintamasis 840
  return alga;
}
var x = getAtlyginimas(); // gausim 840
console.log("menesines pajamos: ", x);

function getName() {
  var vardas ="testas";
  // kodas
  return vardas;
  var vardas = "Justinas"; // nevykdis nes pries tai parasytas return, ties return f-ja nustoja veikusi
}
var x = getName();
console.log(x);

 // 1.3 UZDUOTIS
 // parasyti f-ja getPazymiuVidurkis3(), kuriai galima paduoti 5 kintamuosius ir jie getPazymiuVidurkis
 // default/ isankstine reiksme "0"
 // kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu

function getPazymiuVidurkis3(x1 = 0, x2 = 0, x3 = 0, x4 = 0, x5 = 0) {
  var vidurkis = (x1 + x2 + x3 + x4 + x5) / 5;
  return vidurkis;
}
var x = getPazymiuVidurkis3(10, 5);
console.log("musu vidurkis su default reiksme yra - ", x);

// ===== FOR ir LOOP ===========================================================

// 1 UZDUOTIS
// isvesti 50 kartu zodi "Azuolas" i konsole (! bandant tai padaryti atsiras skaicius 50)

for (var i = 0; i < 50; i++) {
  console.log("Azuolas",i); // jei norim kad konsoleje norite atspausdinti 50 zodziu
  // reikia darasyti --> "console.log("Azuolas", i)", i raide pades atspausdinti visas reiksmes
}

// 1.2 UZDUOTIS
// isvesti 50 kartu zodi <h2> Azuolas </h2> i <article> elementa su innerHTML pagalba

for (var i =  0; i < 3; i++) {
  // document.write("<h2> Azuolas </h2>", i);

  document.querySelector("section").innerHTML += "Azuolas <br>";
}

// kiek uzdirbsime per 20 metu gaudami 680 eur., per menesi, kai alga kyla 1% kas men.

var kiekMenesiu = 20 * 12;
var menAtlyginimas = 680;
var algosPokytis = 2; // 2%
for (var i = 0; i < kiekMenesiu; i++) {
  var padidejimas = (menAtlyginimas * algosPokytis) / 100;
  // console.log("men 2 % padidejimas - ", padidejimas);
  menAtlyginimas = menAtlyginimas + padidejimas;
  // console.log("kasmenesine alga - ", menAtlyginimas);
}
console.log("alga po dvidesimties metu i men., bus - ", menAtlyginimas);

// 2 A UZDUOTIS
// sukurti f-ja printX(xx) i browser langa

function printX(tekstas) {
  console.log(tekstas);
}
// printX("tomas");

// 2 B UZDUOTIS
// paleisti f-ja printX 100 kartu

for (var i = 0; i < 100; i++) {
  printX("alga:" + (680 +i));
  }

// 3 UZDUOTIS
// paleisti f-ja printX 12 kartu ir atspausdinti <img... >

// 4 UZDUOTIS
// sukurti f-ja piestiEilute(x); spausdintiStulpeli(x); i konsoles
