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
// parasyti f-ja getPazymiuVidurkis(x1, x2, x3, x4, x5), kuriai galima paduoti 5 kaintamuosius
// kuri apskaiciuoja idurki is paduotu 5 menesiu pazymiu (ir grazina atsakyma i iskvietimo vieta! "return atsakymas;")



 // 1.3 UZDUOTIS
 // parasyti f-ja getPazymiuVidurkis(), kuriai galima paduoti 5 kintamuosius ir jie getPazymiuVidurkis
 // default/ isankstine reiksme "0"
 // kuri apskaiciuoja vidurki is paduotu 5 menesiu pazymiu
