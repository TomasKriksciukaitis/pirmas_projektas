console.log("Labas");

var adresas = "Kaunas, Savaoriu prospektas 138"
console.log(adresas);

adresas = "Kauno rajonas, Teleiciu kaimas"
console.log(adresas);

console.log("mano adresas: ", adresas);

var x = 100;
var y = 20;
var X = 2;

atsakymas = ((x+y)*(X*X))/X;
console.log("atsakymas = ", atsakymas);

var k = "99";
atsakymas = k + y;
console.log(atsakymas);

// funkcija kuri isveda kintamojo reiksme
// typeof(k);

// 1 UZDUOTIS:
// sukurti kintamuosius ir jiems priskirti reiksmes
//vardas, pavarde, amzius, atlyginimas

var vardas = "Tomas";
var pavarde = "Tomulis";
var amzius = 21;
var atlyginimas = 3000;
// arba :
// var vardas, pavarde, amzius, atlyginimas;
// vardas = "tomas";
// pavarde = "tomulis";
// amzius = 21;
// atlyginimas = 3000;
console.log(vardas, pavarde, amzius, atlyginimas);

// 2 UZDUOTIS
// sukurti funkcija "printVardasPavardeAmzius()" kuri atspausdinta i konsole pirmos uzduoties kintamuosius

function printVardasPavardeAmzius() {
  console.log("vardas: ", vardas);
  console.log("pavarde: ", pavarde);
  console.log("amzius: ", amzius);
  console.log("atlyginimas: ", atlyginimas);
  console.log("atlyginimas: ", --atlyginimas);
}
printVardasPavardeAmzius();

// 3 UZDUOTIS
// sukurti funkcija "printMetinisPajamuDydis()"
// kuri atspausdina i konsole suma 12 atlyginimu (vienas atlyginimas lygus uzduotis 1 kintamajam - atlyginimas

function printMetinisPajamuDydis() {
  //var x = 12;
  //var ats = atlyginimas * x;
  //console.log("metinis pajamu dydis: ", atlyginimas*x);
  // ARBA viena eilute surasome viska
  console.log("metinis pajamu dydis: ", atlyginimas * 12);
}
printMetinisPajamuDydis();
