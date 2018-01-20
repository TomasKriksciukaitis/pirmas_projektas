console.log("Labas");

// ===== ARRAY / Masyvai

names = ["Tomas", "Pietkus", 25, "VDU-Inzinerija"];

console.log(names);
names[0] = "Marijus" // i pirma masyvo vieta idedam nauja varda "Marijus" (vietoj "Tomas")
console.log(names);

var ilgis = names.length; // nurodo kiek masyve yra elementu
console.log("masyvo ilgis: ", ilgis);
console.log(names.join(" , ")); // tarp masyvo elementu padeda nurodytas reiksmes, simbolius

console.log("----- nerikiuotas -----");
console.log(names.join(" "));

console.log("----- rikiuotas -----");
console.log(names.sort());

names.push("1986-03-11");
console.log(names);

names.push("ID: 51863226");
names.push("Class-7C")
console.log(names);
names.pop(); // IDEA: istriname paskutini elementa
console.log(names);

names.unshift("Citrina"); // idedam elementa i array prieki
console.log(names);

names.shift(); // istrinta nulinta reiksme is array
names.shift();
names.shift();
names.shift();
console.log(names);

delete names [2]; // istrina antra elementa is array ir palieka skyle (vietoj istrinto elemento raso "empty")
console.log(names);

// 1 - iterpinejam nuo pirmo elemento
// 0 - istrinti nieko, nes reiksme "0"
// "Naujas vardas", "NAUJAS ELEMENTAS" - iterpeme
names.splice(1, 0, "Naujas vardas", "NAUJAS ELEMENTAS");
console.log(names);

// IDEA: istriname elementa "Naujas vardas"
names.splice(1,1); // pasizymime 1 elementa ir 1 zymi kad triname tik viena reiksme
console.log(names);

var x = names; // negerai
var x = names.slice(0, 2); // skaiciai nurodo: pirmas skaicius - nuo kurio elemento pradedam ir antras skaicius - kiek elementu pasiimam is masyvo
console.log(x);

// console.log("masyvo ilgis " + names.lenght);
// .......

// UZDUOTIS ARRAY
// 1. i masyvo gala ideti elementa "butelis vandens"
names.push("butelis vandens");
console.log(names);
// 2. i masyvo pradzia ideti elementa "ziebtuvelis"
names.unshift("ziebtuvelis");
console.log(names);
// 3. istrinti 3 elementa
delete names [3];
console.log(names);
// 4. sukurti masyva (50 ilgumo) naudojant FOR ir uzpildyti visa skaiciais
// "0" (kiekvienas stalius turi buti lygus "0");

// 5.1 sukurti masyva naudojant WHILE (50 ilgumo) ir uzpildyti skaiciu 1;
// 5.2 kas antra masyvo elementa pakeisti i "3"
// 5.3 kas penkta masyvo elementa pakeisti i "9"
