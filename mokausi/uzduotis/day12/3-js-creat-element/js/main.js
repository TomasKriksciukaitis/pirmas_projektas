console.log("Labas");

// <aside>  elemento objekto (Node) kurimas
 var footer = document.createElement("footer");
 console.log(footer);


 // paprasto teksto rasymas
var text = document.createTextNode("naujai sukurtas tekstas su JS");
 // or
 //elmAside.innerHTML += "lorem lorem lorem2";
console.log(text);


// elemento idejima i kita elemneta
footer.appendChild(text);
console.log(footer);




// ! sukurti elementai - buna dar neideti i window  document html puslapi
//  objekto (Node) idejimas i HTML

document.querySelector('.container').appendChild(footer);


// su js sukurti 5 paveiksliukus
var img = " <img src='../5.jpg' width='200px' alt='nera tokio jpg failo'>";
// sukurti elementa "section" ir jame atspausdinti visus paveiksliukus
var section = document.createElement('section');
// idedam "section" i savo HTMLa
document.querySelector('.container').appendChild(section);
section.innerHTML += img;
section.innerHTML += img;
section.innerHTML += img;
section.innerHTML += img;
section.innerHTML += img;
// or
var img2 = document.createElement('img');
img2.setAttribute('src', '../5.jpg');
img2.setAttribute('alt', 'nera tokio jpd failo');
img2.setAttribute('width', '300px');
document.querySelector('.container').appendChild(img2);
// juos sudeti i masyva
var sarasas = [img2, img2, img2];
// ikeliam "push" metodu:
sarasas.push(img2);
sarasas.push(img2);
sarasas.push(img2);
// atspausdinsim i HTML su "for" ciklu, 5 paveiksliukus:
for (var i = 0; i < sarasas.length; i++) {
  section.appendChild(sarasas[i])
}
console.log(sarasas);


// komandos "insertBefore", ir " insertAfter":
// document.footer.insertBefore(text, footer);
// document.body.insertAfter(text, body);
