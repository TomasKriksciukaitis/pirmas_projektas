console.log("Labas");

// SWITCH funkcija
// su "switch" funkcija nebeikia tokie zenklai kaip daugiau, maziau, lygu. F-ja gali ieskoti tik konkretaus zodzio

var ieskome = "Jaudini"
var ieskome = ieskome.slice(0, -1);
console.log("issivedam sakni: ", ieskome);

switch (ieskome) {
  case "Audi":
    console.log("ieskoma fraze - AUDI");
    break;

    case "BMW":
      console.log("ieskoma fraze - BMW");
    break;

    case "VW":
      console.log("ieskoma fraze - VW");
    break;

    case "VOLVO":
      console.log("ieskoma fraze - VOLVO");
    break;

    case "udi":
      console.log("ieskoma fraze surasti is pateiktos saknies");

    break;

  default:
    console.log("ieskoma fraze nerasta ");
}

// ta pati galime parasyti ir su IF funkcija:

if (ieskome == "Audi") {
  console.log("ieskoma fraze - AUDI");
} else if (ieskome == "BMW") {
  console.log("ieskoma fraze - BMW");
} else if (ieskome == "VW") {
  console.log("ieskoma fraze - VW");
} else if (ieskome == "VOLVO") {
  console.log("ieskoma fraze - VOLVO");
} else {
  console.log("ieskoma fraze nerasta ");
}


// PASIKARTOJAM:

// JS saugosime mokinio informacija:
// mokinio: vardas, pavarde, kelintokas, mokinio matematikos
// pazymiai (6, 5, 9, 10, 8)
// UZDUOTIS:
// 1) isvestii i konsole mokinio duomenis
// 2) pasirasyti funkcija, kuri is duotu 5 pazymiu, grazintu ju vidurki

var duomenis = [];
var pazymiai = [];

duomenis["vardas"] = "Tomas";
duomenis["pavarde"] = "Tomicius";
duomenis["kelintokas"] = "Devintokas";
duomenis["matematikosPazymiai"] = "pazymiai";

pazymiai[0]=6;
pazymiai[1]=5;
pazymiai[2]=9;
pazymiai[3]=10;
pazymiai[4]=8;

console.log("mokinio duomenys: ", duomenis);
console.log("matematikos pazymiai: ", pazymiai);

// skaiciuojam vidurki:

function pazymiuVidurkis(x1, x2, x3, x4, x5) {
  var suma = x1 + x2 + x3 + x4 + x5;
  var vidurkis = suma / 5;
  console.log("pazymiu vidurkis - ", vidurkis);
}
pazymiuVidurkis(6, 5, 9, 10, 8);
