console.log("Labas");

// day8 pasikartojimui (namu darbai):

// 3 UZDUOTIS
// paleisti f-ja printX 11 kartu ir atspausdinti <img... >

var x = document.querySelector('.container');
console.log(x); // i DOMa issivedam elementa kuriam priklauso class="container"

var img = '<img src="./img/03.jpg" width="100px" height="100px">';
var img2 = '<img src="./img/04.jpg" width="60px" height="60px">';
for (var i = 0; i < 11; i++) {
  document.querySelector('.container').innerHTML += img;
  document.querySelector('h1').innerHTML += img2;

}

var tekstas = document.querySelector('h1').innerHTML;
console.log("isvestas tekstas is h1: ", tekstas);

document.querySelector('h1').textContent = "Hacked";


// 4 UZDUOTIS
// sukurti f-ja piestiEilute(x); spausdintiStulpeli(x); i konsoles
