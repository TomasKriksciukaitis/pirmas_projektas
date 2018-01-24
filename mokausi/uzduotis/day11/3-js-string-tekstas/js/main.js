console.log("Labas");

// STRING metodai ("methods"):

// *** STRING lLENGTH (teksto ilgio metodas):

// kurdamiesi kintamuosius programuotojai daznai naudoja tokius pavadinimus:
// var = s (string), txt, string, text, temp, str;

var text = "Raudonkepuraite ejo per tamsu miska ir tamsu kemsyna";

// pasiziurime sio sakinio ilgi:

ilgis = text.length;
console.log("sakinys turi ", ilgis, "raidziu");

// taikymas: paswordo ilgis, straipsnio dydis....

// *** IndexOf() (paieskos metodas) gali ieskoti fraziu ir zodziu tiek sakiniuse tiek masyvuos,
// BET jei sakinyje yra dvi ir daugiau tokios pat frazes, zodziai - tai ji ras tik pirma ir toje vietoje
// nustos ieskoti
// norint rasti paskutine fraze ar sakini galime naudoti "lastIndexOf()":


var ieskomasZodis = 0;
ieskomasZodis = text.indexOf('tamsu');

// text.indexOf('tamsu', 36) skaicius 36 nurodytu nuo kurio simbolio pradeti ieskoti musu priskirtos frazes/zodzio
// to neturi funkcija "search()", kuri veikia taip pat kaip indexOf().

console.log("ieskomas zodis rastas uz \"tamsu\" ", ieskomasZodis, "simboliu, skaitant sakini nuo kaires i desine");

// noredami atspausdinti kabutes isvedant teksta i konsole naudoti reikia slesa (\) kuris ignoruoja sekanti po jo einanti simboli;


// naudojant "slice", paimti paskutinius 10 simboliu is musu teksto:

var paimsimTeksta = "";
paimsimTeksta = text.slice(ilgis-10, ilgis);
// ta pati galima aprasyti trumpiau: = text.slice(-10) paims 10 simboliu nuo galo
console.log("paskutinti simboliai: ", paimsimTeksta);


// pabandom pakeisti zodi "Raudonkepuraite" i "Baisus Vilkas" su komanda ".replace()":

var keiciamZodi = "";
keiciamZodi = text.replace("Raudonkepuraite", "Baisus Vilkas");
console.log("\"Raudonkepuraite\" pakeitem i: ", keiciamZodi);


// pakeiciam visa teksta i didziasias raides su funkcija "toUpperCase()":
var h = keiciamZodi.toUpperCase();
console.log("didziosios raides: ", h);


// galim issivesti kokretu, viena simboli:

var j = text[2];
console.log("pasirinktas \"[2] elementas is sakinio: ", j);

// is sakinio pasidarom masyva, atskiriam kiekviena zodi:

var k = text.split(" ");
console.log(k);

// sujungti vel atgal galima dviems budais:
// funkcija ".toString()"
// funkcija ".join(" ")" su sita f-ja reikia nurodyti skirikli:

var k = k.join(" ");
console.log("atgal sujungtas sakinys: ",k);


// EKSTRA:
// sukeisti zodzio "Antanas" pirma su paskutine raide vietomis:

var txt = "Antanas";
ilgis = txt.length;

// 1 sprendimas:

// var x = txt[0];
// var y = txt[txt.length -1];
// console.log(x, y);
// var vidurys = txt.slice(1, 6);
// txt = y + vidurys + x;
// console.log(txt);

// 2 sprendimas:

var raides = txt.split("");
console.log(raides);
var pirma = raides[0];
var paskutine = raides [txt.length-1];
raides[0] = paskutine;
console.log(raides);
raides[txt.length-1] = pirma;
console.log(raides);
txt = raides.join("");
console.log(txt);
