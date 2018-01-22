console.log("Labas");

// day9 pasikartojimui (namu darbai):

// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais
// "0" (kiekvienas stalius turi buti lygus "0");

var sarasas = [];
for (var i = 0; i < 50; i++) {
  // sarasas.push( 0 );
  // arba sukurti masyva galime kitu budu:
  sarasas[i] = 0;
}
console.log("masyvas su FOR",sarasas);

// 5.1 sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti skaiciu 1;

var t = 0;
var sarasas2 = [];
while (t < 50) {
  sarasas2[t] = 1;
  t++; // turime butinai didinti t reiksme, kitu atveju funkcija bus begaline
}
console.log("masyvas su WHILE", sarasas);

// var asVedes = false;
// var saugiklis = 0;
// // while (asVedes == false) { // jei norime ieskoti asVedes priesingos reiksmes, galime vietoje == false rasyti !
// while (!asVedes) {
//   console.log("ieskau zmonos");
//   saugiklis++;
//   if (saugiklis == 1000 ) {
//     break;
//   }
// }

// 5.2 kas antra masyvo elementa pakeisti i "3"

var masyvoIlgis = sarasas.length;
console.log(masyvoIlgis);
// for (var i = 1; i < masyvoIlgis; i+=2) {
//   sarasas[i] = 3;
// }
// kitas budas, naudojant modulus dalyba (dalyba su liekana)

for (var i = 0; i < masyvoIlgis; i++) {
  if (i % 2 != 0) { // tikrins ar nelyginis, tai nurodo sauktukas
    sarasas[i]=3;
  }
}

console.log("kas antras elementas yra 3", sarasas);

// 5.3 kas penkta masyvo elementa pakeisti i "9"
