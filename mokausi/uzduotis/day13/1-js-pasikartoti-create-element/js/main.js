console.log("Labas");

// uzduotys - pasikartojimui:

// A - sukurti "header" elementa

var header = document.createElement("header");

// B - sukurti "h3" su tekstu viduje ir ideti i "header" elementai

var h3 = document.createElement("h3");
// teksta galima sukurti ir kitu budu:
h3.innerHTML += "<b>sukurem</b> tekstas su JS";
var text = document.createTextNode("sukurem teksta su JS");
h3.appendChild(text);

// C - "header" elementa ideti i "body"

var body = document.createElement("body");
body.appendChild(header);

//  objekto (Node) idejimas i HTML

document.querySelector('body').appendChild(header);

// arba, jei norime ideti i konkrecia vieta dedame kitu budu:

document.querySelector('.container').insertBefore(header, document.querySelector('h1'));
header.appendChild(h3);
