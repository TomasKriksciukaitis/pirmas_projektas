console.log("Labas");

// pasikartojimas KART_ARRAY
// 1. sukurti masyva (uzpildyti 10-cia vardu)
// 2. atspausdinti masyva sy FOR ciklu
// 3. atspausdinti masyva su WHILE ciklu

// 1.

var sarasas =["Tomas", "Antanas", "Mindaugas", "Jonas", "Jurate", "Gintaras", "Gendre", "Tadas", "Benas", "Mecislovas"];
console.log("sarasas", sarasas);

// masyva (array) gali b8ti kuriamas ir kitu budu:
var sarasas2 = [];
sarasas2[0]="Tomas"
sarasas2[1]="Antanas"
sarasas2[2]="Mindaugas"
sarasas2[3]="Jonas"
sarasas2[4]="Jurate"
sarasas2[5]="Gintaras"
sarasas2[6]="Gendre"
sarasas2[7]="Tadas"
sarasas2[8]="Benas"
sarasas2[9]="Mecislovas"
console.log("sarasas", sarasas2);

// gali masyvo elementus issivesti i viena stringa su "join()" komanda (kuri turi skiriklius):

console.log("sarasas2", sarasas2.join(" ; "));

// alternatyva "join()" komandai yra "toString()" bet ji yra be skirikliu, tiesiog atskiria reiksmes kableliu:

console.log("sarasas2", sarasas2.toString());

// dvieju masyvu sujungimas i viena su "concat()" komanda:

var visiSarasai = [];
visiSarasai = sarasas.concat(sarasas2);
console.log("Bendras sarasas",visiSarasai);

// MASYVO KOPIJAVIMAS: susikurkim masyva "x":

var x = ["Tomas", "Paulius", "Arturas", "Tadas", "Karolis"];
console.log("masyvas x: ", x);

// prilyginam x masyva y ir issivedam i konsole:

var y = [];
y = x;
console.log("nukopijuotas x masyvas ir pervadintas y: ", y);

// padarau pakeitimus "y" masyve ir issivesti abu masyvus: "x" ir "y" i konsole:
// "y" masyve i prieki idedam vardas "RAMUNAS":

y.unshift("RAMUNAS");

console.log("x: ", x);
console.log("y: ", y);

// issivedus i konsole pamatysite, kad tiek "x", tiek "y" masyvai pasikeite, nes masyvas yra OBJEKTAS, o objektus kopijuojant
// jie abu sulyginami kompiuteris ziuri i ta pati adresa ,

// todel kopijuojant masyvus geriausiai nenaudoti LYGYBES ZENKLO !!!!
// vietoj to naudoti komanda ".slice(0, length)"

// pabandom panaudojus ".slice(0, length)" komanda nukopijuoti puse "sarasas" masyvo:

var z = [];
z = sarasas.slice(0, 5);
console.log("nukopijuota masyvo dalis su slice komanda:", z);

// pakeiciam masyva "z" ir pabandom i konsole issivesti masyvus: "sarasas" ir "z":

z.push("RAMUNAS");
console.log("papildytas masyvas z: ", z);
console.log("originalus masyvas sarasas: ", sarasas);


// 2 UZDUOTIS
// atspausdinsim masyva su FOR ciklu:

for (var i = 0; i <visiSarasai.length; i++) {
  var g = visiSarasai[i];
  console.log("printFOR ", g);
}


// 3 UZDUOTIS
// atsispausdinsim masyva su WHILE ciklu:

// susikursim kintamaji t (cia betkoks gali buti)
var t = 0;
while (t < visiSarasai.length) {
  var h = visiSarasai[t];
  console.log("printWHILE ", h);
  t++;
}
